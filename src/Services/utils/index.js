/* eslint-disable no-async-promise-executor */
import axios from "axios";
import { persistor, store } from "../store";
import {
  setConversationHistory,
  setCurrentConversationId,
  setLoading,
  setTokens,
  setVoxUsers,
} from "../store/conversationSlice";
import { voxService } from "../voximplant";
import MessengerService from "../voximplant/messenger";
import {
  ACC_NAME,
  APP_NAME,
  TIME_NOTIFICATION,
  VOX_ACCOUNT_ID,
  VOX_API_KEY,
  VOX_APP_ID,
} from "./constants";

export const reloginVox = () => {
  if (!store.getState().auth.token) {
    return false;
  }
  return new Promise(async (resolve, reject) => {
    try {
      const token = store.getState().conversation.vox_token_a;
      let userData = store.getState().auth.userData;
      if (token && userData) {
        store.dispatch(setLoading(true));
        const userName = `${userData.email.replace("@", "-flame-")}`;
        const login = await voxService
          .onLogin(
            {
              user: `${userName}@${APP_NAME}.${ACC_NAME}.voximplant.com`,
            },
            token
          )
          .catch((e) => {
            console.log("auth error", e);
            persistor.purge();
            localStorage.clear();
            voxService.get().disconnect();
            // history.push("/sign-in");
          });
        if (login?.result) {
          store.dispatch(
            setTokens({
              auth_token: login.tokens,
              login: userData.email.replace("@", "-flame-"),
            })
          );
          let messengerService = MessengerService.get();
          await messengerService
            .init()
            .then((data) => {
              console.log(
                "voximplant relogin messenger service initialize",
                data
              );
              store.dispatch(setVoxUsers(data));
              const {
                conversation: { currentConversationId },
              } = store.getState();
              // getCurrentConversation(currentConversationId);
              loadAllConversation(
                data.conversations,
                data.currentUser,
                data.users
              );
            })
            .catch((error) => {
              console.log(
                "voximplant messenger relogin service initialize failed",
                error
              );
              store.dispatch(setVoxUsers({}));
            });
        } else {
          console.log("voximplant user relogin failure", login);
        }
        store.dispatch(setLoading(false));
      }
    } catch (error) {
      store.dispatch(setLoading(false));
      reject({ error: error });
    }
  });
};

export const onlineReceived = (userId, online) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {
        conversation: { vox_users },
      } = store.getState();
      const updateData = vox_users.users.map((item) => {
        if (item.userId == userId) {
          return {
            ...item,
            online: online,
            timeStamp: new Date().getTime(),
          };
        } else if (
          item.timeStamp &&
          new Date().getTime() - item.timeStamp > TIME_NOTIFICATION
        ) {
          return {
            ...item,
            online: false,
            timeStamp: new Date().getTime(),
          };
        }
        return item;
      });
      store.dispatch(
        setVoxUsers({
          ...vox_users,
          users: updateData,
        })
      );
    } catch (error) {
      reject({ error: error });
    }
  });
};

export const onMessageSent = (e) => {
  e.message.timestamp = e.timestamp;
  e.message.seq = e.seq;
  const {
    conversation: { vox_users, conversationHistory, currentConversationId },
  } = store.getState();

  if (e.message.sender === vox_users.currentUser.userId) {
    e.message.user = vox_users.currentUser;
  } else {
    e.message.user = vox_users.users.find((c) => c.userId === e.message.sender);
  }
  if (
    conversationHistory &&
    currentConversationId &&
    e.message.conversation === currentConversationId
  ) {
    const conversationsHistoryTemp = {
      ...conversationHistory,
      [currentConversationId]: [
        ...(conversationHistory[currentConversationId] || []),
        e.message,
      ],
    };
    console.log("conversationsHistoryTemp", conversationsHistoryTemp);
    store.dispatch(setConversationHistory(conversationsHistoryTemp));
  }
};

