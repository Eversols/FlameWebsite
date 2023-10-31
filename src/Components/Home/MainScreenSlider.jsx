/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCreative,
} from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import useStyles from "./style";
import { Box, IconButton } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import VideocamIcon from "@mui/icons-material/Videocam";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { useEffect } from "react";
import { getCurrentConversation } from "../../Services/utils";
import { useSelector } from "react-redux";

const MainScreenSlider = ({
  models = [],
  setModelData,
  setShowChatBox,
  callUser,
}) => {
  const {
    vox_users: { users },
  } = useSelector((state) => state.conversation);
  const classes = useStyles();
  useEffect(() => {
    setModelData(models[0]);
  }, []);
  const handleSlideChange = (e) => {
    // Custom logic to run when slide changes
    setModelData(models[e.realIndex]);
    // Add your custom logic here
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
  const conversation = async (userData) => {
    const voxUser = users.find(
      (item) => item.customData.userId === userData.id
    );
    if (voxUser) {
      getCurrentConversation(voxUser.userId);
      setShowChatBox(true);
    }
  };
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectCreative, Scrollbar, A11y]}
      navigation
      centeredSlides={true}
      loop={true}
      slidesPerView={1}
      speed={600}
      className={classes.window}
      disableUnderline={false}
      onSlideChange={handleSlideChange}
    >
      {models.map((item, i) => (
        <SwiperSlide key={i}>
          {item?.userData?.profileImage && (
            <img
              src={`https://flame.bilalrugs.pk/livebk/public/uploads/${item.userData.profileImage}`}
              className={classes.img}
            />
          )}
          {console.log("FFFFFFFFFFFFFF", item)}
          <Box className={classes.buttons}>
            <IconButton
              className={classes.phoneBtn}
              sx={{ marginRight: 10 }}
              variant="contained"
              label="Accept"
              onClick={() => call(item.userData, false)}
            >
              <CallIcon />
            </IconButton>
            <IconButton
              className={classes.videoBtn}
              sx={{ marginRight: 10 }}
              variant="contained"
              label="Accept"
              onClick={() => call(item.userData, true)}
            >
              <VideocamIcon />
            </IconButton>
            <IconButton
              className={classes.messageBtn}
              variant="contained"
              label="Accept"
              onClick={() => conversation(item.userData)}
            >
              <ChatBubbleIcon />
            </IconButton>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainScreenSlider;
