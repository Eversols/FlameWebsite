/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Box, Container, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import { Send } from "@mui/icons-material";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import ProfileImage from "../../Assets/images/male.jpg";
import { useRef } from "react";
import { useState } from "react";
import MessengerService from "../../Services/voximplant/messenger";
import { useEffect } from "react";
import { post } from "../../Services/api";
import { setMessages } from "../../Services/store/authSlice";

const ChatBox = ({ showChatBox, setShowChatBox, setDialog }) => {
  const {
    currentConversationId,
    conversationHistory,
    vox_users: { conversations, currentUser },
  } = useSelector((state) => state.conversation);
  const { userData } = useSelector((state) => state.auth);
  const [inputMessage, setInputMessage] = useState("");
  const classes = useStyles();
  const messagesEndRef = useRef(null);
  const conversation = conversationHistory[currentConversationId] || [];
  const dispatch = useDispatch();

  const scrollToBottom = () => {
    messagesEndRef &&
      messagesEndRef.current &&
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [conversationHistory]);

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
          dispatch(setMessages(+userData.messages - 1 ));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <>
      <IconButton
        color="primary"
        onClick={handleToggleChatBox}
        style={{ position: "fixed", bottom: 20, right: 20 }}
      >
        <ChatIcon />
      </IconButton>

      {showChatBox && (
        <Paper elevation={3} className={classes.paper}>
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
                      style={{ backgroundImage: `url(${ProfileImage})` }}
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
              <input
                value={inputMessage}
                type="text"
                placeholder="Type a message..."
                onChange={handleInputMessage}
                onKeyUp={(event) => {
                  if (event.keyCode === 13) {
                    event.preventDefault();
                    sendMessage();
                  }
                }}
                className={classes.outgoing_text_box}
              />
              <IconButton
                className={classes.single_image}
                onClick={sendMessage}
              >
                <Send />
              </IconButton>
            </Box>
          </Container>
        </Paper>
      )}
    </>
  );
};

export default ChatBox;
