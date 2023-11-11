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
import { useNavigate } from "react-router-dom";
import bgBlock from "../../Assets/images/bg_block.svg";
import bgHeart from "../../Assets/images/bg_heart.svg";
import flameLogo from "../../Assets/images/flame logo.svg";
import { post } from "../../Services/api";
import {
  getProfile,
  getUser,
  setError,
  setToken,
} from "../../Services/store/authSlice";
import { voxLogin, voxRegister } from "../../Services/utils";
import useStyles from "./style";

const StepPassword = () => {
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const { error, user, role, mood, region, userData } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const confirmSubmit = async (e) => {
    if (password !== cPassword) {
      dispatch(setError("Confirm password not match!"));
      return;
    }
    if (password) {
      try {
        let res;
        if (user.emailExist) {
          res = await post("/login", { email: user.email, password });
        } else {
          res = await post("/register", {
            email: user.email,
            password,
            role: role,
          });
          const voxRegisterRes = await voxRegister(res, user.displayName);
          if (voxRegisterRes) {
            await post("/updateUserMeta", {
              userID: res.data.content.user_id,
              displayName: user.displayName,
              voxUserId: voxRegisterRes.data.user_id,
            });
          }
        }

        if (res.data.status === "success") {
          if (res?.data?.content?.access_token) {
            const token = await dispatch(
              setToken(res.data.content.access_token)
            );
            if (token?.payload) {
              const user_data = await dispatch(getUser());
              console.log(
                "KKKKKKKKKKKKKKK",
                user.emailExist,
                user_data.payload,
                user.emailExist && user_data.payload
              );
              if (user.emailExist && user_data.payload) {
                const userName = user_data.payload.email.replace(
                  "@",
                  "-flame-"
                );
                const password = `${user_data.payload.email.split("@")[0]}${
                  user_data.payload.id
                }`;
                await voxLogin(userName, password, user_data.payload.email);
              }
              if (res.data.content.role === "user") {
                if (!mood) navigate(`/${role}/mood`);
                else if (!region) navigate(`/${role}/region`);
                else navigate(`/${role}/home`);
              }
              console.log(res.data.content.role);
              if (res.data.content.role === "model" && user_data) {
                const data = await dispatch(
                  getProfile({ id: user_data.payload.id })
                );
                console.log(data);
                if (data) {
                  console.log(userData?.outsideWork);
                  if (!userData?.outsideWork) navigate(`/${role}/profile`);
                  else if (!mood) navigate(`/${role}/mood`);
                  else if (!region) navigate(`/${role}/region`);
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
        }
      } catch (error) {
        console.log(error);
        dispatch(
          setError(
            error.response?.data?.message
              ? error.response?.data?.message
              : error.message
          )
        );
      }
    }
  };
  return (
    <>
      <img src={flameLogo} className={classes.logo} />
      <img src={bgHeart} className={classes.heart_bg} />
      <img src={bgBlock} className={classes.block_bg} />
      <Box className={classes.mainBox}>
        <Container className={classes.container}>
          <Typography variant="h5" className={classes.heading}>
            Set your password
          </Typography>
          <Box className={classes.fieldWrapper}>
            <Box className={classes.passwordWrapper}>
              <TextField
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
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
              <TextField
                name="cPassword"
                // type={showPassword ? "text" : "password"}
                // value={password}
                type="text"
                placeholder="Confirm Password"
                className={classes.input1}
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
            </Box>
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
    </>
  );
};

export default StepPassword;
