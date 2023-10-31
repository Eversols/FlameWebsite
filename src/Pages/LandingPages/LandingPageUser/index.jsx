/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import useStyles from "./style";
import {
  Container,
  Box,
  Typography,
  Button,
  IconButton,
  Grid,
} from "@mui/material";
import logo from "../../../Assets/images/logo_flame.png";
// import AnimatedText from "react-animated-text-content";
import Img_1 from "../../../Assets/images/page_2_img_2.png";
import img_4 from "../../../Assets/images/img_4.jpg";
import carousel_1 from "../../../Assets/images/carousel_img_1.png";
import carousel_2 from "../../../Assets/images/carousel_img_2.png";
import carousel_3 from "../../../Assets/images/carousel_img_3.png";
import carousel_bg from "../../../Assets/images/carousel_bg.png";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Instagram,
  YouTube,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setRole } from "../../../Services/store/authSlice";
import { Link } from "react-router-dom";
import { css } from '@emotion/react';


const AnimatedText = ({ words,className }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, [words]);

  const animationStyles = css`
    animation-name: textAnimation;
    animation-duration: 0.2s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    transform-origin: center;
  `;

  const keyframes = css`
    @keyframes textAnimation {
      0% {
        opacity: 0;
        transform: translateY(200px) scale(1.15);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
  `;

  return (
    <div className={className} css={[animationStyles, keyframes]}>
      {words[currentWordIndex]}
    </div>
  );
};


