/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import useStyles from "./style";
import {
  Box,
  Button,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import { Instagram, YouTube } from "@mui/icons-material";
import Img_2 from "../../../Assets/images/page_2_textbox_2.png";
import { useDispatch } from "react-redux";
import { setRole } from "../../../Services/store/authSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { persistor } from "../../../Services/store";

const index = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    persistor.purge()
  }, [])
  
  function handleButtonClick() {
    // Store the role as 'user' in localStorage
    // localStorage.setItem("role", "model");
    dispatch(setRole("model"));
  }
  function handleButtonClickModelmanager() {
    // Store the role as 'user' in localStorage
    dispatch(setRole("modelmanager"));
    // localStorage.setItem("role", "modelmanager");
  }
  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <Container className={classes.header_container}>
          <Container>
            <Typography variant="h4">LOGO</Typography>
          </Container>
        </Container>
        <Container className={classes.page_body}>
          <Container className={classes.body_item}>
            <Typography className={classes.page_heading_text} variant="h2">
              Find love.
              <br />
              Find romance.
              <br />
              Find a new life.
            </Typography>
            <Typography className={classes.page_body_text} variant="h6">
              Meet men all over the world
              <br />
              When ever you are in the mood to be pampered,
              <br />
              charmed, loved or just a little fun, we'll put you across
              <br />
              who are just looking for just that
            </Typography>
          </Container>
        </Container>
      </div>
      <div className={classes.body2}>
        <Container className={classes.text_box_container}>
          <Typography className={classes.heading} variant="h2">
            We care.
          </Typography>
          <Typography className={classes.body1} variant="h6">
            <span
              style={{
                color: "#A31100",
                fontStyle: "italic",
                fontWeight: "400",
              }}
            >
              We care for your experience on flame.
            </span>{" "}
            you chose the typre of experince you want and we'll filter you
            matches to men who are looking for exactly that. A delightful
            experience meeting strangers everytime.
          </Typography>
        </Container>
        <Box className={classes.img_box}>
          <Typography className={classes.heading} variant="h2">
            We care for your privacy as much as you do.
          </Typography>
        </Box>

        <Container className={classes.text_box_container}>
          <Typography className={classes.body1} variant="h6">
            Experience the most advanced privacy control features that provide
            your identity and content from unauthorized access.{" "}
            <span style={{ color: "#0099DD", fontWeight: "400" }}>
              Only you can decide what to share and with whoom to share.
            </span>
          </Typography>
          <Typography className={classes.heading} variant="h2">
            We care to provide you the best opportunities.
          </Typography>
          <Typography className={classes.body1} variant="h6">
            Create content that your followers love. Monetize it the way you
            like.{" "}
            <span style={{ color: "#DA3200", fontWeight: "400" }}>
              We offer you the best in market monetization
            </span>{" "}
            opportunities.
          </Typography>
        </Container>
        <Box
          className={classes.img_box}
          style={{
            backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3) ,rgba(0,0,0,0.3)),url(${Img_2})`,
          }}
        ></Box>
        <Container className={classes.text_box_container}>
          <Typography className={classes.heading} variant="h2">
            We care for the things that make you smile.
          </Typography>
          <Typography className={classes.body1} variant="h6">
            <span style={{ color: "#FF9700", fontWeight: "400" }}>
              Flame sponsors welfare benfits that take care of you and yous
              loved ones.
            </span>{" "}
            Now you can experiences life and let us worry about everything else.
          </Typography>
          <Link to="/model/authentication" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              className={classes.getStartBtn}
              onClick={handleButtonClick}
            >
              Get Started
            </Button>
          </Link>
        </Container>
        <Box style={{ width: "90%", margin: "10px auto" }}>
          <hr />
        </Box>
        <Container className={classes.footer}>
          <Typography variant="body1">
            &#169; 2023 company inc.
            <br />
            Privacy Policy
          </Typography>
          <Box>
            <IconButton
              style={{
                backgroundColor: "#333333",
                color: "#ffffff",
                marginRight: "10px",
              }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              style={{
                backgroundColor: "#333333",
                color: "#ffffff",
                marginRight: "10px",
              }}
            >
              <YouTube />
            </IconButton>
            <Link
              to="/modelmanager/authentication"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                className={classes.ModelMangerbtn}
                onClick={handleButtonClickModelmanager}
              >
                Referral Program
              </Button>
            </Link>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default index;
