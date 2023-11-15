/* eslint-disable react/prop-types */
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import bgBlock from "../../Assets/images/bg_block.svg";
import bgHeart from "../../Assets/images/bg_heart.svg";
import flameLogo from "../../Assets/images/flame logo.svg";
import { post } from "../../Services/api";
import { setError } from "../../Services/store/authSlice";
import useStyles from "./style";
const StepOtp = ({ onNext }) => {
  const [OTP, setOTP] = useState("");
  const { error, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const classes = useStyles();

  const confirmSubmit = async (e) => {
    if (OTP) {
      try {
        const res = await post("/check-otp", { email: user.email, otp: OTP });
        if (res.data.email_exist && res.data.otp_verified) {
          onNext();
        }
      } catch (error) {
        dispatch(setError(error.response.data.message));
      }
    }
  };
  return (
    <>
      <img src={flameLogo} className={classes.logo} />
      <img src={bgHeart} className={classes.heart_bg} />
      <img src={bgBlock} className={classes.block_bg} />
      <Box className={classes.mainWrapperBox}>
        <Box className={classes.mainBox}>
          <Container className={classes.container}>
            <Typography variant="h5" className={classes.heading}>
              Check your email for an OTP
            </Typography>

            <Box className={classes.fieldWrapper}>
              <TextField
                name="otp"
                onChange={(e) => {
                  setOTP(e.target.value);
                  dispatch(setError(""));
                }}
                type="text"
                value={OTP}
                placeholder="Confirm OTP sent to your Email ID"
                className={classes.input1}
                fullWidth
              />
              {error && <p className={classes.error}>{error}</p>}
              <Button
                type="button"
                onClick={confirmSubmit}
                variant="contained"
                className={classes.btn}
              >
                next
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default StepOtp;
