import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import drawer from "../../Assets/images/drawer.svg";
import flameLogo from "../../Assets/images/flame logo.svg";
import power from "../../Assets/images/logout.png";
import logoutLogo from "../../Assets/images/logout.svg";
import profile from "../../Assets/images/profile.png";
import VideoCallIcon from "../../Assets/images/video_call.png";
import { post } from "../../Services/api";
import { persistor } from "../../Services/store";
import {
  setPayoutModel,
  setProfileModel,
  setRechargeModel,
} from "../../Services/store/authSlice";
import { voxService } from "../../Services/voximplant";
import Drawer from "./Drawer";
import useStyles from "./style";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { role, userData, rechargeModel, profileModel, payoutModel } =
    useSelector((state) => state.auth);
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [isDrawerOpen, setDrawerOpen] = useState(null);
  const logout = async () => {
    try {
      const res = await post("/logout", userData);
      voxService.get().disconnect();
      persistor.purge();
      localStorage.removeItem("persist:root");
      navigate(`/${role}/authentication`);
    } catch (error) {
      voxService.get().disconnect();
      persistor.purge();
      localStorage.removeItem("persist:root");
      navigate(`/${role}/authentication`);
      console.log(error);
    }
  };
  const recharge = () => {
    dispatch(setRechargeModel(!rechargeModel));
  };
  const profileHandle = () => {
    dispatch(setProfileModel(!profileModel));
  };
  const payoutHandle = () => {
    dispatch(setPayoutModel(!payoutModel));
  };
  const handleDrawerClick = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  console.log(userData, "drawer");

  return (
    <Paper elevation={1} className={classes.headermain}>
      <Box className={classes.header}>
        <Box width={160} sx={{ marginRight: "10px" }}>
          <img src={flameLogo} className={classes.logo} />
        </Box>
        <Box width={25} sx={{ marginLeft: "10px" }} onClick={handleDrawerClick}>
          <img src={drawer} className={classes.drawer_logo} alt="drawer" />
        </Box>

        {isDrawerOpen && (
          <div
            className={`${classes.animatedDrawer} ${isDrawerOpen === null
                ? ""
                : isDrawerOpen
                  ? classes.slideOut
                  : classes.slideIn
              }`}
          >
            {/* Content of the animated drawer */}
            <Drawer
              handleDrawerClick={handleDrawerClick}
              isDrawerOpen={isDrawerOpen}
              recharge={recharge}
              role={role}
              userData={userData}
              logout={logout}
            />
          </div>
        )}

        <Box className={classes.header_mid}>
          <Button
            className={classes.recharge_btn}
            type="button"
            variant="contained"
            onClick={recharge}
          >
            {t("Recharge")}
          </Button>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="#868AA9"
          >
            <Box textAlign="center" className={classes.marginHandler}>
              <Typography
                variant="body1"
                component="span"
                fontWeight="bold"
                className={classes.fontadjust}
              >
                {userData?.minutes || 0}
              </Typography>
              <Typography
                variant="body1"
                component="span"
                ml={1}
                className={classes.fontadjust}
              >
                {t("min")}
              </Typography>
            </Box>
            <Box textAlign="center" className={classes.marginHandler}>
              <Typography
                variant="body1"
                component="span"
                fontWeight="bold"
                className={classes.fontadjust}
              >
                {userData?.messages || 0}
              </Typography>
              <Typography
                variant="body1"
                component="span"
                className={classes.fontadjust}
                ml={1}
              >
                {t("messages")}
              </Typography>
            </Box>
            <Box
              textAlign="center"
              display={"flex"}
              alignItems={"center"}
              flexWrap={"noWrap"}
              className={classes.marginHandler}
            >
              <Typography
                variant="body1"
                component="span"
                className={classes.fontadjust}
                fontWeight="bold"
                color="#FB1F43"
              >
              {userData.available_points || 0}
              </Typography>
              <Typography
                variant="body1"
                component="span"
                className={classes.fontadjust}
                ml={1}
                mr={1}
              >
                {t("points")}
              </Typography>
              <Button
                className={classes.payout_btn}
                type="button"
                variant="outlined"
                onClick={payoutHandle}
              >
                {t("Payout")}
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className={classes.header_mid}>
          <Box
            onClick={profileHandle}
            mr={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ cursor: "pointer" }}
          >
            <Avatar
              alt={userData?.displayName}
              src={
                userData?.profileImage
                  ? `https://theflame.life/livebk/public/uploads/${userData.profileImage}`
                  : userData?.gender === "Male" ? 'https://theflame.life/livebk/public/frontend_images/avatar-man.jpg' :
                    "https://theflame.life/livebk/public/frontend_images/avatar-woman.jpg"
              }
            />
            <Typography
              variant="body1"
              component="span"
              ml={1}
              className={classes.remove}
            >
              {userData?.displayName}
            </Typography>
          </Box>
          <IconButton onClick={logout}>
            <img src={logoutLogo} className={classes.logout} />
            <Typography
              variant="body1"
              component="span"
              ml={1}
              className={classes.remove}
            >
              {t("Logout")}
            </Typography>
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default Header;

// <Box className={classes.header}>
//   <Container className={classes.header_right}>
//     <IconButton
//       className={classes.profile_button}
//       onClick={() => navigate(`/${role}/profile/${userData.id}`)}
//     >
//       <img src={profile} className={classes.profile_icon}></img>
//     </IconButton>
//   </Container>
//   <Container className={classes.header_mid}>
//     <IconButton className={classes.profile_button}>
//       <Badge
//         badgeContent={"" + userData.minutes}
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "left",
//         }}
//         color="secondary"
//       >
//         <img src={VideoCallIcon}></img>
//       </Badge>
//     </IconButton>
//     <IconButton className={classes.profile_button}>
//       <Badge
//         badgeContent={"" + userData.messages}
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "left",
//         }}
//         color="secondary"
//       >
//         <img src={ChatIcon}></img>
//       </Badge>
//     </IconButton>
//     <Button
//       className={classes.recharge_btn}
//       type="button"
//       variant="contained"
//       onClick={() => navigate(`/${role}/recharge`)}
//     >
//       Recharge
//     </Button>
//   </Container>
//   <Container className={classes.header_left}>
//     <IconButton className={classes.logout_button} onClick={logout}>
//       <img src={power} className={classes.logout_icon}></img>
//     </IconButton>
//   </Container>
// </Box>
