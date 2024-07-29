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
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LoadingButton } from "@mui/lab";
const StepOtp = ({ onNext, setStep }) => {
  const { pathname } = useLocation()
  const [OTP, setOTP] = useState("");
  const { error, user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  const { t } = useTranslation()

  const confirmSubmit = async (e) => {
    setLoading(true);
    console.log(user.email)
    if (parseInt(user.otp) == parseInt(OTP)) {
      if (pathname.includes('forgetpassword')) {
        setStep(4);
        setLoading(false);
        return
      }
      try {
        const res = await post("/check-otp", { email: user.email, otp: OTP });
        if (res.data.email_exist && res.data.otp_verified) {
          onNext();
          setLoading(false);
        }
      } catch (error) {
        dispatch(setError(error.response.data.message));
        setLoading(false);
      }
    } else {
      dispatch(setError("OTP not correct"));
      setLoading(false);
    }
  };
  return (
    <>
      {/* <img src={flameLogo} className={classes.logo} /> */}
      <img src={bgHeart} className={classes.heart_bg} />
      <img src={bgBlock} className={classes.block_bg} />
      <Box className={classes.mainWrapperBox}>
        <Box className={classes.mainBox}>
          <Container className={classes.container}>
            <Typography variant="h5" className={classes.heading}>
              {t("Check your email for an OTP")}
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
                placeholder={t("Confirm OTP sent to your Email ID")}
                className={classes.input1}
                fullWidth
              />
              {error && <p className={classes.error}>{t(error)}</p>}
              <LoadingButton
                type="button"
                loading={loading}
                loadingPosition="center"
                onClick={confirmSubmit}
                variant="contained"
                className={classes.btn}
              >
                {t("Next")}
              </LoadingButton>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default StepOtp;
