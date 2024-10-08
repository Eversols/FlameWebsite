import { Box, Button, Dialog, Grid, IconButton, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import FailureIcon from "../../Assets/images/failureIcon.svg";
import SuccessIcon from "../../Assets/images/mdi_timer-sand.png";
import useStyles from "./../Profile/style";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { setPaymentStatus } from "../../Services/store/authSlice";
import { useEffect } from "react";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from "react-i18next";

const mainContainer = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
};


const ProfileStatus = ({ modal, setModal, action }) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();

  return (
    <Dialog
      fullScreen={fullScreen}
      open={modal}
      aria-labelledby="responsive-dialog-title"
      onClose={() => setModal(false)}
      sx={{
        "& .MuiDialog-paper": {
          maxWidth: { xs: "100%", sm: "600px", md: "780px" },
          width: "100%",
          minHeight: "500px",
          height: "100%",
          maxHeight: { xs: "100vh", sm: "600px" },
          background: "#fff",
          boxShadow: "none",
          borderRadius: { xs: 0, sm: "24px" },
        },

        "& .MuiDialog-container": {
          background: "rgba(255, 255, 255, 0.02)",
          backdropFilter: "blur(10px)",
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          background: '#ffff',
          cursor: 'pointer',
          zIndex: 1,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: '10px',
        }}
        data-cy={`activity-close`}
      // onClick={handleClose}
      >
        <Typography
          variant="body1"
          component="span"
          color="#000"
          fontFamily="Inter, sans-serif"
          fontSize={"22px"}
          fontWeight={700}
          ml={2}
        >

        </Typography>

        <IconButton sx={{ width: '35px', height: '35px' }} onClick={() => setModal(false)}>
          <CloseIcon sx={{ fill: '#AAAAA', width: '20px' }} />
        </IconButton>
      </Box>
      <Box sx={mainContainer}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              background: "#8BD592",
            }}
            className={classes.circle}
          >
            <img
              src={SuccessIcon}
              className={classes.circleImage1}
              alt="no image"
            />
          </Box>
          <Box className={classes.textContainer}>
            <Typography className={classes.text}>
              Profile under review
            </Typography>
          </Box>
          <Box className={classes.textContainer}>
            <Typography className={classes.text2}>
              Please check your email for confirmation to start using flame
            </Typography>
          </Box>
          <Grid item sx={{ width: "100%", marginTop: "30px" }}>
            <Box
              sx={{ width: "100%", justifyContent: "center", display: "flex" }}
            >
              <Button
                onClick={action}
                variant="contained"
                type="submit"
                className={classes.btn1}
              >
                Done
              </Button>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Dialog>
  );
};

export default ProfileStatus;
