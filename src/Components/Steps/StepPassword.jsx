import { Button, Container, Typography } from "@mui/material";
import React from "react";
import useStyles from "./style";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { post } from "../../Services/api";
import {
  getProfile,
  getUser,
  setError,
  setToken,
} from "../../Services/store/authSlice";
import { useNavigate } from "react-router-dom";
import { voxLogin, voxRegister } from "../../Services/utils";

const StepPassword = () => {
  const [password, setPassword] = useState("");
  const { error, user, role, mood, region, userData } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const confirmSubmit = async (e) => {
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
          const voxRegisterRes = await voxRegister(res, user.displayName)
          if(voxRegisterRes){
            await post("/updateUserMeta", {
              userID: res.data.content.user_id,
              displayName: user.displayName,
              voxUserId: voxRegisterRes.data.user_id
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
              console.log('KKKKKKKKKKKKKKK',user.emailExist, user_data.payload, user.emailExist && user_data.payload)
              if(user.emailExist && user_data.payload){
                const userName = user_data.payload.email.replace("@", "-flame-");
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
              console.log(res.data.content.role)
              if (res.data.content.role === "model" && user_data) {
                const data = await dispatch(getProfile({ id: user_data.payload.id }));
                console.log(data)
                if (data) {
                  console.log(userData?.outsideWork)
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
        dispatch(setError(error.response?.data?.message ?error.response?.data?.message: error.message));
      }
    }
  };
  return (
    <Container className={classes.container}>
      <Typography variant="h5" className={classes.heading}>
        Almost Done
      </Typography>
      <Typography variant="h5" className={classes.heading}>
        Please set your password
      </Typography>

      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          dispatch(setError(""));
        }}
        placeholder="Enter password"
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

export default StepPassword;
