import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bgBlock from "../../Assets/images/bg_block.svg";
import bgHeart from "../../Assets/images/bg_heart.svg";
import flameLogo from "../../Assets/images/flame logo.svg";
import { post } from "../../Services/api";
import {
  getProfile,
  getUser,
  setError,
  setLanguage,
  setToken,
} from "../../Services/store/authSlice";
import { voxLogin, voxRegister } from "../../Services/utils";
import useStyles from "./style";
import { useTranslation } from "react-i18next";
import { LoadingButton } from "@mui/lab";
import ProfileStatus from "./ProfileStatus";

const StepPassword = ({ setStep }) => {
  const { pathname } = useLocation();
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [modal, setModal] = useState(false);
  const { error, user, role, mood, region, userData, siteMeta } = useSelector(
    (state) => state.auth
  );
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const { t } = useTranslation();
  const confirmSubmit = async (e) => {
    setLoading(true);
    if (password !== cPassword && !user.emailExist) {
      dispatch(setError("Confirm password not match!"));
      setLoading(false);
      return;
    }
    if (password) {
      if (pathname.includes("forgetpassword")) {
        // https://theflame.life/livebk/public/api/changePassword?email=male001@gmail.com&password=1234
        const { data } = await post("/changePassword", {
          email: user.email,
          password: password,
        });
        if (data) {
          window.location.href = `/${role}/authentication`;
          setLoading(false);
          return;
        }
      }
      try {
        let res;
        if (user.emailExist) {
          res = await post("/login", { email: user.email, password });
          if (res.data.status === "success") {
            // navigate(`/${role}/home`);
            // navigate(`/${role}/profile`);
            // return;
          }
        } else {
          res = await post("/register", {
            email: user.email,
            password,
            role: role ? role : "user",
          });
          const voxRegisterRes = await voxRegister(res, user.displayName);
          if (voxRegisterRes) {
            await post("/updateUserMeta", {
              userID: res.data.content.user_id,
              displayName: user.displayName,
              voxUserId: voxRegisterRes.data.user_id,
              isProfileComplete:
                siteMeta.is_profile_complete == "yes" ? false : true,
            });
          }
        }

        if (res.data.status === "success") {
          if (res?.data?.content?.access_token) {
            localStorage.setItem("token", res.data.content.access_token);
            const token = await dispatch(
              setToken(res.data.content.access_token)
            );
            if (token?.payload) {
              const user_data = await dispatch(getUser());

              console.log(
                "KKKKKKKKKKKKKKK",
                user.emailExist,
                user_data.payload,
                user.emailExist && user_data.payload,
                user_data.payload.is_active
              );
              if (
                res.data.content.role == "user" &&
                user.emailExist &&
                user_data.payload.is_active == "Inactive"
              ) {
                setModal(true)
                // dispatch(setError("Your account under the review from admin!"));
                setLoading(false);
                return;
              }
              if (res.data.content.role === "partner") {
                setLoading(false);
                navigate(`/${res.data.content.role}/dashboard`);
                return;
              }
              if (user.emailExist && user_data.payload) {
                console.log("TTTTTTTTTTTTTTTTTTTTTT", user_data);
                const userName = user_data.payload.email.replace(
                  "@",
                  "-flame-"
                );
                const password = `${user_data.payload.email.split("@")[0]}${user_data.payload.id
                  }`;
                console.log(res.data.content.role, mood, region);
                await voxLogin(userName, password, user_data.payload.email);
              }
              if (res.data.content.role === "user") {
                dispatch(getProfile({ id: user_data.payload.id })).then(
                  (res) => {
                    console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPP",role, res);
                    if (res.payload.metadata.isProfileComplete == "0")
                      navigate(`/user/profile`);
                    if (res.payload.metadata.isProfileComplete == "1")
                      navigate(`/${role}/home`);
                    if (!user.emailExist && !user_data.payload.moodID)
                      navigate(`/${role}/mood`);
                    res.payload.metadata.language &&
                      dispatch(
                        setLanguage(res.payload.metadata.language.toLowerCase())
                      );
                  }
                );
                // if (!user_data.payload.moodID) navigate(`/${role}/mood`);
                // //else if (!region) navigate(`/${role}/region`);
                // else navigate(`/${role}/home`);
              }
              console.log(res.data.content.role);
              if (res.data.content.role === "model" && user_data) {
                const data = await dispatch(
                  getProfile({ id: user_data.payload.id })
                );
                console.log(data);
                if (data) {
                  console.log(userData?.outsideWork);
                  // if (!userData?.outsideWork) navigate(`/${role}/profile`);
                  if (!mood) navigate(`/${role}/mood`);
                  // else if (!region) navigate(`/${role}/region`);
                  else navigate(`/${role}/home`);
                }
              }

              if (res.data.content.role === "modelmanager") {
                navigate("/modelmanager");
              }
              if (res.data.content.role === "superadmin") {
                navigate("/admin");
              }
            }
          }
          setLoading(false);
        }
      } catch (error) {
        console.log("ZZZZZZZZZZZZZZZZZZZZZZZZ error ", error);
        // navigate(`/${role}/home`);
        dispatch(
          setError(
            error.response?.data?.message
              ? error.response?.data?.message
              : error.message
          )
        );
        setLoading(false);
      }
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
            <Typography variant="h5" className={classes.headingOne}>
              {!user.emailExist
                ? t("Set your password")
                : t("Enter your password")}
            </Typography>
            <Box className={classes.fieldWrapper}>
              <Box className={classes.passwordWrapper}>
                <TextField
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={t("Password")}
                  className={classes.input1}
                  value={password}
                  fullWidth
                  onChange={(e) => {
                    setPassword(e.target.value);
                    dispatch(setError(""));
                  }}
                  inputProps={{
                    "data-cy": "password-Employeecredential", // Cypress ID assigned to the search input element
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          data-cy="password-credential"
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword((prev) => !prev)}
                          // onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <RemoveRedEyeOutlinedIcon
                              sx={{ fill: "#00000099", fontSize: "18px" }}
                            />
                          ) : (
                            <VisibilityOffOutlinedIcon
                              sx={{ fill: "#00000099", fontSize: "18px" }}
                            />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {/* {error && <p className={classes.error}>{error}</p>} */}
                {(!user.emailExist || pathname.includes("forgetpassword")) && (
                  <TextField
                    name="cPassword"
                    type={showCPassword ? "text" : "password"}
                    value={cPassword}
                    placeholder={t("Confirm Password")}
                    className={classes.input2}
                    onChange={(e) => {
                      setCPassword(e.target.value);
                      dispatch(setError(""));
                    }}
                    fullWidth
                    // onChange={(e) => handlevalueChange(e, "password")}
                    inputProps={{
                      "data-cy": "password-Employeecredential", // Cypress ID assigned to the search input element
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            data-cy="password-credential"
                            aria-label="toggle password visibility"
                            onClick={() => setShowCPassword((prev) => !prev)}
                            // onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showCPassword ? (
                              <RemoveRedEyeOutlinedIcon
                                sx={{ fill: "#00000099", fontSize: "18px" }}
                              />
                            ) : (
                              <VisibilityOffOutlinedIcon
                                sx={{ fill: "#00000099", fontSize: "18px" }}
                              />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
                {user.emailExist && !pathname.includes("forgetpassword") && (
                  <Link
                    to={`/${role}/forgetpassword`}
                    style={{
                      marginTop: "12px",
                      textDecoration: "none",
                      fontSize: "12px",
                      color: "#00000080",
                    }}
                    onClick={() => setStep(1)}
                  >
                    {t("Forget Password")}
                  </Link>
                )}
              </Box>
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
      <ProfileStatus modal={modal} setModal={setModal} action={() => setModal(false)} />
    </>
  );
};

export default StepPassword;