export const loadAllConversation = (conversations, currentUser, vox_users) => {
  let ps = [];

  conversations &&
    conversations.map((item) => {
      const uuid = item.uuid;
      const lastEvent = item.lastEvent ? item.lastEvent : item.lastSeq;

      ps.push(
        MessengerService.get()
          .retransmitMessageEvents(item, lastEvent)
          .then((messageEvents) => {
            let conversationsHistory = {};

            const messages = messageEvents.map((e) => {
              e.message.timestamp = e.timestamp;
              e.message.seq = e.seq;

              if (e.message.sender === currentUser.userId) {
                e.message.user = currentUser;
              } else {
                e.message.user = vox_users.find(
                  (c) => c.userId === e.message.sender
                );
              }

              const arrLastRead = item.participants.map((p) => {
                return p.userId !== currentUser.userId ? p.lastRead : 0;
              });

              if (Math.max(...arrLastRead) >= e.seq) {
                e.message.markAsRead = true;
              }

              return e.message;
            });

            if (messages.length > 0) {
              const conversationID = messages[0].conversation;
              conversationsHistory = {
                messages: [...messages],
                uuId: conversationID,
              };
            } else {
              conversationsHistory = {
                messages: [...messages],
                uuId: uuid,
              };
            }
            return conversationsHistory;
          })
      );
    });

  store.dispatch(setLoading(true));
  Promise.all(ps)
    .then((results) => {
      let conversationsHistory = {};
      results &&
        results.map((item) => {
          conversationsHistory = {
            ...conversationsHistory,
            [item.uuId]: item.messages,
          };
        });
      store.dispatch(setConversationHistory(conversationsHistory));
      store.dispatch(setLoading(false));
      console.log(
        "load all conversation history success",
        conversationsHistory
      );
    })
    .catch((err) => {
      console.log("load all conversation history error", err);
      store.dispatch(setLoading(false));
    });
};

export const onConversationCreated = (e) => {
  console.log("Conversation created", e);
  const {
    conversation: { vox_users },
  } = store.getState();

  if (e.conversation.customData.type === "direct") {
    const participant = e.conversation.participants.find(
      (p) => p.userId !== vox_users.currentUser.userId
    );
    e.conversation.directUserId = participant.userId;
  }

  let conversations = [...vox_users.conversations, e.conversation];
  console.log(conversations);
  //   store.dispatch(updateVoxConversationSuccess(conversations));
  console.log(
    "DDDDDDDDDDDDDDD",
    e.initiator,
    vox_users.currentUser.userId,
    e.initiator === vox_users.currentUser.userId
  );
  if (e.initiator === vox_users.currentUser.userId) {
    store.dispatch(setCurrentConversationId(e.conversation.uuid));
    //   history.push(`/hub/chat/collaborators-chat?uuid=${e.conversation.uuid}`);
  } else {
    const newUsers = e.conversation.participants.filter(
      (p) => !vox_users.users.some((u) => u.userId === p.userId)
    );

    if (newUsers.length) {
      const usersIds = newUsers.map((u) => u.userId);
      MessengerService.messenger
        .getUsersById(usersIds)
        .then((events) => {
          const users = [...vox_users.users, ...events.map((e) => e.user)];
          store.dispatch(setVoxUsers(users));
        })
        .catch(console.log);
    }
  }

  const otherParticipantIds = e.conversation.participants
    .map((p) => p.userId)
    .filter((id) => id !== vox_users.currentUser.userId);

  if (otherParticipantIds.length) {
    MessengerService.messenger
      .subscribe(otherParticipantIds)
      .then((e) => {
        console.log("Subscribed to conversation participants", e);
      })
      .catch(console.log);
  }
};

export const onMessageMarkAsRead = (evt) => {
  const {
    conversation: { vox_users, conversationHistory, currentConversationId },
  } = store.getState();
  if (evt.initiator !== vox_users.currentUser.userId) {
    const updateHistory = conversationHistory[currentConversationId].map(
      (m) => {
        if (m.seq >= evt.seq) {
          return {
            ...m,
            markAsRead: true,
          };
        }
        return m;
      }
    );
    store.dispatch(setConversationHistory(updateHistory));
  }
};

const currentDirectConversations = (vox_users) =>
  vox_users &&
  vox_users.conversations &&
  vox_users.conversations.filter((c) => c.direct);

const currentDirectUsersId = (vox_users) => {
  const currDirectConversations = currentDirectConversations(vox_users);
  return (
    currDirectConversations &&
    currDirectConversations.reduce((res, d) => {
      d.participants.forEach((u) => {
        if (u.userId !== vox_users.currentUser.userId) {
          res.push(u.userId);
        }
      });

      return res;
    }, [])
  );
};

export const getDirectConversation = (userId) => {
  const { conversation: {vox_users }} = store.getState();
  const currDireactUsersId = currentDirectUsersId(vox_users);
  if (currDireactUsersId && currDireactUsersId.includes(userId)) {
    const index = currentDirectUsersId(vox_users).indexOf(userId);
    const chatUuid = currentDirectConversations(vox_users)[index].uuid;
    console.log(chatUuid)
    store.dispatch(setCurrentConversationId(chatUuid));
  } else {
    MessengerService.get().createDirect(userId).catch(console.log);
  }
};

