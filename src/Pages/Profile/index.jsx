/* eslint-disable react-hooks/rules-of-hooks */

import { Box, Card, Typography } from "@mui/material";
import ProfileForm from "../../Components/Profile/ProfileForm";
import ProfileModal from "../../Components/Profile/ProfileModal";
import Header from "../../Components/LandingPage/Header";
import Profile from "../../Components/Profile/Profile";
import bgBlock from "../../Assets/images/bg_block.svg";
import bgHeart from "../../Assets/images/bg_heart.svg";
import useStyles from "./style";


const index = () => {
  const classes = useStyles();
  return (
    <>
      {/* <img src={flameLogo} className={classes.logo} /> */}
      <img src={bgHeart} className={classes.heart_bg} />
      <img src={bgBlock} className={classes.block_bg} />
      <Box className={classes.mainWrapperBox}>
        <Box className={classes.mainBox}>
          <Profile />
        </Box>
      </Box>
    </>
  );
};

export default index;