const index = () => {
  const classes = useStyles();
  const [words] = useState(["Love", "Muse", "Fling", "Crush"]);
  const [currentWord, setcurrentWord] = useState(0);
  const dispatch = useDispatch();
  
  const [carouselImage, setcarouselImage] = useState([
    carousel_1,
    carousel_2,
    carousel_3,
  ]);

  useEffect(() => {
    const timeout = setInterval(() => {
      if (currentWord > words.length - 2) setcurrentWord(0);
      else setcurrentWord(currentWord + 1);
    }, 3000);
    return () => {
      clearInterval(timeout);
    };
  }, [currentWord]);

  const carousel_move_left = () => {
    const newCarouselImage = [...carouselImage];
    const lastItem = newCarouselImage.pop();
    newCarouselImage.unshift(lastItem);
    setcarouselImage(newCarouselImage);
  };

  const carousel_move_right = () => {
    const newCarouselImage = [...carouselImage];
    const firstItem = newCarouselImage.shift();
    newCarouselImage.push(firstItem);
    setcarouselImage(newCarouselImage);
  };

  const handleButtonClick = () => {
    // Store the role as 'user' in localStorage
    dispatch(setRole("user"));
  };

  return (
    <>
      <div className={classes.body}>
        <Container className={classes.header_container}>
          <Container>
            <Typography variant="h4">LOGO</Typography>
          </Container>
        </Container>
        <Box className={classes.page_content_container}>
          <Box className={classes.page_heading_text_container}>
            <Typography className={classes.page_heading_text} variant="h2">
              Find your next&nbsp;
            </Typography>
            <Box className={classes.animation_wrapper}>
              <Typography className={classes.page_heading_text} variant="h2">
                &lt;
              </Typography>
              <Box className={classes.text_anim_container}>
              <AnimatedText words={words} className={classes.heading_primary_text}/>
                {/* <AnimatedText
                  className={classes.heading_primary_text}
                  type="chars"
                  interval={0.2}
                  duration={0.2}
                  animation={{
                    y: "200px",
                    ease: "ease",
                    scale: 1.15,
                  }}
                >
                  {words[currentWord]}
                </AnimatedText> */}
              </Box>
              <Typography className={classes.page_heading_text} variant="h2">
                &gt;
              </Typography>
            </Box>
          </Box>
          <Typography className={classes.page_body_text} variant="h6">
            Whether You are in the mood to flirt, find love or a late night
            <br className={classes.responsive_breaks} />
            escapade, match yourself with thousands of beautiful men and
            <br className={classes.responsive_breaks} />
            women from around the world who want exactly what you have in{" "}
            <br className={classes.responsive_breaks} />
            mind.
          </Typography>
        </Box>
      </div>

      <div className={classes.body1}>
        <Grid container className={classes.grid_body}>
          <Grid className={classes.grid_left} item lg={6} md={6} xs={12}>
            <Container className={classes.img_container_sec_1}>
              <img className={classes.image} src={Img_1} alt="img 1" />
            </Container>
            <Container className={classes.text_container_1}>
              <Typography className={classes.text_heading_sec_1} variant="h3">
                Find your perfect match. Always.
              </Typography>
              <Typography className={classes.text_body_sec_1} variant="h6">
                We'll only match you with men and women who like things the way
                you do. Bulid instant connections.
                <span style={{ color: "#DA3200", fontWeight: "400" }}>
                  {" "}
                  Have unlimited fun.
                </span>
              </Typography>
            </Container>
          </Grid>
          <Grid item className={classes.grid_right} lg={6} md={6} xs={12}>
            <Container className={classes.text_container_2}>
              <Typography className={classes.text_heading_sec_2} variant="h3">
                Never be disappointed. Ever.
              </Typography>
              <Typography className={classes.text_body_sec_2} variant="h6">
                You will find only real beautiful men and women.
                <br />
                <span style={{ color: "#FF9700", fontWeight: "400" }}>
                  No fakes. No bots.
                </span>{" "}
                We verfiy and screen ech of our users.
              </Typography>
            </Container>
            <Container className={classes.img_container_sec_2}>
              <img className={classes.image} src={img_4} alt="img 2" />
            </Container>
          </Grid>
        </Grid>

        <Container className={classes.section_2_header}>
          <Typography className={classes.text_heading} variant="h3">
            There's always someone for you.
          </Typography>
          <Typography className={classes.text_heading_2} variant="h2">
            Everywhere. Everytime.
          </Typography>
          <Typography
            style={{ width: "80%", margin: "20px auto" }}
            className={classes.text_body}
            variant="h6"
          >
            Amazing experiences await you anytime you choose. Form around the
            world.
            <br />
            <span style={{ color: "#A31100", fontWeight: "400" }}>
              Find What make you happiest.
            </span>{" "}
            Meet instantly, without ever waiting for your turn.
          </Typography>
        </Container>

        <Box className={classes.carousel_container}>
          <Grid container>
            <Grid item md={1} xs={0} sm={0} lg={1}></Grid>
            <Grid
              item
              sm={2}
              xs={0}
              md={3}
              lg={3}
              className={classes.carousel_left_container}
            >
              <img
                src={carouselImage[0]}
                className={classes.carousel_left}
              ></img>
            </Grid>
            <Grid
              item
              sm={12}
              xs={12}
              md={4}
              lg={4}
              className={classes.carousel_active_container}
            >
              <img
                src={carouselImage[1]}
                className={classes.carousel_active}
              ></img>
              <img src={carousel_bg} className={classes.carousel_iphone}></img>

              <Box className={classes.carousel_nav_icons_container}>
                <IconButton
                  onClick={carousel_move_left}
                  className={classes.carousel_nav_icon_btn}
                >
                  <KeyboardArrowLeft className={classes.carousel_nav_icon} />
                </IconButton>
                <IconButton
                  onClick={carousel_move_right}
                  className={classes.carousel_nav_icon_btn}
                >
                  <KeyboardArrowRight className={classes.carousel_nav_icon} />
                </IconButton>
              </Box>
            </Grid>
            <Grid
              item
              sm={2}
              xs={0}
              md={3}
              lg={3}
              className={classes.carousel_right_container}
            >
              <img
                src={carouselImage[2]}
                className={classes.carousel_right}
              ></img>
            </Grid>
            <Grid item md={1} xs={0} sm={0} lg={1}></Grid>
          </Grid>
        </Box>

        <Box style={{ width: "90%", margin: "10px auto" }}>
          <hr style={{ borderColor: "#6C6C6C" }} />
        </Box>

        <Container className={classes.footer}>
          <Typography style={{ color: "#BDBCBC" }} variant="body1">
            &#169; 2023 company inc.
            <br />
            Privacy Policy
          </Typography>
          <Box>
            <IconButton
              style={{
                backgroundColor: "#ffffff",
                color: "#1E1D1D",
                marginRight: "10px",
              }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              style={{
                backgroundColor: "#ffffff",
                color: "#1E1D1D",
                marginRight: "10px",
              }}
            >
              <YouTube />
            </IconButton>
          </Box>
        </Container>
      </div>

      <Box className={classes.static_bg}></Box>
      <Container className={classes.floating_btn}>
        <img src={logo} className={classes.logo_flame}></img>
        <Box className={classes.floating_btn_text}>
          <Typography variant="h6">Flame</Typography>
          <Typography variant="body2">Current Online Users: 25542</Typography>
        </Box>
        <Link to="/user/authentication" style={{ textDecoration: "none" }}>
          <Button
            className={classes.free_trial_btn}
            variant="contained"
            onClick={handleButtonClick}
          >
            Sign UP / Login
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default index;
