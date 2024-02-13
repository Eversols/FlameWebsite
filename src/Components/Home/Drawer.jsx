import { ClassNames } from "@emotion/react";
import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import drawerCross from "../../Assets/images/drawercross.svg";
import logoutLogo from "../../Assets/images/drawer_logout.svg";
import drawerLogo from "../../Assets/images/drawerlogo.svg";
import useStyles from "./style";

const Drawer = ({
  handleDrawerClick,
  isDrawerOpen,
  recharge,
  role,
  userData,
  logout,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box className={classes.drawerContainer}>
      <Box className={classes.drawer_header_wrapper}>
        <img src={drawerLogo} />
        <img src={drawerCross} onClick={handleDrawerClick} />
      </Box>
      <Box className={classes.drawer_action_container}>
        <Box className={classes.drawer_text}>
          <Box textAlign="center">
            <Typography
              variant="body1"
              component="span"
              fontWeight="bold"
              color="#ffff"
              className={classes.fontadjust}
            >
              {userData.minutes}
            </Typography>
            <Typography
              variant="body1"
              component="span"
              ml={1}
              color="#ffff"
              className={classes.fontadjust}
            >
              min
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography
              variant="body1"
              component="span"
              fontWeight="bold"
              color="#ffff"
              className={classes.fontadjust}
            >
              {userData.messages}
            </Typography>
            <Typography
              variant="body1"
              component="span"
              color="#ffff"
              className={classes.fontadjust}
              ml={1}
            >
              messages
            </Typography>
          </Box>
        </Box>
        <Button
          className={classes.recharge_drawer_btn}
          type="button"
          variant="contained"
          onClick={recharge}
        >
          Recharge
        </Button>
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
            color="#ffff"
          >
            206
          </Typography>
          <Typography
            variant="body1"
            component="span"
            color="#ffff"
            className={classes.fontadjust}
            ml={1}
            mr={1}
          >
            points
          </Typography>
        </Box>
        <Button
          className={classes.payout_drawer_btn}
          type="button"
          variant="outlined"
          onClick={() => navigate(`/${role}/recharge`)}
        >
          Payout
        </Button>
        <Box
          onClick={() => navigate(`/${role}/profile/${userData.id}`)}
          display="flex"
          alignItems="center"
        >
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Typography variant="body1" color="#ffff" component="span" ml={1}>
            My Account
          </Typography>
        </Box>
        <IconButton sx={{ justifyContent: "flex-start" }} onClick={logout}>
          <img src={logoutLogo} className={classes.logout} />
          <Typography variant="body1" color="#ffff" component="span" ml={1}>
            Logout
          </Typography>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Drawer;
