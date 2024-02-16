/* eslint-disable react-hooks/rules-of-hooks */
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Autocomplete,
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import Img from "../../Assets/images/image.svg";
import ProfileImage from "../../Assets/images/male.jpg";
import video2 from "../../Assets/images/video2.svg";

import { post } from "../../Services/api";
import { getProfile } from "../../Services/store/authSlice";
import useStyles from "./profileStyle";

const gridStyle = {
  padding: "10px 20px",
  gap: "15px 25px",
  maxWidth: { xs: "100%", sm: "90%" },
  justifyContent: "center",
  display: "flex",
};

const gridContainer = {
  padding: " 10px 20px",
  gap: "25px",
  maxWidth: { xs: "100%", sm: "90%" },
  justifyContent: "space-between",
  display: "flex",
};

const ProfileForm = () => {
  const { id } = useParams();
  const { userData, role, mood, region } = useSelector((state) => state.auth);
  const classes = useStyles();
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const [images, setImages] = useState([]);
  const [fileError, setFileError] = useState('');
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  console.log("qqqqqqqqqqqqqqq", userData);
  const [profile, setProfile] = useState({
    profileImage: userData?.profileImage ?? "",
    profileImage1: userData?.profileImage1 ?? "",
    profileImage2: userData?.profileImage2 ?? "",
    displayName: userData?.displayName ?? "",
    like: userData?.like ?? "",
    unlike: userData?.unlike ?? "",
    region: userData?.region ?? "",
    about: userData?.about ?? "",
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
  const handleImageChange = async (event, url) => {
    const file = event.target.files[0];
    try {
      if (file && file.size <= 1 * 1024 * 1024) {
      }
      if (
        file &&
        file.type.split("/")[0] == "video" &&
        file.size <= 20 * 1024 * 1024
      ) {
      }
      const formData = new FormData();
      formData.append(event.target.name, file);
      formData.append("userID", userData.id);
      const res = await post(`/${url}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.data) {
        dispatch(getProfile({ id: userData.id }));
      }
    } catch (error) {
      console.log(error);
    }
    // const selectedImages = Array.from(event.target.files);
    // console.log(selectedImages);
    // setProfile((prevProfile) => ({
    //   ...prevProfile,
    //   images: [...prevProfile.images, ...selectedImages],
    // }));
  };

  const confirmSubmit = async () => {
    delete profile.profileImage;
    delete profile.profileImage1;
    delete profile.profileImage2;
    console.log("confirm", profile);
    try {
      const res = await post("/updateUserMeta", {
        userID: userData.id,
        ...profile,
      });
      if (res) {
        dispatch(getProfile({ id: userData.id }));
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
  const progressValue = calculatePercentage();
  return (
    <>
      <Grid container sx={gridContainer}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "self-start",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "20px", sm: 0 },
          }}
        >
          <Box className={classes.single_image_circle}>
            {/* <CircularProgress variant="determinate" value={75} /> */}

            <div style={{ position: "relative", width: 100, height: 100 }}>
              <Typography variant="paragraph" className={classes.percentage}>
                {calculatePercentage()}%
              </Typography>
              {status && (
                <img
                  src={
                    profile.profileImage
                      ? `https://theflame.life/livebk/public/uploads/${profile.profileImage}`
                      : ProfileImage
                  }
                  // src={ProfileImage}
                  alt={`Image`}
                  className={classes.single_image}
                />
              )}
              {/* CircularProgress for the remaining area */}
              <CircularProgress
                variant="determinate"
                value={100} // Value set to 100 for the full circle
                size={110}
                thickness={1}
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
                thickness={1}
                sx={{
                  color: (theme) =>
                    progressValue <= 50 ? "#FB1F43" : "#FB1F43", // Color for the progress area
                  position: "absolute",
                }}
              />
              {!status && (
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
                        name="image"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, "upload")}
                        style={{ display: "none" }}
                      />
                    </Grid>
                    <label
                      htmlFor="additionalImages"
                      style={{ cursor: "pointer" }}
                    >
                      <Box className={classes.single_image}>
                        <Typography variant="h6" className={classes.body_text}>
                          Upload a picture
                        </Typography>
                      </Box>
                    </label>
                  </>
                </Grid>
              )}
            </div>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              maxWidth: "400px",
              flexDirection: "column",
              margin: { xs: "20px 0px", sm: 0 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "12px",
              }}
            >
              <Typography variant="paragraph" className={classes.heading}>
                upload
              </Typography>
              <Typography variant="paragraph" className={classes.subHeading}>
                Upto 2 images &lt; 1mb each 1 video &lt; 20 mb
              </Typography>
            </Box>
            {!isSmallScreen && (
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
                    position: "relative",
                    // background: "red",
                  }}
                >
                  <img
                    src={
                      profile.profileImage1
                        ? `https://theflame.life/livebk/public/uploads/${profile.profileImage1}`
                        : Img
                    }
                    width="100%"
                    height="90px"
                  />
                  {!status && (
                    <label htmlFor="image1" style={{ cursor: "pointer" }}>
                      <Box className={classes.images}>
                        <Typography variant="h6" className={classes.body_text}>
                          Upload a picture
                        </Typography>
                      </Box>
                    </label>
                  )}
                </Box>
                <input
                  type="file"
                  id="image1"
                  name="image"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, "upload1")}
                  style={{ display: "none" }}
                />

                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "90px",
                    height: "90px",
                    position: "relative",
                    // background: "red",
                  }}
                >
                  <img
                    src={
                      profile.profileImage2
                        ? `https://theflame.life/livebk/public/uploads/${profile.profileImage2}`
                        : Img
                    }
                    width="100%"
                    height="90px"
                  />
                  {!status && (
                    <label htmlFor="image2" style={{ cursor: "pointer" }}>
                      <Box className={classes.images}>
                        <Typography variant="h6" className={classes.body_text}>
                          Upload a picture
                        </Typography>
                      </Box>
                    </label>
                  )}
                </Box>
                <input
                  type="file"
                  id="image2"
                  name="image"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, "upload2")}
                  style={{ display: "none" }}
                />
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "138px",
                    // minWidth: "138px",
                    height: "90px",
                    position: "relative",
                    // background: "red",
                  }}
                >
                  <img src={video2} width="100%" height="90px" />
                  {!status && (
                    <label htmlFor="video" style={{ cursor: "pointer" }}>
                      <Box className={classes.images}>
                        <Typography variant="h6" className={classes.body_text}>
                          Upload a picture
                        </Typography>
                      </Box>
                    </label>
                  )}
                </Box>
                <input
                  type="file"
                  id="video"
                  name="video"
                  accept="video/*"
                  onChange={(e) => handleImageChange(e, "uploadvideo")}
                  style={{ display: "none" }}
                />
              </Box>
            )}

            {isSmallScreen && (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    flex: "1 1 calc(50% - 5px)", // Adjust this width based on your layout needs
                    maxWidth: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <img
                    src={Img}
                    alt="img"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <img
                    src={Img}
                    alt="img"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    flex: "1 1 calc(50% - 5px)", // Adjust this width based on your layout needs
                    maxWidth: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={video2}
                    alt="img"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "100%",
                      maxWidth: "none",
                    }}
                  />
                </Box>
              </Box>
            )}
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
          <Typography variant="h5" className={classes.label}>
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
            disabled={status}
          />
        </Grid>
        <Grid item xs={12} md={5.5}>
          <Typography variant="h5" className={classes.label}>
            Region
          </Typography>
          <TextField
            type="text"
            name="region"
            onChange={handleInputChange}
            value={profile.region}
            placeholder="your text"
            className={classes.input1}
            fullWidth
            disabled={status}
          />
        </Grid>
        <Grid item xs={12} md={11.5}>
          <Typography variant="h5" className={classes.label}>
            About you
          </Typography>
          <textarea
            placeholder="Label Placeholder"
            name="currentaddress"
            className={classes.placeholderStyle}
            disabled={status}
            name="about"
            value={profile?.about}
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
          <Typography variant="h5" className={classes.label}>
            Three things you love
          </Typography>
          <Autocomplete
            multiple
            onChange={handleInputChange}
            id="tags-filled"
            // options={top100Films.map((option) => option.title)}
            // defaultValue={[top100Films[13].title]}
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip variant="outlined" label={option} {...getTagProps({ index })} />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                name="like"
                variant="filled"
                label="freeSolo"
                placeholder="Favorites"
              />
            )}
          />
          <TextField
            type="text"
            name="like"
            onChange={handleInputChange}
            value={profile.like}
            // placeholder="What do you do?"
            className={classes.input1}
            fullWidth
            disabled={status}
          />
        </Grid>
        <Grid item xs={12} md={5.5}>
          <Typography variant="h5" className={classes.label}>
            Three things that you hate
          </Typography>
          <TextField
            type="text"
            name="unlike"
            onChange={handleInputChange}
            value={profile.unlike}
            // placeholder="What do you like in a partner?"
            className={classes.input1}
            fullWidth
            disabled={status}
          />
        </Grid>
        <Grid item sx={{ width: "100%" }}>
          <Box
            sx={{ width: "100%", justifyContent: "center", display: "flex" }}
          >
            <Button
              onClick={() => {
                setStatus(!status)
                if(!status){
                confirmSubmit()

                }
                }}
              variant="contained"
              type="submit"
              className={classes.btn1}
            >
              {status ? "Edit Profile" : "Save Profile"}
            </Button>
          </Box>
        </Grid>
        {/* <Container className={classes.container}>
          <Container className={classes.box_inner}>
            <Box className={classes.box_left}> 
              <Box className={classes.image_container}>
                {profile?.profileImage ? (
                  <Box className={classes.single_image}>
                    <img
                      src={`https://theflame.life/livebk/public/uploads/${profile.profileImage}`}
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
