/* eslint-disable react/prop-types */
import { Box, IconButton, Typography } from '@mui/material';
import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import ProfileImage from '../../Assets/images/male.jpg';
import ChatIcon from '../../Assets/images/message.svg';
import MoreIcon from '../../Assets/images/more.svg';
import CallIcon from '../../Assets/images/sayhi.svg';
import VideoCallIcon from '../../Assets/images/video.svg';
import { getCurrentConversation } from '../../Services/utils';
import Loader from '../Loader';
import useStyles from './style';

const ChatHistory = ({ setShowChatBox, callUser }) => {
  const {
    vox_users: { conversations, users, currentUser },
    conversationHistory,
  } = useSelector((state) => state.conversation);
  const { allUsers = [] } = useSelector((state) => state.auth);
  const classes = useStyles();

  const checkEmail = (userName) => {
    if (userName) {
      const tempEmail = userName.replace('-flame-', '@').slice(0, -17);
      return tempEmail;
    }
    return false;
  };
  const getUserDetail = (participants, direct) => {
    const myNetworkList = allUsers;
    if (participants) {
      const participantsInfo = participants.map((item) => {
        const findUser = users.find(
          (subItem) => item.userId === subItem.userId
        );
        const userEmail =
          findUser && findUser.userName && checkEmail(findUser.userName);
        if (userEmail && myNetworkList) {
          const info = myNetworkList.find(
            (item) => item.userData.email === userEmail
          );
          return {
            ...item,
            first_name: (info?.metaData && info.metaData.displayName) || null,
            last_name: (info && info.last_name) || null,
            photo: (info?.userData && info.userData.profileImage) || null,
            email: (info?.userData && info.userData.email) || userEmail,
          };
        }
        return item;
      });
      if (currentUser && direct) {
        return participantsInfo.find(
          (item) => item.userId !== currentUser.userId
        );
      } else if (currentUser) {
        return participantsInfo.filter(
          (item) => item.userId !== currentUser.userId
        );
      }
      return participantsInfo;
    }
    return participants;
  };

  const getChatTitle = (item, loopUser = []) => {
    let chatTitle = '';
    if (item.direct) {
      chatTitle = loopUser.first_name ? loopUser.first_name : loopUser.email;
    } else {
      loopUser.map((item, index) => {
        if (item.first_name) {
          chatTitle =
            index !== 0
              ? `${chatTitle},${item.first_name}`
              : `${item.first_name}`;
        } else {
          chatTitle = index !== 0 ? `${chatTitle},${item.email}` : item.email;
        }
      });
    }
    return chatTitle;
  };

  const getLastMessageAndTime = (item) => {
    const currentConversation =
      !(Object.keys(conversationHistory).length === 0) &&
      conversationHistory[item._uuid];
    const lastEvent =
      !(Object.keys(conversationHistory).length === 0) &&
      currentConversation[currentConversation.length - 1];
    if (lastEvent) {
      return {
        lastMessage: lastEvent.text
          ? lastEvent.text
          : lastEvent.payload &&
            lastEvent.payload[0] &&
            lastEvent.payload[0]['name'],
        timestamp: lastEvent.timestamp,
      };
    }
    return {
      lastMessage: '',
      timestamp: '',
    };
  };

  function formatTimestamp(timestamp) {
    const now = moment();
    const date = moment(timestamp);

    if (now.isSame(date, 'day')) {
      return date.format('LT'); // Same day
    } else if (now.isSame(date.clone().subtract(1, 'days'), 'day')) {
      return 'Yesterday'; // Yesterday
    } else if (now.isSame(date, 'week')) {
      return date.format('dddd'); // Same week
    } else {
      return date.format('L'); // SameElse
    }
  }

  const call = (userId, video) => {
    console.log(users);
    const voxUser = users.find((item) => item.userId === userId);
    if (voxUser) {
      callUser(voxUser.userName, video);
    }
  };

  return (
    <Box sx={{ maxHeight: '500px', overflowY: 'auto', margin: '20px 0px' }}>
      <Box className={classes.flexContainer}>
        {conversations.map((item) => {
          const users = getUserDetail(item.participants, item.direct);
          const chatTitle = getChatTitle(item, users);
          const { lastMessage, timestamp } = getLastMessageAndTime(item);
          return (
            <>
              {chatTitle ? (
                <Box className={classes.box_single_user_history}>
                  <Box className={classes.avatar_box}>
                    <Box
                      className={classes.single_image}
                      style={{
                        // backgroundImage: `url(${
                        //   item.direct && users.first_name
                        //     ? `https://theflame.life/livebk/public/uploads/${users.photo}`
                        //     : ProfileImage
                        // })`,

                        backgroundImage: `url(${ProfileImage})`,
                      }}
                    ></Box>
                    {chatTitle && (
                      <Box className={classes.single_user_history_text}>
                        <Typography
                          variant="h5"
                          className={classes.history_name}
                        >
                          {chatTitle}
                        </Typography>
                        <Box
                          display="flex"
                          justifyContent="start"
                          alignItems="center"
                          sx={{ margin: '10px 0px' }}
                        >
                          <Box className={classes.online_indicator} />

                          <Typography
                            variant="body1"
                            component="span"
                            ml={1}
                            sx={{ fontSize: '14px' }}
                          >
                            Online
                          </Typography>
                          {/* <Box className={classes.offline_indicator} /> */}
                        </Box>
                        <Box className={classes.history_actions}>
                          <IconButton
                            sx={{ margin: 0, padding: 0 }}
                            size="small"
                            onClick={() => call(users.userId, true)}
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
                            onClick={() => call(users.userId, false)}
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
                            onClick={() => {
                              getCurrentConversation(item.uuid);
                              setShowChatBox(true);
                            }}
                            className={classes.history_actions_btn}
                          >
                            <img
                              src={ChatIcon}
                              className={classes.history_actions_icons}
                            />
                          </IconButton>
                          <IconButton
                            size="small"
                            // onClick={() => {
                            //   getCurrentConversation(item.uuid);
                            //   setShowChatBox(true);
                            // }}
                            // className={classes.history_actions_btn}
                            sx={{
                              margin: 0,
                              padding: 0,
                              backgroundColor: 'transparent',
                              marginLeft: '3px',
                            }}
                          >
                            <img
                              src={MoreIcon}
                              className={classes.history_actions_icons}
                            />
                          </IconButton>
                        </Box>
                      </Box>
                    )}
                  </Box>
                  {/* <Box className={classes.history_actions}>
                  <IconButton
                    sx={{ margin: 0, padding: 0 }}
                    size="small"
                    onClick={() => call(users.userId, false)}
                  >
                    <img
                      src={CallIcon}
                      className={classes.history_actions_icons}
                    />
                  </IconButton>
                  <IconButton
                    sx={{ margin: 0, padding: 0 }}
                    size="small"
                    onClick={() => call(users.userId, true)}
                  >
                    <img
                      src={VideoCallIcon}
                      className={classes.history_actions_icons}
                    />
                  </IconButton>
                  <IconButton
                    sx={{ margin: 0, padding: 0 }}
                    size="small"
                    onClick={() => {
                      getCurrentConversation(item.uuid);
                      setShowChatBox(true);
                    }}
                  >
                    <img
                      src={ChatIcon}
                      className={classes.history_actions_icons}
                    />
                  </IconButton>
                </Box> */}
                </Box>
              ) : (
                <Loader />
              )}
            </>
          );
        })}
      </Box>
    </Box>
  );
};

export default ChatHistory;
