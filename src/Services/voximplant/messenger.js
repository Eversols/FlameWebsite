import * as VoxImplant from "voximplant-websdk";
import {
  
  onConversationCreated,
  onMessageMarkAsRead,
  onMessageSent,
  onlineReceived,
  reloginVox,
  translateText,
} from "../utils";
import i18n from "../i18n";

const TIME_NOTIFICATION = 3000;
export const MY_APP = "flame.flameadmin";
export const URL_NEW_USERS =
  "https://api.voximplant.com/platform_api/GetUsers?account_name=flameadmin&api_key=32633403-a0f0-4b9d-9ebd-9e84a4b759de&application_id=10866186";

export default class MessengerService {
  static messenger = null;

  static get() {
    if (!MessengerService.inst) {
      MessengerService.inst = new MessengerService();
    }
    return MessengerService.inst;
  }

  static inst;
  setStatusTimer;
  conversationEvents = {};

  async init() {
    try {
      MessengerService.messenger = VoxImplant.getMessenger();
      console.log("Messenger v2", MessengerService.messenger);
      console.log("VoxImplant.Messaging v2", VoxImplant.Messaging);
    } catch (e) {
      console.error(e);
      reloginVox();
    }

    const initialData = {
      currentUser: {},
      conversations: [],
      users: [],
    };

    await MessengerService.messenger
      .getUser(MessengerService.messenger.getMe())
      .then((evt) => {
        console.log("Current user data received", evt);
        initialData.currentUser = evt.user;
        if(evt.user.conversationsList == undefined){
          evt.user.conversationsList = [];
        }
        return this.getCurrentConversations(evt.user.conversationsList);
      })
      .then((evts) => {
        console.log("Current user conversations received", evts);

        initialData.conversations = evts.length
          ? evts.map((e) => e.conversation)
          : [];
        return this.getAllUsers();
      })
      .then((evts) => {
        console.log("Conversation participants user info received", evts);
        initialData.users = evts.map((e) => ({ ...e.user, online: false }));
      })
      .catch(console.error);

    this.addMessengerEventListeners();

    const sendStatus = () =>
      setTimeout(() => {
        MessengerService.messenger.setStatus(true);
        this.setStatusTimer = sendStatus();
      }, TIME_NOTIFICATION);

    this.setStatusTimer = sendStatus();

    return initialData;
  }

  addMessengerEventListeners() {
    MessengerService.messenger.on(
      VoxImplant.Messaging.MessengerEvents.SetStatus,
      (e) => {
        console.log("FFFFFFFFFFFFFFFFFF", e);
        onlineReceived(e.initiator, e.online);
      }
    );

    MessengerService.messenger.on(
      VoxImplant.Messaging.MessengerEvents.CreateConversation,
      (e) => {
        console.log('ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ', e);
        onConversationCreated(e);
      }
    );
    MessengerService.messenger.on(
      VoxImplant.Messaging.MessengerEvents.SendMessage,
      (e) => onMessageSent(e)
    );
    MessengerService.messenger.on(
      VoxImplant.Messaging.MessengerEvents.Read,
      (e) => onMessageMarkAsRead(e)
    );
  }

  getCurrentConversations(conversationsList) {
    console.log('conversationsList ::::::::::::::::::',conversationsList);
    return MessengerService.messenger
      .getConversations(conversationsList)
      .catch((e) => {
        console.error("MessengerService.getCurrentConversations", e);
        return [];
      });
  }

  getCurrentConversation(uuid) {
    return MessengerService.messenger.getConversation(uuid).catch((e) => {
      console.error("MessengerService.getCurrentConversation", e);
      return [];
    });
  }

  async getAllUsers() {
    const getAllUsers = await fetch(URL_NEW_USERS);
    let jsonAllUsers;

    if (getAllUsers.ok) {
      jsonAllUsers = await getAllUsers.json();
    } else {
      console.error("Error HTTP: " + getAllUsers.status);
    }
    const usersNames = jsonAllUsers.result.map(
      (u) => `${u.user_name}@${MY_APP}`
    );
    return this.getUserIds(usersNames);
  }

  getUserIds(filteredUserNames) {
    return MessengerService.messenger.getUsers(filteredUserNames);
  }

  createDirect(userId) {
    console.log(userId);
    return this.createNewConversation([{ userId }], "", true, false, false, {
      type: "direct",
    });
  }

  createChat(newChatData) {
    const permissions = {
      canWrite: true,
      canEdit: true,
      canRemove: true,
      canManageParticipants: true,
      canEditAll: false,
      canRemoveAll: false,
    };

    const participants = newChatData.usersId.map((userId) => {
      return {
        userId,
        ...permissions,
      };
    });

    return this.createNewConversation(
      participants,
      newChatData.title,
      false,
      newChatData.isPublic,
      newChatData.isUber,
      {
        type: "chat",
        image: newChatData.avatar,
        description: newChatData.description,
        permissions,
      }
    );
  }

  createChannel(newChatData) {
    const permissions = {
      canWrite: false,
      canEdit: false,
      canRemove: false,
      canManageParticipants: true,
      canEditAll: false,
      canRemoveAll: false,
    };

    const participants = newChatData.usersId.map((userId) => {
      return {
        userId,
        ...permissions,
      };
    });

    return this.createNewConversation(
      participants,
      newChatData.title,
      false,
      newChatData.isPublic,
      newChatData.isUber,
      {
        type: "channel",
        image: newChatData.avatar,
        description: newChatData.description,
        permissions,
      }
    );
  }

