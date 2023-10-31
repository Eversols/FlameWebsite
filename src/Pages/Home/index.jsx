/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Header from "../../Components/Home/Header";
import { Box, Container, IconButton, Typography } from "@mui/material";
import useStyles from "./style";

import profile from "../../Assets/images/profile.png";
import logoutIcon from "../../Assets/images/logout.png";
import ProfileImage from "../../Assets/images/male.jpg";
import BackgroundGradient from "../../Assets/images/background_gradient.png";
import Gift1 from "../../Assets/images/Gifts/gift_1.png";
import Gift2 from "../../Assets/images/Gifts/gift_2.png";
import Gift3 from "../../Assets/images/Gifts/gift_3.png";
import Gift4 from "../../Assets/images/Gifts/gift_4.png";
import Gift5 from "../../Assets/images/Gifts/gift_5.png";
import CallEnd from "../../Assets/images/call_action_end.png";
import CallNext from "../../Assets/images/call_action_next.png";
import CallPrev from "../../Assets/images/call_action_prev.png";
import CallEndIcon from "@mui/icons-material/CallEnd";
import { useState } from "react";
import { useEffect } from "react";
import { get } from "../../Services/api";
import MainScreenSlider from "../../Components/Home/MainScreenSlider";
import ChatBox from "../../Components/Home/ChatBox";
import ChatHistory from "../../Components/Home/ChatHistory";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../Services/store/authSlice";
import WorningDilog from "../../Components/Home/WorningDialog";
import CallService from "../../Services/voximplant/call";
import IncomingCallDialog from "../../Components/Home/IncomingCallDialog";

