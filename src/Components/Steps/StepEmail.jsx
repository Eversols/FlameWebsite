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
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Link, matchRoutes, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LoadingButton } from "@mui/lab";

const routes = [{ path: "/members/:id" }]

const StepEmail = ({ onNext, setStep }) => {
  const { pathname } = useLocation()
  const [email, setEmail] = useState("");
  const { error, role } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });
  useEffect(() => {
    dispatch(setError(""));
  }, []);

  const confirmSubmit = async (data) => {
    setLoading(true);
    const { email } = data;
    if (email) {
      if (pathname.includes('forgetpassword')) {
        const { data } = await post("/forgotPasswordOTP", { email });
        if (data?.otp) {
          dispatch(setUser({
            email,
            otp: data.otp,
          }))
          onNext();
          setLoading(false);
          return
        } else {
          dispatch(setError(data))
          setLoading(false);
          return
        }
      }
      try {
        const res = await post("/check-email", { email });
        if (res.data.email_exist) {
          dispatch(
            setUser({
              email,
              emailExist: res.data.email_exist,
              otp: res.data.otp,
            })
          );
          setLoading(false);
          setStep(4);
        } else {
          dispatch(setUser({ email, otp: res.data.otp }));
          setLoading(false);
          onNext();
        }
      } catch (error) {
        console.log(error);
        dispatch(setError(error.response.data.message));
        setLoading(false);
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
      {/* <img src={flameLogo} className={classes.logo} /> */}
      <img src={bgHeart} className={classes.heart_bg} />
      <img src={bgBlock} className={classes.block_bg} />
      <Box className={classes.mainWrapperBox}>
        <Box className={classes.mainBox}>
          <Container className={classes.container}>
            <Typography variant="h5" className={classes.heading}>
              {t("Please enter your email")}
            </Typography>
            <Box className={classes.fieldWrapper}>
              <form onSubmit={handleSubmit(confirmSubmit)}>
                <TextField
                  type="text"
                  placeholder="Enter your email address"
                  className={classes.input1}
                  fullWidth
                  {...register("email", {
                    required: t("Email is required"),
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: t("Invalid email ID"),
                    },
                  })}
                />


                {errors.email && (
                  <p className={classes.error}>{errors.email.message}</p>
                )}
                {error && <p className={classes.error}>{error}</p>}
                <LoadingButton
                  type="submit"
                  loading={loading}
                  loadingPosition="center"
                  variant="contained"
                  className={classes.btn}
                >
                  {t("Next")}
                </LoadingButton>
              </form>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default StepEmail;