  createNewConversation(
    participants,
    title,
    direct,
    publicJoin,
    uber,
    customData
  ) {
    return MessengerService.messenger.createConversation(
      participants,
      title,
      direct,
      publicJoin,
      uber,
      customData
    );
  }

  addParticipants(currentConversation, userIds) {
    return currentConversation
      .addParticipants(
        userIds.map((userId) => ({
          userId,
          ...currentConversation.customData.permissions,
        }))
      )
      .catch(console.error);
  }

  removeParticipants(currentConversation, userIds) {
    return currentConversation
      .removeParticipants(userIds.map((userId) => ({ userId })))
      .catch(console.error);
  }

  addAdmins(currentConversation, userIds) {
    return currentConversation
      .editParticipants(
        userIds.map((userId) => ({
          userId,
          canWrite: true,
          canEdit: true,
          canRemove: true,
          canManageParticipants: true,
          canEditAll: true,
          canRemoveAll: true,
          isOwner: true,
        }))
      )
      .catch(console.error);
  }

  removeAdmins(currentConversation, userIds) {
    return currentConversation
      .editParticipants(
        userIds.map((userId) => ({
          userId,
          ...currentConversation.customData.permissions,
        }))
      )
      .catch(console.error);
  }

  editPermissions(currentConversation, permissions, allUserIds) {
    currentConversation.setCustomData({
      ...currentConversation.customData,
      permissions,
    });
    return currentConversation
      .editParticipants(
        allUserIds.map((userId) => ({
          userId,
          ...permissions,
        }))
      )
      .catch(console.error);
  }

  leaveConversation(currentConversationUuid) {
    MessengerService.messenger
      .leaveConversation(currentConversationUuid)
      .catch(console.error);
  }

  notifyTyping(currentConversation) {
    return currentConversation.typing();
  }

  retransmitMessageEvents(currentConversation, lastEvent) {
    lastEvent = lastEvent
      ? lastEvent
      : currentConversation && currentConversation.lastSeq;
    const eventFrom = lastEvent - 100 > 0 ? lastEvent - 100 : 1;

    return (
      currentConversation &&
      currentConversation
        .retransmitEvents(eventFrom, lastEvent)
        .then((e) => {
          let allEvents = this.conversationEvents[currentConversation.uuid];
          this.conversationEvents[currentConversation.uuid] = [
            ...e.events,
            ...(allEvents || []),
          ];

          const sendAction = VoxImplant.Messaging.MessengerAction.sendMessage;
          const editAction = VoxImplant.Messaging.MessengerAction.editMessage;
          const deleteAction =
            VoxImplant.Messaging.MessengerAction.removeMessage;
          const messageEvents = [];
          const filteredEvents = this.conversationEvents[
            currentConversation.uuid
          ].filter(
            (e) =>
              e.messengerAction === sendAction ||
              e.messengerAction === editAction ||
              e.messengerAction === deleteAction
          );

          if (!filteredEvents.length) return [];

          const groupByUuidEvents = filteredEvents.reduce((res, evt) => {
            res[evt.message.uuid] = res[evt.message.uuid] || [];
            res[evt.message.uuid].push(evt);
            return res;
          }, Object.create(null));

          for (const messageUuid in groupByUuidEvents) {
            const arrEvtsMessage = groupByUuidEvents[messageUuid];
            const isDeleted = arrEvtsMessage.find(
              (m) => m.messengerAction === deleteAction
            );
            const isEdited = arrEvtsMessage.find(
              (m) => m.messengerAction === editAction
            );
            if (isDeleted) {
              continue;
            } else if (isEdited) {
              if (!arrEvtsMessage.find((m) => m.messengerAction === sendAction))
                continue;

              const sorted = arrEvtsMessage.sort((m) => m.timestamp);
              const initialMessage = sorted[0];
              let lastUpdated = sorted[sorted.length - 1];
              lastUpdated.message.editedAt = lastUpdated.timestamp;
              lastUpdated.timestamp = initialMessage.timestamp;
              lastUpdated.message.editedBy = lastUpdated.initiator;
              lastUpdated.initiator = initialMessage.initiator;
              console.log("retransmit edited", initialMessage, lastUpdated);
              messageEvents.push(lastUpdated);
            } else {
              messageEvents.push(...arrEvtsMessage);
            }
          }

          console.log(
            `All events in conversation ${currentConversation.title}`,
            this.conversationEvents[currentConversation.uuid]
          );

          return messageEvents;
        })
        .catch((e) => {
          console.error("Retransmit message events fail", e);
          return [];
        })
    );
  }

  async sendMessage(currentConversation, text, payload) {
    let translatedText = text;
    // const detectedLanguage = await detectLanguage(text);
    // if (detectedLanguage !== i18n.resolvedLanguage) {
    translatedText = await translateText(text, i18n.resolvedLanguage)
    if (payload) {
      return currentConversation
        .sendMessage(translatedText, [payload])
        .catch(console.error);
    } else {
      return currentConversation.sendMessage(translatedText, [{}]).catch(console.error);
    }
    // }
  }

  removeMessage(message) {
    return message.remove().catch(console.error);
  }

  updateMessage(message) {
    return message.update().catch(console.error);
  }

  markAsRead(currentConversation, lastSeq) {
    return currentConversation.markAsRead(lastSeq).catch(console.error);
  }

  editUserCustomData(customData) {
    return MessengerService.messenger.editUser(customData);
  }
}
