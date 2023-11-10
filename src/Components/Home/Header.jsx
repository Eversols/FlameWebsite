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
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ChatIcon from "../../Assets/images/chat_icon.png";
import flameLogo from "../../Assets/images/flame logo.svg";
import power from "../../Assets/images/logout.png";
import logoutLogo from "../../Assets/images/logout.svg";
import profile from "../../Assets/images/profile.png";
import VideoCallIcon from "../../Assets/images/video_call.png";
import { post } from "../../Services/api";
import { persistor } from "../../Services/store";
import { voxService } from "../../Services/voximplant";
import useStyles from "./style";

const Header = () => {
  const { role, userData } = useSelector((state) => state.auth);
  const classes = useStyles();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const res = await post("/logout", userData);
      voxService.get().disconnect();
      persistor.purge();
      navigate(`/${role}/authentication`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Paper elevation={1} className={classes.header}>
      <Box width={100}>
        <img src={flameLogo} className={classes.logo} />
      </Box>
      <Box className={classes.header_mid}>
        <Button
          className={classes.recharge_btn}
          type="button"
          variant="contained"
          onClick={() => navigate(`/${role}/recharge`)}
        >
          Recharge
        </Button>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="#868AA9"
        >
          <Box textAlign="center" mx={2}>
            <Typography variant="body1" component="span" fontWeight="bold">
              {userData.minutes}
            </Typography>
            <Typography variant="body1" component="span" ml={1}>
              min
            </Typography>
          </Box>
          <Box textAlign="center" mx={2}>
            <Typography variant="body1" component="span" fontWeight="bold">
              {userData.messages}
            </Typography>
            <Typography variant="body1" component="span" ml={1}>
              messages
            </Typography>
          </Box>
          <Box textAlign="center" mx={2}>
            <Typography
              variant="body1"
              component="span"
              fontWeight="bold"
              color="#FB1F43"
            >
              206
            </Typography>
            <Typography variant="body1" component="span" ml={1} mr={2}>
              points
            </Typography>
            <Button
              className={classes.payout_btn}
              type="button"
              variant="outlined"
              onClick={() => navigate(`/${role}/recharge`)}
            >
              Payout
            </Button>
          </Box>
        </Box>
      </Box>
      <Box className={classes.header_mid}>
        <Box mr={2} display="flex" justifyContent="center" alignItems="center">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Typography variant="body1" component="span" ml={1}>
            My Account
          </Typography>
        </Box>
        <IconButton onClick={logout}>
          <img src={logoutLogo} className={classes.logout} />
          <Typography variant="body1" component="span" ml={1}>
            Logout
          </Typography>
        </IconButton>
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
