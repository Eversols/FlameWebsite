/* eslint-disable react-hooks/rules-of-hooks */
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  CircularProgress,
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
  padding: "10px 20px",
  gap: "15px 25px",
  maxWidth: "600px",
  justifyContent: "center",
  display: "flex",
};

const gridContainer = {
  padding: " 10px 20px",
  gap: "25px",
  maxWidth: "600px",
  justifyContent: "space-between",
  display: "flex",
};

const ProfileForm = () => {
  const { id } = useParams();
  const { userData, role, mood, region } = useSelector((state) => state.auth);
  const classes = useStyles();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const progressValue = 50;
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
      <Grid container sx={gridContainer}>
        <Box sx={{ display: "flex", width: "100%", alignItems: "self-start" }}>
          <Box className={classes.single_image_circle}>
            {/* <CircularProgress variant="determinate" value={75} /> */}

            <div style={{ position: "relative", width: 100, height: 100 }}>
              <Typography variant="paragraph" className={classes.percentage}>
                {calculatePercentage()}%
              </Typography>
              <img
                // src={`https://flame.bilalrugs.pk/livebk/public/uploads/${profile.profileImage}`}
                src={ProfileImage}
                alt={`Image`}
                className={classes.single_image}
              />
              {/* CircularProgress for the remaining area */}
              <CircularProgress
                variant="determinate"
                value={100} // Value set to 100 for the full circle
                size={110}
                thickness={1.5}
                sx={{
                  color: "#DADEE6", // Color for the circular track
                  position: "absolute",
                  opacity: 0.3, // Adjust opacity to suit your design
                }}
              />

              {/* CircularProgress for the progress */}
              <CircularProgress
                variant="determinate"
                value={progressValue}
                size={110}
                thickness={1.7}
                sx={{
                  color: (theme) =>
                    progressValue <= 50 ? " #FB1F43" : " #DADEE6", // Color for the progress area
                  position: "absolute",
                }}
              />
            </div>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              maxWidth: "400px",
              flexDirection: "column",
            }}
          >
            <Typography variant="paragraph" sx={{ fontWeight: 900 }}>
              upload
            </Typography>
            <Typography variant="paragraph" sx={{ marginBottom: "15px" }}>
              Upto 2 images &lt; 1mb each 1 video &lt; 20 mb
            </Typography>

            <Box
              sx={{
                display: "flex",
                width: "95%",
                gap: "10px",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "90px",
                  height: "90px",
                  background: "red",
                }}
              ></Box>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "90px",
                  height: "90px",
                  background: "red",
                }}
              ></Box>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "130px",
                  height: "90px",
                  background: "red",
                }}
              ></Box>
            </Box>
          </Box>
        </Box>
      </Grid>

      <Grid
        container
        // spacing={{ xs: 2, md: 3 }}
        // columns={{ xs: 4, sm: 8, md: 12 }}
        sx={gridStyle}
      >
        <Grid item xs={12} md={5.5}>
          <Typography variant="h5" className={classes.heading}>
            Screen Name
          </Typography>
          <TextField
            type="text"
            name="displayName"
            onChange={handleInputChange}
            value={profile.displayName}
            placeholder="your text"
            className={classes.input1}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={5.5}>
          <Typography variant="h5" className={classes.heading}>
            Region
          </Typography>
          <TextField
            type="text"
            name="language"
            onChange={handleInputChange}
            value={profile.language}
            placeholder="your text"
            className={classes.input1}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={11.5}>
          <Typography variant="h5" className={classes.heading}>
            About you
          </Typography>
          <textarea
            placeholder="Label Placeholder"
            name="currentaddress"
            className={classes.placeholderStyle}
            // value={values.currentaddress || ""}
            // onChange={handleChange}
            style={{
              width: "100%",
              height: "90px",
              resize: "none",
              padding: "11.5px 0px 11.5px 12px",
              border: "none",
              borderRadius: "6px",

              backgroundColor: "#F2F2F2",
              color: "#828282",
              fontSize: "14px",
              fontWeight: 400,
              // fontFamily: "inherit",
              // background: !edit && !add ? "white" : "white",
              outline: "none",
              // color:
              //   !edit && !add ? "rgba(141, 141, 141, 141)" : "rgba(0, 0, 0, 1)",
            }}
          />
        </Grid>
        <Grid item xs={12} md={5.5}>
          <Typography variant="h5" className={classes.heading}>
            Three things you love
          </Typography>
          <TextField
            type="text"
            name="profession"
            onChange={handleInputChange}
            value={profile.profession}
            // placeholder="What do you do?"
            className={classes.input1}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={5.5}>
          <Typography variant="h5" className={classes.heading}>
            Three things that you hate
          </Typography>
          <TextField
            type="text"
            name="like"
            onChange={handleInputChange}
            value={profile.like}
            // placeholder="What do you like in a partner?"
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
