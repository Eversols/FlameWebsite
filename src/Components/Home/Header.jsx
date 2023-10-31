import React from "react";
import useStyles from "./style";
import { Badge, Box, Button, Container, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChatIcon from "../../Assets/images/chat_icon.png";
import profile from "../../Assets/images/profile.png";
import power from "../../Assets/images/logout.png";
import VideoCallIcon from "../../Assets/images/video_call.png";
import { post } from "../../Services/api";
import { useSelector } from "react-redux";
import { persistor } from "../../Services/store";
import { voxService } from "../../Services/voximplant";

const Header = () => {
  const {
    role,
    userData,
  } = useSelector((state) => state.auth);
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
    <Box className={classes.header}>
      <Container className={classes.header_right}>
        <IconButton
          className={classes.profile_button}
          onClick={() => navigate(`/${role}/profile/${userData.id}`)}
        >
          <img src={profile} className={classes.profile_icon}></img>
        </IconButton>
      </Container>
      <Container className={classes.header_mid}>
        <IconButton className={classes.profile_button}>
          <Badge
            badgeContent={"" + userData.minutes}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            color="secondary"
          >
            <img src={VideoCallIcon}></img>
          </Badge>
        </IconButton>
        <IconButton className={classes.profile_button}>
          <Badge
            badgeContent={"" + userData.messages}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            color="secondary"
          >
            <img src={ChatIcon}></img>
          </Badge>
        </IconButton>
        <Button
          className={classes.recharge_btn}
          type="button"
          variant="contained"
          onClick={() => navigate(`/${role}/recharge`)}
        >
          Recharge
        </Button>
      </Container>
      <Container className={classes.header_left}>
        <IconButton className={classes.logout_button} onClick={logout}>
          <img src={power} className={classes.logout_icon}></img>
        </IconButton>
      </Container>
    </Box>
  );
};

export default Header;