const index = () => {
  const { role, allUsers = [], userData } = useSelector((state) => state.auth);
  const [modelData, setModelData] = useState(null);
  const [models, setModels] = useState([]);
  const [dialog, setDialog] = useState(false);
  const [currentCall, setCurrentCall] = useState(null);
  const [showChatBox, setShowChatBox] = useState(false);
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [callingUser, setCallingUser] = useState(null);
  const [showIncomingCallDialog, setShowIncomingCallDialog] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    const url = role === "model" ? "/getUsers" : "/getModels";
    get(url)
      .then((res) => {
        setModels(res.data.data);
      })
      .catch((err) => {});
  }, []);

  // Initialize the CallService when the component mounts
  useEffect(() => {
    const callService = CallService.getInstance();
    callService.init();

    // Set up an incoming call listener
    callService.setIncomingCallListener((userName, incomingCall) => {
      console.log(userName, incomingCall);
      setCurrentCall(incomingCall);
      console.log(currentCall);
      if (userName) {
        setCallingUser(getUserDetail(userName));
        setShowIncomingCallDialog(true);
      }
    });

    // Clean up the CallService when the component unmounts
    return () => {
      callService.dispose();
    };
  }, []);

  const checkEmail = (userName) => {
    if (userName) {
      const tempEmail = userName
        .replace("-flame-", "@")
        .slice(0, -32)
        .split(":")[1];
      return tempEmail;
    }
    return false;
  };

  const getUserDetail = (userName) => {
    const myNetworkList = allUsers;
    const userEmail = checkEmail(userName);
    if (userEmail && myNetworkList) {
      const info = myNetworkList.find(
        (item) => item.userData.email === userEmail
      );
      return {
        first_name: (info?.metaData && info.metaData.displayName) || null,
        last_name: (info && info.last_name) || null,
        photo: (info?.userData && info.userData.profileImage) || null,
        email: (info?.userData && info.userData.email) || userEmail,
      };
    }
  };

  const handleMakeAudioCall = (userName, video) => {
    if (userData.minutes === 0) {
      setDialog(true);
      return;
    }
    // Make an audio and video call
    const callService = CallService.getInstance();
    if (video) {
      callService.makeVideoCall(userName);
    } else {
      callService.makeAudioCall(userName);
    }
    setCurrentCall(true);
  };

  const handleAnswerCall = () => {
    // Answer an incoming call
    const callService = CallService.getInstance();
    callService.answerCall();
    setShowIncomingCallDialog(false); // Close the incoming call dialog
  };

  const handleRejectCall = () => {
    // Reject an incoming call
    setCurrentCall(null);
    const callService = CallService.getInstance();
    callService.rejectCall();
    setShowIncomingCallDialog(false); // Close the incoming call dialog
  };
  const handleDisconnectCall = () => {
    // Reject an incoming call
    setCurrentCall(null);
    const callService = CallService.getInstance();
    callService.endCall();
  };

  const handleToggleMic = () => {
    // Toggle microphone mute/unmute
    const callService = CallService.getInstance();
    callService.toggleMic();
  };

  console.log("HHHHHHHHHHHH", currentCall);

  return (
    <>
      <Header />
      <Box className={classes.container}>
        <Container className={classes.box_left}>
          <Typography variant="h4" className={classes.heading}>
            History
          </Typography>
          <Box className={classes.box_leftInner}>
            <ChatHistory
              setShowChatBox={setShowChatBox}
              callUser={handleMakeAudioCall}
            />
          </Box>
        </Container>
        <Container className={classes.box_mid}>
          {currentCall ? (
            <Container className={classes.call_window}>
              {/* <Container
                id="voximplant_container"
                className={classes.videoCall}
              > */}
              {/* <video id="localVideo" autoPlay muted></video> */}
              <video id="remoteVideo" autoPlay></video>
              {/* </Container> */}
              <Container className={classes.call_footer}>
                <Box className={classes.call_action_container}>
                  <img src={CallPrev} className={classes.call_action}></img>
                  <img src={CallEnd} className={classes.call_action}></img>
                  <img src={CallNext} className={classes.call_action}></img>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    className={classes.videoBtn}
                    variant="contained"
                    label="End"
                    onClick={handleDisconnectCall}
                  >
                    <CallEndIcon />
                  </IconButton>
                </Box>
                <Box className={classes.call_gifts_container}>
                  <img src={Gift1} className={classes.gifts}></img>
                  <img src={Gift2} className={classes.gifts}></img>
                  <img src={Gift3} className={classes.gifts}></img>
                  <img src={Gift4} className={classes.gifts}></img>
                  <img src={Gift5} className={classes.gifts}></img>
                </Box>
              </Container>
            </Container>
          ) : (
            <>
              {models.length > 0 && (
                <MainScreenSlider
                  setShowChatBox={setShowChatBox}
                  models={models}
                  callUser={handleMakeAudioCall}
                  setModelData={setModelData}
                />
              )}
            </>
          )}
        </Container>
        <Container className={classes.box_right}>
          <Box className={classes.avatar_box_profile}>
            <Container
              sx={{
                backgroundImage: `url(${
                  modelData?.userData?.profileImage
                    ? `https://flame.bilalrugs.pk/livebk/public/uploads/${modelData.userData.profileImage}`
                    : ProfileImage
                })`,
              }}
              className={classes.single_image_profile}
            ></Container>
            <Typography variant="h6" className={classes.profile_answer_name}>
              {modelData?.metaData?.displayName || ""}
            </Typography>
          </Box>
          <Container className={classes.profile_detail}>
            <Typography variant="h6" className={classes.profile_question_text}>
              How old am I?
            </Typography>
            <Typography variant="h6" className={classes.profile_answer_text}>
              {modelData?.metaData?.age || ""}
            </Typography>
            <Typography variant="h6" className={classes.profile_question_text}>
              What do I do?
            </Typography>
            <Typography variant="h6" className={classes.profile_answer_text}>
              {modelData?.metaData?.profession || ""}
            </Typography>
            <Typography variant="h6" className={classes.profile_question_text}>
              What do I like to do outside work?
            </Typography>
            <Typography variant="h6" className={classes.profile_answer_text}>
              {modelData?.metaData?.outsideWork || ""}
            </Typography>
            <Typography variant="h6" className={classes.profile_question_text}>
              What do I like in a partner?
            </Typography>
            <Typography variant="h6" className={classes.profile_answer_text}>
              {modelData?.metaData?.like || ""}
            </Typography>
            <Typography variant="h6" className={classes.profile_question_text}>
              What do I dislike in a partner?
            </Typography>
            <Typography variant="h6" className={classes.profile_answer_text}>
              {modelData?.metaData?.dislike || ""}
            </Typography>
          </Container>
        </Container>
      </Box>
      <ChatBox
        setDialog={setDialog}
        showChatBox={showChatBox}
        setShowChatBox={setShowChatBox}
        // conversation={conversationHistory[convUuid]}
        // voxUser={currentVoxUser}
        // uuid={convUuid}
      />
      <WorningDilog dialog={dialog} setDialog={setDialog} />
      {showIncomingCallDialog && (
        <IncomingCallDialog
          callingUser={callingUser}
          onAnswer={handleAnswerCall}
          onReject={handleRejectCall}
        />
      )}
    </>
  );
};

export default index;
