/* eslint-disable react/prop-types */
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import bgBlock from "../../Assets/images/bg_block.svg";
import bgHeart from "../../Assets/images/bg_heart.svg";
import flameLogo from "../../Assets/images/flame logo.svg";
import { setUser } from "../../Services/store/authSlice";
import useStyles from "./style";
import { useTranslation } from "react-i18next";

const StepName = ({ onNext }) => {
  const [name, setName] = useState("");
  const { error } = useSelector((state) => state.auth);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation()
  const confirmSubmit = async (e) => {
    if (name) {
      dispatch(setUser({ displayName: name }));
      onNext();
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
              {t("Set a screen name")}
            </Typography>
            <Box className={classes.fieldWrapper}>
              <TextField
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("Enter your name")}
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
                {t("Next")}
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default StepName;
