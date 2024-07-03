/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, Container, Radio, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import bgFrame from "../../Assets/images/bg_frame.svg";
import genderFemale from "../../Assets/images/female.svg";
import flameLogo from "../../Assets/images/flame logo.svg";
import genderMale from "../../Assets/images/male.svg";
import useStyles from "./style";
import { post } from "../../Services/api";
import { getProfile } from "../../Services/store/authSlice";
import { useTranslation } from "react-i18next";
import Header from "../../Components/LandingPage/Header";

const index = () => {
  const { role, userData, mood } = useSelector((state) => state.auth);
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState("Male");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation()


  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  console.log("ff", selectedValue);



  const confirmSubmit = async () => {
    if (selectedValue) {

      try {
        const res = await post("/updateprofile", {
          userID: userData.id,
          moodID: mood,
          gender: selectedValue,
        });
        if (res) {
          dispatch(getProfile({ id: userData.id }));
          console.log('DDDDDDDDDDDDDDDDDD',userData.isProfileComplete,  userData.isProfileComplete == '0')
          if ((userData?.isProfileComplete == 0)) navigate(`/${role}/profile`);
          else navigate(`/${role}/home`);
        }
      } catch (error) {
        // navigate(`/${role}/home`);
        console.log(error);
      }
    }
  };

  return (
    <>
    <Header />
      {/* <img src={flameLogo} className={classes.logo} /> */}
      <img src={bgFrame} className={classes.gender_bg} />
      <Box className={classes.mainWrapperBox}>
        <Container className={classes.container}>
          <Container className={classes.paragraph_container}>
            <Typography variant="h4" className={classes.heading}>
              {t("Welcome to")} <span className="text">{t("Flame")}</span>
            </Typography>
            <Typography
              variant="h6"
              className={classes.heading2}
              sx={{ marginBottom: "30px" }}
            >
              {t("here are few quick questions")}
            </Typography>
            <Typography variant="h4" className={classes.heading}>
              {t("What is your gender")}?
            </Typography>
          </Container>

          <Box className={classes.mainWrapper}>
            <Box className={classes.genderWrapper}>
              <img src={genderMale} className={classes.male} />
              <Typography variant="h6" className={classes.heading2}>
                {t("Male")}
              </Typography>
              <Radio
                checked={selectedValue === "Male"}
                onChange={handleChange}
                value="Male"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
            </Box>

            <Box className={classes.genderWrapper}>
              <img src={genderFemale} className={classes.female} />
              <Typography variant="h6" className={classes.heading2}>
                {t("Female")}
              </Typography>
              <Radio
                checked={selectedValue === "Female"}
                onChange={handleChange}
                value="Female"
                name="radio-buttons"
                inputProps={{ "aria-label": "B" }}
              />
            </Box>
          </Box>

          <Button
            type="submit"
            onClick={confirmSubmit}
            variant="contained"
            className={classes.btn}
          >
            {t("Next")}
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default index;
