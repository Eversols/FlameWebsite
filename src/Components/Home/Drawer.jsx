import { ClassNames } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import drawerCross from "../../Assets/images/drawerCross.svg";
import drawerLogo from "../../Assets/images/drawerlogo.svg";
import useStyles from "./style";

const Drawer = ({
  handleDrawerClick,
  isDrawerOpen,
  recharge,
  role,
  userData,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        background: "green",
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "80%",
          position: "absolute",
          top: "20px",
          justifyContent: "space-between",
        }}
      >
        <img src={drawerLogo} />
        <img src={drawerCross} onClick={handleDrawerClick} />
      </Box>

      <Box textAlign="center" className={classes.marginHandler}>
        <Typography
          variant="body1"
          component="span"
          fontWeight="bold"
          className={classes.fontadjust}
        >
          {userData.minutes}
        </Typography>
        <Typography
          variant="body1"
          component="span"
          ml={1}
          className={classes.fontadjust}
        >
          min
        </Typography>
      </Box>
      <Box textAlign="center" className={classes.marginHandler}>
        <Typography
          variant="body1"
          component="span"
          fontWeight="bold"
          className={classes.fontadjust}
        >
          {userData.messages}
        </Typography>
        <Typography
          variant="body1"
          component="span"
          className={classes.fontadjust}
          ml={1}
        >
          messages
        </Typography>
      </Box>

      <Button
        className={classes.recharge_btn}
        type="button"
        variant="contained"
        onClick={recharge}
      >
        Recharge
      </Button>

      <Box className={classes.header_mid}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="#868AA9"
        >
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
              206
            </Typography>
            <Typography
              variant="body1"
              component="span"
              className={classes.fontadjust}
              ml={1}
              mr={1}
            >
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
    </Box>
  );
};

export default Drawer;
