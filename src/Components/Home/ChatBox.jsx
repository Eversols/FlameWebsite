/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Send } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Container,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatIcon from "../../Assets/images/chatIcon.svg";
import ChatBoxIcon from "../../Assets/images/chatboxIcon.svg";
import ideaIcon from "../../Assets/images/idea_icons.svg";
import ProfileImage from "../../Assets/images/male.jpg";
import CallIcon from "../../Assets/images/sayhi.svg";
import VideoCallIcon from "../../Assets/images/video.svg";
import { post } from "../../Services/api";
import { setMessages } from "../../Services/store/authSlice";
import MessengerService from "../../Services/voximplant/messenger";
import useStyles from "./style";
import { getCurrentConversation } from "../../Services/utils";

const ChatBox = ({ showChatBox, setShowChatBox, setDialog, modelData, callUser }) => {
  const {
    currentConversationId,
    conversationHistory,
    vox_users: { conversations, currentUser, users },
    vox_users
  } = useSelector((state) => state.conversation);
  const { userData } = useSelector((state) => state.auth);
  const [inputMessage, setInputMessage] = useState("");
  const [user, setUser] = useState(null);
  const classes = useStyles();
  const messagesEndRef = useRef(null);
  const conversation = conversationHistory[currentConversationId] || [];
  const dispatch = useDispatch();
  console.log('RRRRRRRRRRRRRRRRR', modelData)

  const scrollToBottom = () => {
    messagesEndRef &&
      messagesEndRef.current &&
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [conversationHistory]);
  useEffect(() => {
    if (modelData) {
      setUser(users.find((item) => item.customData.userId == modelData?.id))
    }
  }, [modelData]);

  const handleToggleChatBox = () => {
    setShowChatBox((prev) => !prev);
  };
  const handleInputMessage = (e) => {
    setInputMessage(e.target.value);
  };
  const sendMessage = () => {
    if (userData.messages === 0) {
      setDialog(true);
      return;
    }
    const currentConversation =
      conversations &&
      conversations.find((item) => item._uuid === currentConversationId);
    if (inputMessage && currentConversation) {
      console.log(
        inputMessage,
        currentConversation,
        inputMessage && currentConversation
      );
      const messenger = MessengerService.get();
      messenger.sendMessage(currentConversation, inputMessage);
      setInputMessage("");
      post("/proccesSmsMunutes", { userID: userData.id, messages: 1 })
        .then((res) => {
          dispatch(setMessages(+userData.messages - 1));
        })
        .catch((error) => console.log(error));
    }
  };


  const call = (userData, video) => {
    const voxUser = users.find(
      (item) => item.customData.userId === userData.id
    );
    if (voxUser) {
      callUser(voxUser.userName, video);
      getCurrentConversation(voxUser.userId);
    }
  };

  const userConversation = async (userData, type) => {
    const voxUser = users.find(
      (item) => item.customData.userId === userData.id
    );
    if (voxUser) {
      getCurrentConversation(voxUser.userId);
      // setShowChatBox(true);
      if (type === "poke") {
        const currentConversation =
          conversations &&
          conversations.find((item) => item._uuid === currentConversationId);
        const messenger = MessengerService.get();
        messenger.sendMessage(currentConversation, 'Hi!');

      }
    }
  };
  return (
    <>
      <IconButton
        color="primary"
        onClick={handleToggleChatBox}
        className={classes.chatbox_container}
      >
        <img src={ChatIcon} />
      </IconButton>

      {/* // when not open */}
      <IconButton
        color="primary"
        onClick={handleToggleChatBox}
        className={classes.ideaIcon}
      >
        <img src={ideaIcon} className={classes.ideaImage} alt="no data" />
      </IconButton>

      {/* when open  */}
      {/* <Box
        sx={{
          position: "fixed",
          bottom: 20,
          left: 20,
          background: "#ffff",
          padding: "6px",
          zIndex: 1,
          display: "flex",
          width: "100%",
          gap: "5px",
          borderRadius: "20px",
          alignItems: "center",
          maxWidth: "410px",
        }}
      >
        <IconButton color="primary">
          <img src={ideaIcon} className={classes.ideaImage} alt="no data" />
        </IconButton>
        <Box
          sx={{
            fontSize: "14px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            lineHeight: "20px",
            background: "#ffff",
            height: "40px",
            maxWidth: "225px",
            minWidth: "225px",
            width: "100%",
          }}
        >
          Two line text string. One to two lines s preferable on mobile and
          tablet.
        </Box>
      </Box> */}

      {showChatBox && (
        <Paper elevation={3} className={classes.paper}>
          <Box className={classes.chat_wrapper}>
            <Box
              className={classes.single_chat_image}
              style={{
                backgroundImage: modelData?.userData?.profileImage ? `url(https://theflame.life/livebk/public/uploads/${modelData.userData.profileImage})` : `url(${ProfileImage})`,
              }}
            ></Box>

            <Box className={classes.single_user_chat_text}>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Typography variant="h5" className={classes.history_name}>
                  {modelData?.metaData?.displayName}
                </Typography>
                <Box display="flex" justifyContent="start" alignItems="center">
                  {user?.online ? <Box className={classes.online_indicator} />
                    :
                    <Box className={classes.offline_indicator} />}

                  <Typography
                    variant="body1"
                    component="span"
                    ml={1}
                    sx={{ fontSize: "14px" }}
                  >
                    {user?.online ? "Online" : "Offline"}
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.chat_actions}>
                <IconButton
                  sx={{ margin: 0, padding: 0 }}
                  size="small"
                  onClick={() => call(modelData.userData, true)}
                  className={classes.history_actions_btn}
                >
                  <img
                    src={VideoCallIcon}
                    className={classes.history_actions_icons}
                  />
                </IconButton>

                <IconButton
                  sx={{ margin: 0, padding: 0 }}
                  size="small"
                  onClick={() => userConversation(modelData.userData, 'poke')}
                  className={classes.history_actions_btn}
                >
                  <img
                    src={CallIcon}
                    className={classes.history_actions_icons}
                  />
                </IconButton>
                <IconButton
                  sx={{ margin: 0, padding: 0 }}
                  size="small"
                  onClick={handleToggleChatBox}
                  className={classes.history_actions_btn}
                >
                  <CloseIcon sx={{ fill: "#AAAAAA", width: "16px" }} />
                </IconButton>
              </Box>
            </Box>
          </Box>

          <Container className={classes.msg_window}>
            <Box className={classes.incoming_container}>
              {conversation.length > 0 ? (
                conversation.map((item) => (
                  <Box
                    className={
                      item._sender === currentUser.userId
                        ? classes.outgo_msg
                        : classes.incoming_msg
                    }
                  >
                    <Box
                      className={classes.single_image}
                      style={{ backgroundImage: item._sender === currentUser.userId ? `url(https://theflame.life/livebk/public/uploads/${userData.profileImage})` : `url(https://theflame.life/livebk/public/uploads/${modelData.userData.profileImage})` }}
                    ></Box>
                    <Container
                      className={
                        item._sender === currentUser.userId
                          ? classes.outgo_text_box
                          : classes.incoming_text_box
                      }
                    >
                      <Typography
                        variant="h6"
                        className={
                          item._sender === currentUser.userId
                            ? classes.outgoing_text
                            : classes.incoming_text
                        }
                      >
                        {item._text}
                      </Typography>
                    </Container>
                  </Box>
                ))
              ) : (
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <Typography component="span" sx={{ margin: "auto" }}>
                    No Chat
                  </Typography>
                </Box>
              )}
              <div ref={messagesEndRef} />
            </Box>
            <Box className={classes.outgoing_msg}>
              <TextField
                name="chat"
                value={inputMessage}
                type="text"
                placeholder="Type a message..."
                className={classes.input1}
                onChange={handleInputMessage}
                onKeyUp={(event) => {
                  if (event.keyCode === 13) {
                    event.preventDefault();
                    sendMessage();
                  }
                }}
                fullWidth
                // onChange={(e) => handlevalueChange(e, "password")}
                inputProps={{
                  "data-cy": "password-Employeecredential", // Cypress ID assigned to the search input element
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        data-cy="password-credential"
                        aria-label="toggle password visibility"
                        onClick={sendMessage}
                        edge="end"
                      >
                        <img src={ChatBoxIcon} className={classes.heart_bg} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Container>
        </Paper>
      )}
    </>
  );
};

export default ChatBox;
