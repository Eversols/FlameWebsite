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
import image from "../../Assets/images/page_2_img_2.png";
import VideoCallIcon from "../../Assets/images/video.svg";
import { getCurrentConversation } from "../../Services/utils";

import useStyles from "./style";

const SwiperImages = ({ images = [] }) => {
  const {
    vox_users: { users },
  } = useSelector((state) => state.conversation);
  const classes = useStyles();
  const handleSlideChange = (e) => {
    // Custom logic to run when slide changes
    images[e.realIndex];
    // Add your custom logic here
  };
  console.log('TTTTTTTTTTTTTTTTTTTTTTTTTTTTT', images)
  return (
    <Swiper
      modules={[ Pagination, EffectCreative, Scrollbar, A11y]}
      centeredSlides={true}
      loop={true}
      slidesPerView={1}
      speed={600}
      className={classes.windowImage}
      disableUnderline={false}
      onSlideChange={handleSlideChange}
      pagination={{ clickable: true }}
    >
      {images.map((item, i) => (
        <SwiperSlide key={i} >
          {item ? (
            <img
              src={`${item}`}
              className={classes.img}
            />
          ) : (
            <img src={image} className={classes.img} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperImages;
