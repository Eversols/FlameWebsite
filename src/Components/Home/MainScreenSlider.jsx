/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from "react";
import {
  A11y,
  EffectCreative,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/css/pagination";
// Import Swiper React components
import { Box, IconButton } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import ChatIcon from "../../Assets/images/message.svg";
import CallIcon from "../../Assets/images/sayhi.svg";
import VideoCallIcon from "../../Assets/images/video.svg";
import { getCurrentConversation } from "../../Services/utils";
import useStyles from "./style";
import SwiperImages from "./SwiperImages";
import MessengerService from "../../Services/voximplant/messenger";

const MainScreenSlider = ({
  models = [],
  setModelData,
  setShowChatBox,
  callUser,
  pagination,
  setPagination,
}) => {
  const {
    currentConversationId,
    conversationHistory,
    vox_users: { conversations, currentUser, users },
  } = useSelector((state) => state.conversation);
  const classes = useStyles();
  useEffect(() => {
    setModelData(models[0]);
  }, []);
  const handleSlideChange = (e) => {
    // Custom logic to run when slide changes
    if(!(pagination.page == pagination.totalPages) && e.realIndex + 3 >= pagination.totalPages) {
      setPagination((prev)=> ({...prev, page: prev.page + 1}))
      // setPagination((prev) => ({ ...prev, page: +prev.page + 1 }));
      console.log('WWWWWWWWWWWWWWWWWWWWWWWW',e.realIndex + 3 >= pagination.totalPages, e.realIndex + 3, pagination.totalPages, pagination)
    }
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
  const conversation = async (userData, type) => {
    const voxUser = users.find(
      (item) => item.customData.userId === userData.id
    );
    if (voxUser) {
      getCurrentConversation(voxUser.userId);
      setShowChatBox(true);
      if (type === "poke") {
        const currentConversation =
          conversations &&
          conversations.find((item) => item._uuid === currentConversationId);
        const messenger = MessengerService.get();
        messenger.sendMessage(currentConversation, 'Hi!');

      }
    }
  };
  console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDD", models);
  return (
    <Swiper
      modules={[Navigation, EffectCreative, Scrollbar, A11y]}
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
        <SwiperSlide key={i} className={classes.slide}>
          {/* {item?.userData?.profileImage && (
            <img
              src={`https://theflame.life/livebk/public/uploads/${item.userData.profileImage}`}
              className={classes.img}
            />
          )} */}
          <SwiperImages
            images={[
              item?.userData?.profileImage,
              item?.userData?.profileImage1,
              item?.userData?.profileImage2,
            ]}
          />
          <Box className={classes.buttons}>
            <IconButton
              className={classes.messageBtn}
              sx={{ marginRight: 3 }}
              variant="contained"
              label="Accept"
              onClick={() => call(item.userData, true)}
            >
              <img
                src={VideoCallIcon}
                className={classes.history_actions_icon}
              />
            </IconButton>
            <IconButton
              className={classes.messageBtn}
              sx={{ marginRight: 3 }}
              variant="contained"
              label="Accept"
              onClick={() => conversation(item.userData, 'poke')}
            >
              <img src={CallIcon} className={classes.history_actions_icon} />
            </IconButton>

            <IconButton
              className={classes.messageBtn}
              variant="contained"
              sx={{ marginRight: 3 }}
              label="Accept"
              onClick={() => conversation(item.userData)}
            >
              <img src={ChatIcon} className={classes.history_actions_icon} />
            </IconButton>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainScreenSlider;
