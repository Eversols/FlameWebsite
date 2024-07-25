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
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import Img from "../../Assets/images/image.svg";
import ProfileImage from "../../Assets/images/male.jpg";
import video2 from "../../Assets/images/video2.svg";

import { get, post } from "../../Services/api";
import { getProfile, setLanguage, setProfileModel } from "../../Services/store/authSlice";
import useStyles from "./profileStyle";
import { countries, } from "../../Services/utils/country";
import us from '../../Assets/images/us.png';
import sp from '../../Assets/images/sp.png';
import fr from '../../Assets/images/fr.png';
import gr from '../../Assets/images/gr.png';
import ru from '../../Assets/images/ru.png';
import ch from '../../Assets/images/ch.png';
import { useTranslation } from "react-i18next";
import { LoadingButton } from "@mui/lab";

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


const languages = [
  { name: 'English (EN)', value: 'EN', flag: us },
  { name: 'Spanish (SP)', value: 'SP', flag: sp },
  { name: 'French (FR)', value: 'FR', flag: fr },
  { name: 'German (GR)', value: 'GR', flag: gr },
  { name: 'Russian (RU)', value: 'RU', flag: ru },
  { name: 'Chinese (CH)', value: 'CH', flag: ch },
];


const ProfileForm = ({ setDialog }) => {
  const { id } = useParams();
  const { userData, role, mood, region, siteMeta } = useSelector((state) => state.auth);
  const { pathname } = useLocation()

  const classes = useStyles();
  const [status, setStatus] = useState(true);
  const navigate = useNavigate();
  const theme = useTheme();
  const [images, setImages] = useState([]);
  const [fileError, setFileError] = useState("");
  const [error, setError] = useState("");
  const [loveList, setLoveList] = useState([]);
  const [hateList, setHateList] = useState([]);
  const [refferalList, setRefferalList] = useState([]);
  const [imageIsLoading, setImageIsLoading] = useState(false);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [loading, setLoading] = useState(false);

  const [profile, setProfile] = useState({
    profileImage: userData?.profileImage ?? "",
    profileImage1: userData?.profileImage1 ?? "",
    profileImage2: userData?.profileImage2 ?? "",
    video: userData?.video ?? "",
    displayName: userData?.displayName ?? "",
    like: userData?.like ? userData.like.split(", ") : [],
    unlike: userData?.unlike ? userData.unlike.split(", ") : [],
    region: userData?.region ?? "",
    about: userData?.about ?? "",
    referral_code: userData?.referral_code ?? "",
    language: userData?.language ?? "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname.includes('profile')) {
      setStatus(false)
    }
    setFileError("");
    if (userData?.id) {
      dispatch(getProfile({ id: userData.id }));
    }
    get('/hatelovethingsList').then((result) => {
      if (result?.data) {
        if (result.data.hateattributedata) {
          setHateList(result.data.hateattributedata.map((item) => ({ title: item.attribute_name, value: item.attribute_name })))
        }
        if (result.data.loveattributedata) {
          setLoveList(result.data.loveattributedata.map((item) => ({ title: item.attribute_name, value: item.attribute_name })))
        }
      }
    }).catch((error) => {

    })

    get('/getPartner', {}).then((result) => {
      if (result?.data?.data) {
        setRefferalList(result.data.data);
      }
    }).catch((error) => {

    })
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleAutoComplete = (name, value) => {
    // const { name, value } = event.target;
    // console.log('VVVVVVVVVVVVVVVVVVVVVVVVVV', name, value,)
    if (name && value) {
      if (profile[name].includes(`#${value}`)) return
      setProfile((prevProfile) => ({
        ...prevProfile,
        [name]:
          profile[name].length > 0
            ? [...profile[name], `#${value}`]
            : [`#${value}`],
      }));
    }
  };
  const handleImageChange = async (event, url) => {
    setImageIsLoading(true)
    setFileError("");
    const file = event.target.files[0];
    try {
      if (file && file.size >= (2.5 * 1024 * 1024)) {
        setFileError("File size should be less than 2.5 MB");
        setImageIsLoading(false)
        return;
      }
      if (
        file &&
        file.type.split("/")[0] == "video" &&
        file.size >= (10 * 1024 * 1024)
      ) {
        setFileError("File size should be less than 10 MB");
        setImageIsLoading(false)
        return;
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
        const profileData = await dispatch(getProfile({ id: userData.id }));
        if (profileData.payload) {
          setProfile({
            ...profile,
            profileImage: profileData.payload.data?.profileImage ?? "",
            profileImage1: profileData.payload.data?.profileImage1 ?? "",
            profileImage2: profileData.payload.data?.profileImage2 ?? "",
            video: profileData.payload.data?.video ?? "",
          });
          setImageIsLoading(false)
        }
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
    setLoading(true);
    setError('')
    let refferal
    // if (siteMeta.is_refferal_on_off == 'yes') {
    //   refferal = refferalList.find((item) => item.referral_code == profile.referral_code.trim())
    //   if (!refferal) {
    //     setError("Refferal code not found")
    //     return
    //   }
    // }
    delete profile.profileImage;
    delete profile.profileImage1;
    delete profile.profileImage2;
    console.log("confirm", profile);
    try {
      const res = await post("/updateUserMeta", {
        userID: userData.id,
        ...profile,
        like: profile.like.join(', '),
        unlike: profile.unlike.join(', '),
        referral_code: refferal?.id ?? '',
        // like: "",
        // unlike: "",
      });
      if (res) {
        const profileData = await dispatch(getProfile({ id: userData.id }));
        if (profileData.payload) {
          const { data, metadata } = profileData.payload

          setProfile({
            profileImage: data?.profileImage ?? "",
            profileImage1: data?.profileImage1 ?? "",
            profileImage2: data?.profileImage2 ?? "",
            video: data?.video ?? "",
            displayName: metadata?.displayName ?? "",
            like: metadata?.like ? metadata.like.split(", ") : [],
            unlike: metadata?.unlike ? metadata.unlike.split(", ") : [],
            region: metadata?.region ?? "",
            about: metadata?.about ?? "",
            language: metadata?.language ?? "",
          });
          metadata?.language && dispatch(setLanguage(metadata.language.toLowerCase()))
          if ((siteMeta.is_profile_complete == 'yes' && calculatePercentage() == 100)) {
            navigate(`/${role}/payout`);
          }
          setLoading(false);
        }
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await post(`/deleteProfile`, { userID: userData.id });
      if (res) {
        navigate('/')
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
                      ? `${profile.profileImage}`
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
              <img
                src={
                  profile.profileImage
                    ? `${profile.profileImage}`
                    : Img
                }
                width="108%"
                height="108%"
                style={{ borderRadius: "50%" }}
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
                          {imageIsLoading ? "Uploading..." : "Upload a picture"}
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
                Upload
              </Typography>
              <Typography variant="paragraph" className={classes.subHeading}>
                Upto 2 images &lt; 5mb each 1 video &lt; 10 mb
                <Box color={"red"}>{fileError}</Box>
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
                        ? `${profile.profileImage1}`
                        : Img
                    }
                    width="100%"
                    height="90px"
                  />
                  {!status && (
                    <label htmlFor="image1" style={{ cursor: "pointer" }}>
                      <Box className={classes.images}>
                        <Typography variant="h6" className={classes.body_text}>
                          {imageIsLoading ? "Uploading..." : "Upload a picture"}
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
                        ? `${profile.profileImage2}`
                        : Img
                    }
                    width="100%"
                    height="90px"
                  />
                  {!status && (
                    <label htmlFor="image2" style={{ cursor: "pointer" }}>
                      <Box className={classes.images}>
                        <Typography variant="h6" className={classes.body_text}>
                          {imageIsLoading ? "Uploading..." : "Upload a picture"}
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
                  <video src={video2} width="100%" height="90px" />
                  {!status && (
                    <label htmlFor="video" style={{ cursor: "pointer" }}>
                      <Box className={classes.images}>
                        <Typography variant="h6" className={classes.body_text}>
                          {imageIsLoading ? "Uploading..." : "Upload a video"}
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
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12} md={5.5}>
          <Typography variant="h5" className={classes.label}>
            Region
          </Typography>
          <Autocomplete
            id="country-select-demo"
            sx={{ width: 300 }}
            options={countries}
            value={countries.find((item)=> item.label === profile.region)}
            autoHighlight
            disabled={status}
            autoComplete="off"
            getOptionLabel={(option) => option.label}
            onChange={(event, value) => handleInputChange({ target: { name: "region", value: value.label } })}
            renderOption={(props, option) => (
              <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                <img
                  loading="lazy"
                  width="20"
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  alt=""
                />
                {option.label} ({option.code}) +{option.phone}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                // label="Choose a country"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password', // disable autocomplete and autofill
                }}
                value={profile.region}
                className={classes.input1}
                fullWidth
                disabled={status}
              />
            )}
          />
          {/* <TextField
            type="text"
            name="region"
            onChange={handleInputChange}
            value={profile.region}
            placeholder="your text"
            className={classes.input1}
            fullWidth
            disabled={status}
          /> */}
        </Grid>
        <Grid item xs={12} md={11.5}>
          <Typography variant="h5" className={classes.label}>
            About you
          </Typography>
          <TextField
            multiline
            rows={2}
            helperText={`${profile?.about.length}/200`}
            error={profile?.about.length >= 200}
            placeholder="About you"
            length={200}
            className={classes.placeholderStyle}
            disabled={status}
            autoComplete="off"
            name="about"
            value={profile?.about}
            // value={values.currentaddress || ""}
            onChange={handleInputChange}
            style={{
              width: "100%",
              height: "90px",
              resize: "none",
              padding: "0px 0px 0px 0px",
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

          {!status ?
            <Autocomplete
              multiple
              onChange={(e, v) => handleAutoComplete('like', v[v.length - 1]?.value)}
              id="tags-filled"
              value={profile.like}
              options={loveList.sort((a, b) => b.title - a.title)}
              autoComplete="off"
              // options={loveList.map((option) => option.title)}
              getOptionLabel={(option) => option.title}
              // defaultValue={[top100Films[13].title]}
              freeSolo
              // value={JSON.parse(profile.like)}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => {
                  return (
                    <Chip
                      variant="outlined"
                      label={option}
                      {...getTagProps({ index })}
                    />
                  )
                })
              }
              renderInput={(params) => {
                return (
                  <TextField
                    {...params}
                    name="like"
                    value={profile.like}
                    variant="filled"
                    label="like"
                  // placeholder="Favorites"
                  />
                );
              }}
            />
            :
            <TextField
              type="text"
              name="like"
              onChange={handleInputChange}
              value={profile.like.join('  ')}
              autoComplete="off"
              // placeholder="What do you do?"
              className={classes.input1}
              fullWidth
              disabled={status}
            />}
        </Grid>
        <Grid item xs={12} md={5.5}>
          <Typography variant="h5" className={classes.label}>
            Three things that you hate
          </Typography>
          {!status ? <Autocomplete
            multiple
            onChange={(e, v) => handleAutoComplete('unlike', v[v.length - 1]?.value)}
            id="tags-filled"
            value={profile.unlike}
            options={hateList.sort((a, b) => b.title - a.title)}
            autoComplete="off"
            // options={loveList.map((option) => option.title)}
            getOptionLabel={(option) => option.title}
            // defaultValue={[top100Films[13].title]}
            freeSolo
            // value={JSON.parse(profile.like)}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => {
                return (
                  <Chip
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                )
              })
            }
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  name="unlike"
                  autoComplete="off"
                  value={profile.unlike}
                  variant="filled"
                  label="unlike"
                // placeholder="Favorites"
                />
              );
            }}
          />
            :
            <TextField
              type="text"
              name="unlike"
              onChange={handleInputChange}
              value={profile.unlike.join('  ')}
              autoComplete="off"
              // placeholder="What do you like in a partner?"
              className={classes.input1}
              fullWidth
              disabled={status}
            />}


        </Grid>
        <Grid item xs={12} md={5.5}>
          <Typography variant="h5" className={classes.label}>
            Preferred Language
          </Typography>
          <Select
            name="language"
            id="demo-simple-select"
            value={profile.language}
            onChange={handleInputChange}
            autoComplete="off"
            className={classes.input1}
            fullWidth
            disabled={status}
          >
            {languages.map((language) => (
              <MenuItem
                key={language.value}
                value={language.value}
                disableRipple
              >
                <img
                  src={language.flag}
                  alt={`${language.name} flag`}
                  style={{ width: '20px', marginRight: '8px' }}
                />
                {language.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} md={5.5}>
          {(siteMeta.is_refferal_on_off == 'yes' && userData.isProfileComplete == '0') &&
            <>
              <Typography variant="h5" className={classes.label}>
                Referral Code
              </Typography>
              <TextField
                type="text"
                name="referral_code"
                onChange={handleInputChange}
                autoComplete="off"
                value={profile?.referral_code || ''}
                placeholder="Refferal Code"
                className={classes.input1}
                fullWidth
                disabled={status}
              />
              <Box color={"red"} sx={{ fontSize: 12 }}>{error}</Box>
            </>
          }
        </Grid>

        <Grid item sx={{ width: "100%" }}>
          <Box
            sx={{ width: "100%", justifyContent: "center", display: "flex", gap: "20px" }}
          >
            <LoadingButton
              onClick={() => {
                !pathname.includes('/profile') && setStatus(!status);
                if (!status) {
                  confirmSubmit();
                }
              }}
              loading={loading}
              loadingPosition="center"
              variant="contained"
              type="submit"
              className={classes.btn1}
            >
              {status ? "Edit Profile" : "Save Profile"}
            </LoadingButton>
            {!pathname.includes('/profile') && <Button
              onClick={() => { dispatch(setProfileModel(false)); setDialog({ open: true, description: 'Are you sure you want to delete your profile?', title: 'Delete Profile', action: () => handleDelete() }) }}
              variant="contained"
              type="submit"
              className={classes.btn1}
            >
              Delete Profile
            </Button>}
          </Box>
        </Grid>
        {/* <Container className={classes.container}>
          <Container className={classes.box_inner}>
            <Box className={classes.box_left}> 
              <Box className={classes.image_container}>
                {profile?.profileImage ? (
                  <Box className={classes.single_image}>
                    <img
                      src={`${profile.profileImage}`}
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