export const getCurrentConversation = (chatUuid) => {
  const {conversation:{ conversationHistory }} = store.getState();
  if (typeof chatUuid === "string") {
    store.dispatch(setCurrentConversationId(chatUuid));
    console.log(conversationHistory[chatUuid])
    if (chatUuid && !conversationHistory[chatUuid]) {
      getConversationHistory(chatUuid);
    }
  } else if (typeof chatUuid === "number") {
    console.log('DDDDDDDDDDDDDD', chatUuid)
    getDirectConversation(chatUuid);
  }
};

export const currentConversation = (uuid) => {
  const {
    conversation: { vox_users,currentConversationId },
  } = store.getState();
  const con_uuid = uuid || currentConversationId;
  return (
    vox_users &&
    vox_users.conversations &&
    vox_users.conversations.find((c) => c.uuid === con_uuid)
  );
};

export const getConversationHistory = async (uuid) => {
  const curConversation = currentConversation(uuid);
  const {
    conversation: { vox_users,conversationHistory },
  } = store.getState();

  const lastEvent =
    conversationHistory && conversationHistory.length
      ? curConversation && curConversation.lastEvent
      : curConversation && curConversation.lastSeq;

  if (lastEvent !== 0 && curConversation) {
    store.dispatch(setLoading(true));
    await MessengerService.get()
      .retransmitMessageEvents(curConversation, lastEvent)
      .then((messageEvents) => {
        const messages = messageEvents.map((e) => {
          e.message.timestamp = e.timestamp;
          e.message.seq = e.seq;

          if (e.message.sender === vox_users.currentUser.userId) {
            e.message.user = vox_users.currentUser;
          } else {
            e.message.user = vox_users.users.find(
              (c) => c.userId === e.message.sender
            );
          }

          // TODO 'll highlight to singular dispatch
          // if one participant read a message, it marked as read
          const arrLastRead = curConversation.participants.map((p) => {
            return p.userId !== vox_users.currentUser.userId ? p.lastRead : 0;
          });

          if (Math.max(...arrLastRead) >= e.seq) {
            e.message.markAsRead = true;
          }

          return e.message;
        });
        if (messages.length > 0) {
          const conversationID = messages[0].conversation;
          const conversationsHistory = {
            ...conversationHistory,
            [conversationID]: [...messages],
          };
          console.log('OOOOOOOOOOOOOOO', conversationsHistory)
          store.dispatch(setConversationHistory(conversationsHistory));
        }
        store.dispatch(setLoading(false));
        // context.dispatch('markedAsRead', context.getters.currentConversation.lastSeq);
      })
      .catch((err) => {
        console.log("current conversation error", err);
        store.dispatch(setLoading(false));
        store.dispatch(setConversationHistory({}));
      });
  }
};

export const voxRegister = async (data, name) => {
  const userCustomData = {
    userId: data.data.content.user_id,
    email: data.data.content.user_email,
    displayName: name,
  };
  const userName = data.data.content.user_email.replace("@", "-flame-");
  const password = `${data.data.content.user_email.split("@")[0]}${
    data.data.content.user_id
  }`;

  const voxRegister = await axios.get(
    `https://api.voximplant.com/platform_api/AddUser/?api_key=${VOX_API_KEY}&application_id=${VOX_APP_ID}&user_name=${userName}&user_display_name=${userName}&user_password=${password}&account_id=${VOX_ACCOUNT_ID}&user_custom_data=${encodeURIComponent(
      JSON.stringify(userCustomData)
    )}`
  );
  if (voxRegister) {
    voxLogin(userName, password, data.data.content.user_email);
  }
  return voxRegister;
};
export const voxLogin = async (user, password, email) => {
  console.log(user, password, email);
  const login = await voxService.onLogin(
    {
      user: `${user}@${APP_NAME}.${ACC_NAME}.voximplant.com`,
      password: password,
    },
    null
  );
  if (login.result) {
    store.dispatch(
      setTokens({
        auth_token: login.tokens,
        login: email.replace("@", "-flame-"),
      })
    );
    let messengerService = MessengerService.get();
    store.dispatch(setLoading(true));
    await messengerService
      .init()
      .then((data) => {
        console.log("voximplant messenger service initialize", data);
        store.dispatch(setVoxUsers(data));
        store.dispatch(setLoading(false));
        // const {
        //   user: { currentConversationId },
        // } = store.getState();
        // getCurrentConversation(currentConversationId);
        loadAllConversation(data.conversations, data.currentUser, data.users);
      })
      .catch((error) => {
        console.log("voximplant messenger service initialize failed", error);
        store.dispatch(setVoxUsers({}));
        store.dispatch(setLoading(false));
      });
  } else {
    console.log("voximplant user login failure", login);
  }
};
