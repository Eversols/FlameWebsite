/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import Header from "../../Components/Home/Header";
import useStyles from "./style";

import CallEndIcon from "@mui/icons-material/CallEnd";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Gift1 from "../../Assets/images/Gifts/gift_1.png";
import Gift2 from "../../Assets/images/Gifts/gift_2.png";
import Gift3 from "../../Assets/images/Gifts/gift_3.png";
import Gift4 from "../../Assets/images/Gifts/gift_4.png";
import Gift5 from "../../Assets/images/Gifts/gift_5.png";
import BackgroundGradient from "../../Assets/images/background_gradient.png";
import bgBlock from "../../Assets/images/bg_block.svg";
import bgHeart from "../../Assets/images/bg_heart.svg";
import CallEnd from "../../Assets/images/call_action_end.png";
import CallNext from "../../Assets/images/call_action_next.png";
import CallPrev from "../../Assets/images/call_action_prev.png";
import flameLogo from "../../Assets/images/flame logo.svg";
import ProfileImage from "../../Assets/images/girl-profile.png";
import logoutIcon from "../../Assets/images/logout.png";
import profile from "../../Assets/images/profile.png";
import ChatBox from "../../Components/Home/ChatBox";
import ChatHistory from "../../Components/Home/ChatHistory";
import IncomingCallDialog from "../../Components/Home/IncomingCallDialog";
import InfoModal from "../../Components/Home/InfoModal";
import MainScreenSlider from "../../Components/Home/MainScreenSlider";
import WorningDilog from "../../Components/Home/WorningDialog";
import CardPaymentModal from "../../Components/Payment/CardPaymentModal";
import PayoutModal from "../../Components/Payment/PayoutModal";
import ProfileModal from "../../Components/Profile/ProfileModal";
import RechargeModal from "../../Components/Recharge/RechargeModal";
import { get } from "../../Services/api";
import { getAllUsers, getProfile, setAllModels } from "../../Services/store/authSlice";
import CallService from "../../Services/voximplant/call";
import CallModal from "../../Components/Home/CallModal";
import PaymentStatus from "../../Components/Payment/PaymentStatus";
import LogoutModal from "../../Components/Logout";
const loveLabels = ["Sport", "food", "fashion"];
const hateLabels = ["Make up", "books", "tv"];
const index = () => {
  const {
    role,
    allUsers = [],
    userData,
    rechargeModel,
  } = useSelector((state) => state.auth);
  const [modelData, setModelData] = useState(null);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [models, setModels] = useState([]);
  const [dialog, setDialog] = useState(false);
  const [currentCall, setCurrentCall] = useState(null);
  const [showChatBox, setShowChatBox] = useState(false);
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [callingUser, setCallingUser] = useState(null);
  const [showIncomingCallDialog, setShowIncomingCallDialog] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(
      setAllModels({
        rechargeModel: false,
        profileModel: false,
        payoutModel: false,
        paymentModel: false,
        paymentSuccess: false,
        paymentError: false,
      })
    );
    if (userData?.id) {
      const result = await dispatch(getProfile({ id: userData.id }));
      console.log('NNNNNNNNNNNNNNNNNNNNNNNNNNN', result)
      if (result) {
        // const url = role === "model" ? "/getUsers" : `/getModels?gender_id=${result.payload.data?.gender}&mood_id=${result.payload.data?.moodID}`;
        get(`/getModels?gender_id=${result.payload.data?.gender}&mood_id=${result.payload.data?.moodID}`)
          .then((res) => {
            setModels(res.data.data);
          })
          .catch((err) => { });
      }
    }
    dispatch(getAllUsers());
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
  console.log("SSSSSSSSSSSSSSSSSSSSSSS", modelData);
  const userInfo = () => {
    return (
      <Paper className={classes.box_left_info}>
        <Box className={classes.avatar_box_profile}>
          <Container
            sx={{
              backgroundImage: modelData?.userData?.profileImage
                ? `url(https://theflame.life/livebk/public/uploads/${modelData?.userData?.profileImage})`
                : userData?.gender === "Male" ? 'url(https://theflame.life/livebk/public/frontend_images/avatar-man.jpg)' :
                  "url(https://theflame.life/livebk/public/frontend_images/avatar-woman.jpg)",
            }}
            className={classes.single_image_profile}
          ></Container>
          <Typography variant="h6" className={classes.profile_answer_name}>
            {modelData?.metaData?.displayName || "Jeysie"}
          </Typography>
          <Typography variant="h6" className={classes.profile_question_text}>
            {modelData?.metaData?.region}
          </Typography>

          <Typography variant="h6" className={classes.profile_heading}>
            About me
          </Typography>

          <Typography variant="h6" className={classes.profile_text}>
            {modelData?.metaData?.about}
          </Typography>
          <Typography variant="h6" className={classes.profile_answer}>
            Things I Love
          </Typography>
          {console.log('DDDDDDDDDDDDDDDDDDDDDDDDD', modelData)}
          <Box className={classes.btnContainer}>
            {modelData?.metaData?.like &&
              modelData?.metaData?.like.replace("#", "").split(", ").map((label, index) => (
                <Button
                  key={index}
                  variant="contained"
                  className={classes.btn_love}
                >
                  {label}
                </Button>
              ))}
          </Box>
          <Typography variant="h6" className={classes.profile_answer}>
            Things I Hate
          </Typography>
          <Box className={classes.btnContainer}>
            {modelData?.metaData?.unlike &&
              modelData?.metaData?.unlike.replace("#", "").split(", ").map((label, index) => (
                <Button
                  key={index}
                  variant="contained"
                  className={classes.btn_hate}
                >
                  {label}
                </Button>
              ))}
          </Box>
        </Box>
      </Paper>
    );
  };

  const codeDivider = () => {
    return (
      <Box className={classes.container}>
        <Paper className={classes.box_left}>
          <Typography
            variant="body1"
            component="div"
            className={classes.heading}
          >
            History
          </Typography>
          <Box className={classes.box_leftInner}>
            <ChatHistory
              setShowChatBox={setShowChatBox}
              callUser={handleMakeAudioCall}
            />
          </Box>
        </Paper>
        <Box className={classes.box_mid}>
          {currentCall ? (
            <Container className={classes.call_window}>
              <video id="remoteVideo" autoPlay></video>
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
        </Box>
        {/* box for history_actions */}
        <Paper className={classes.box_left_history}>
          <Typography
            variant="body1"
            component="div"
            className={classes.heading}
          >
            History
          </Typography>
          <Box className={classes.box_leftInner}>
            <ChatHistory
              setShowChatBox={setShowChatBox}
              callUser={handleMakeAudioCall}
            />
          </Box>
        </Paper>
        {isSmallScreen === true ? (
          <InfoModal userInfo={userInfo} />
        ) : (
          userInfo()
        )}
      </Box>
    );
  };

  return (
    <>
      {/* <img src={flameLogo} className={classes.logo} /> */}
      <img src={bgHeart} className={classes.heart_bg} />
      <img src={bgBlock} className={classes.block_bg} />
      <Header />
      {isSmallScreen === false ? (
        <>{codeDivider()}</>
      ) : isSmallScreen === true && showChatBox !== true ? (
        <>{codeDivider()}</>
      ) : isSmallScreen === true && showChatBox === true ? (
        <></>
      ) : null}
      {console.log('YYYYYYYYYYYYYYYYYYYYY', modelData)}
      <ChatBox
        setDialog={setDialog}
        showChatBox={showChatBox}
        setShowChatBox={setShowChatBox}
        modelData={modelData}
        callUser={handleMakeAudioCall}
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
      <RechargeModal />
      <ProfileModal />
      <PayoutModal />
      <CallModal />
      <CardPaymentModal />
      <PaymentStatus />
      <LogoutModal />
    </>
  );
};

export default index;

const ChatHistorySection = ({ setShowChatBox, handleMakeAudioCall }) => (
  <Paper className={classes.box_left}>{/* ... */}</Paper>
);
