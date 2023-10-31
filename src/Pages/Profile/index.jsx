/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import useStyles from "./style";
import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getProfile } from "../../Services/store/authSlice";
import { post } from "../../Services/api";
import { useParams } from "react-router-dom";

const index = () => {
  const { id } = useParams();
  const { userData, role, mood, region } = useSelector((state) => state.auth);
  const classes = useStyles();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  //   console.log('qqqqqqqqqqqqqqq',userData)
  const [profile, setProfile] = useState({
    profileImage: userData?.profileImage ?? "",
    displayName: userData?.displayName ?? "",
    language: userData?.language ?? "",
    age: userData?.age ?? "",
    profession: userData?.profession ?? "",
    like: userData?.like ?? "",
    dislike: userData?.dislike ?? "",
    outsideWork: userData?.outsideWork ?? "",
  });
  console.log("qqqqqqqqqqqqqqq", profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile({ id: userData.id }));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };
  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("userID", userData.id);
      const res = await post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.data) {
        dispatch(getProfile({ id: userData.id }));
      }
    }
    // const selectedImages = Array.from(event.target.files);
    // console.log(selectedImages);
    // setProfile((prevProfile) => ({
    //   ...prevProfile,
    //   images: [...prevProfile.images, ...selectedImages],
    // }));
  };

  const confirmSubmit = async () => {
    delete profile.images;
    console.log("confirm", profile);
    try {
      const res = await post("/updateUserMeta", {
        userID: userData.id,
        ...profile,
      });
      if (res) {
        dispatch(getProfile({ id: userData.id }));
      }
      if (!id) {
        if (!mood) navigate(`/${role}/mood`);
        else if (!region) navigate(`/${role}/region`);
        else navigate(`/${role}/home`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const calculatePercentage = () => {
    const totalFields = Object.keys(profile).length;
    const filledFields = Object.values(profile).filter(
      (value) => value !== ""
    ).length;
    const percentage = (filledFields / totalFields) * 100;
    return Math.round(percentage);
  };
  return (
    <>
      {id && (
        <Box
          sx={{ height: "92%", marginLeft: "12px", cursor: "pointer" }}
          onClick={() => navigate(`/${role}/home`)}
        >
          <ArrowBackIcon color="black" />
        </Box>
      )}
      <Container className={classes.container}>
        <Typography variant="h4" className={classes.heading}>
          Your profile
        </Typography>
        <Container className={classes.box_inner}>
          <Box className={classes.box_left}>
            <Box className={classes.image_container}>
              {profile?.profileImage ? (
                <Box className={classes.single_image}>
                  <img
                    src={`https://flame.bilalrugs.pk/livebk/public/uploads/${profile.profileImage}`}
                    alt={`Image`}
                    className={classes.single_image}
                  />
                </Box>
              ) : (
                <>
                  <input
                    type="file"
                    id="additionalImages"
                    name="images"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                  <label htmlFor="additionalImages">
                    <Box className={classes.single_image}>
                      <Typography variant="h6" className={classes.body_text}>
                        Upload a picture
                      </Typography>
                    </Box>
                  </label>
                </>
              )}
            </Box>
            {id ? (
              <Button
                type="submit"
                onClick={confirmSubmit}
                variant="contained"
                className={classes.btn}
              >
                Update
              </Button>
            ) : (
              <Button
                type="submit"
                onClick={confirmSubmit}
                variant="contained"
                className={classes.btn}
              >
                next
              </Button>
            )}
          </Box>
          <Container className={classes.box_mid}>
            <Typography variant="paragraph" className={classes.percentage}>
              {calculatePercentage()}%
            </Typography>
            <Box className={classes.box_midInner}>
              <Box
                className={classes.progress}
                sx={{ height: `${calculatePercentage()}%` }}
              ></Box>
            </Box>
          </Container>
          <Box className={classes.box_right}>
            <input
              type="text"
              name="displayName"
              value={profile.displayName}
              placeholder="Enter screen name"
              className={classes.input}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="language"
              value={profile.language}
              placeholder="Select your language"
              className={classes.input}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="age"
              value={profile.age}
              placeholder="How old are you?"
              className={classes.input}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="profession"
              value={profile.profession}
              placeholder="What do you do?"
              className={classes.input}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="like"
              value={profile.like}
              placeholder="What do you like in a partner?"
              className={classes.input}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="dislike"
              value={profile.dislike}
              placeholder="What do you dislike in a parnter?"
              className={classes.input}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="outsideWork"
              value={profile.outsideWork}
              placeholder="What do you like to do outside work?"
              className={classes.input}
              onChange={handleInputChange}
            />
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default index;
