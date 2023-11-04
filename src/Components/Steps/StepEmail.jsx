/* eslint-disable react/prop-types */
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import bgBlock from "../../Assets/images/bg_block.svg";
import bgHeart from "../../Assets/images/bg_heart.svg";
import flameLogo from "../../Assets/images/flame logo.svg";
import { post } from "../../Services/api";
import { setError, setUser } from "../../Services/store/authSlice";
import useStyles from "./style";

const StepEmail = ({ onNext, setStep }) => {
  const [email, setEmail] = useState("");
  const { error } = useSelector((state) => state.auth);
  const classes = useStyles();
  const dispatch = useDispatch();

  const confirmSubmit = async (e) => {
    if (email) {
      try {
        const res = await post("/check-email", { email });
        if (res.data.email_exist) {
          dispatch(setUser({ email, emailExist: res.data.email_exist }));
          setStep(4);
        } else {
          dispatch(setUser({ email }));
          onNext();
        }
      } catch (error) {
        console.log(error);
        dispatch(setError(error.response.data.message));
      }
    }
    // e.preventDefault();
    // localStorage.setItem('mood','')
    //   localStorage.setItem('region','')
    // setError(null);
    // setOpen(true);
    // const response = await checkEmail({ email });
    // setOpen(false);
    // console.log('res',response,'email')
    // if (response.data.email_exist) {
    //   if (localStorage.getItem("bearerToken")) {
    //     const res = await getUser();
    //     if(!(res?.data)){
    //       setError(res)
    //     }
    //     if (res.data.email === email) {
    //       reloginVox()
    //       conversationInit();
    //       navigate("/home");
    //     } else {
    //       setCurrentPage(4);
    //     }
    //   } else setCurrentPage(4);
    // } else {
    //   setCurrentPage(2);
    // }
  };
  return (
    <>
      <img src={flameLogo} className={classes.logo} />
      <img src={bgHeart} className={classes.heart_bg} />
      <img src={bgBlock} className={classes.block_bg} />
      <Box className={classes.mainBox}>
        <Container className={classes.container}>
          <Typography variant="h5" className={classes.heading}>
            Please enter your email
          </Typography>
          <Box className={classes.fieldWrapper}>
            <TextField
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
                dispatch(setError(""));
              }}
              value={email}
              type="email"
              placeholder="Enter your email address"
              className={classes.input1}
              fullWidth
            />

            {/* <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            dispatch(setError(""));
          }}
          placeholder="Enter your email address"
          className={classes.input}
        /> */}
            {error && <p className={classes.error}>{error}</p>}
            <Button
              type="button"
              onClick={confirmSubmit}
              variant="contained"
              className={classes.btn}
            >
              Next
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default StepEmail;
