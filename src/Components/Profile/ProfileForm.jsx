/* eslint-disable react-hooks/rules-of-hooks */
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ProfileImage from "../../Assets/images/male.jpg";
import ProfileModal from "../../Components/Profile/ProfileModal";
import { post } from "../../Services/api";
import { getProfile } from "../../Services/store/authSlice";
import useStyles from "./profileStyle";

const gridStyle = {
  padding: "10px",
  gap: "25px",
  maxWidth: "550px",
  justifyContent: "center",
  display: "flex",
};

const ProfileForm = () => {
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
      <Grid container sx={gridStyle}>
        <Grid item xs={12} md={4}>
          <Box className={classes.single_image_circle}>
            <img
              // src={`https://flame.bilalrugs.pk/livebk/public/uploads/${profile.profileImage}`}
              src={ProfileImage}
              alt={`Image`}
              className={classes.single_image}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </Grid>
      </Grid>

      <Grid
        container
        // spacing={{ xs: 2, md: 3 }}
        // columns={{ xs: 4, sm: 8, md: 12 }}
        sx={gridStyle}
      >
        <Grid item xs={12} md={5.5}>
          <Typography variant="h5" className={classes.heading}>
            Ready to find your next?
          </Typography>
          <TextField
            type="text"
            name="displayName"
            onChange={handleInputChange}
            value={profile.displayName}
            placeholder="Enter screen name"
            className={classes.input1}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={5.5}>
          <Typography variant="h5" className={classes.heading}>
            Ready to find your next?
          </Typography>
          <TextField
            type="text"
            name="language"
            onChange={handleInputChange}
            value={profile.language}
            placeholder="Select your language"
            className={classes.input1}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={11.5}>
          <Typography variant="h5" className={classes.heading}>
            Ready to find your next?
          </Typography>
          <TextField
            type="text"
            name="age"
            onChange={handleInputChange}
            value={profile.age}
            placeholder="How old are you?"
            className={classes.input1}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={5.5}>
          <Typography variant="h5" className={classes.heading}>
            Ready to find your next?
          </Typography>
          <TextField
            type="text"
            name="profession"
            onChange={handleInputChange}
            value={profile.profession}
            placeholder="What do you do?"
            className={classes.input1}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={5.5}>
          <Typography variant="h5" className={classes.heading}>
            Ready to find your next?
          </Typography>
          <TextField
            type="text"
            name="like"
            onChange={handleInputChange}
            value={profile.like}
            placeholder="What do you like in a partner?"
            className={classes.input1}
            fullWidth
          />
        </Grid>
        {/* <Container className={classes.container}>
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
                  <Grid
                    container
                    className={classes.gridStyle}
                    // spacing={{ xs: 2, md: 3 }}
                    // columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    <>
                      <Grid item xs={6} md={4}>
                        <input
                          type="file"
                          id="additionalImages"
                          name="images"
                          accept="image/*"
                          onChange={handleImageChange}
                          style={{ display: "none" }}
                        />
                      </Grid>
                      <label htmlFor="additionalImages">
                        <Box className={classes.single_image}>
                          <Typography
                            variant="h6"
                            className={classes.body_text}
                          >
                            Upload a picture
                          </Typography>
                        </Box>
                      </label>
                    </>
                  </Grid>
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
          </Container>
        </Container>{" "}
        */}
      </Grid>
    </>
  );
};

export default ProfileForm;
