/* eslint-disable react/prop-types */
import React from "react";
import useStyles from "./style";
import { Button, Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { post } from "../../Services/api";
import { setError } from "../../Services/store/authSlice";

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
    <Container className={classes.container}>
      <Typography variant="h5" className={classes.heading}>
        Confirm OTP
      </Typography>
      <input
        type="text"
        value={OTP}
        onChange={(e) => {
          setOTP(e.target.value);
          dispatch(setError(""));
        }}
        placeholder="Confirm OTP sent to your Email ID"
        className={classes.input}
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
    </Container>
  );
};

export default StepOtp;
