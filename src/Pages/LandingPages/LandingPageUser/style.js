import { makeStyles } from "@mui/styles";
import bg_image from "../../../Assets/images/page_1_bg.png";
import static_bg_img from "../../../Assets/images/page_2_A_background.png";

const useStyles = makeStyles((theme) => ({
  root: {
    // Replace 'your-image-url' with the URL of your background image
    // backgroundImage: `url(${static_bg_img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  container: {
    overflowY: "auto", // Add overflow to make content scrollable
  },
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.2em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 1px rgba(0,0,0,1)",
      backgroundColor: "black",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#da3200",
      borderRadius: "5px",
    },
  },
  body: {
    fontFamily: "Inter, sans-serif",
    backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.6) ,rgba(0,0,0,1)),url(${bg_image})`,
    height: "100vh",
    maxHeight: "1280px",
    maxWidth: "1920px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      minheight: "100%",
      paddingBottom: theme.spacing(5),
    },
  },
  header_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: theme.spacing(5),
  },
  head: {
    width: "60%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      justifyContent: "center",
    },
  },
  current_user_container: {
    width: "40%",
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  page_body: {
    marginTop: theme.spacing(20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  page_body_text: {
    wordSpacing: "1px",
    fontFamily: "Inter, sans-serif",
    width: "80%",
    textAlign: "center",
    letterSpacing: "1px",
    marginTop: theme.spacing(5),
    fontWeight: "100",
    color: "#cecece",
    animation: `$popup 700ms ${theme.transitions.easing.easeInOut}`,

    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      width: "70%",
    },
  },
  heading_primary_text: {
    fontSize: "60pt",
    fontFamily: "Inter, sans-serif",
    fontWeight: "bold",
    color: "#ffffff",
    animation: `$popup 600ms ${theme.transitions.easing.easeInOut}`,

    [theme.breakpoints.down("sm")]: {
      fontSize: "45px",
      textAlign: "center",
    },
  },
  page_heading_text: {
    fontSize: "60pt",
    fontFamily: "Inter, sans-serif",
    fontWeight: "bold",
    width: "fit-content",
    color: "#ffffff",
    animation: `$popup 500ms ${theme.transitions.easing.easeInOut}`,

    [theme.breakpoints.down("sm")]: {
      fontSize: "45px",
      textAlign: "center",
    },
  },
  body1: {
    maxHeight: "1280px",
    maxWidth: "1920px",
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: "Inter, sans-serif",
    backgroundColor: "rgba(0,0,0,0)",

    width: "100%",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  grid_body: {
    color: "#ffffff",
    textAlign: "center",
  },
  grid_left: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      textAlign: "left",
    },
  },
  grid_right: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "right",
    [theme.breakpoints.down("md")]: {
      textAlign: "right",
    },
  },
  img_container: {
    textAlign: "center",
  },
  img_container_sec_1: {
    textAlign: "center",
    paddingLeft: theme.spacing(26),
    animation: `$popup 300ms ${theme.transitions.easing.easeInOut}`,

    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(0),
    },
  },
  img_container_sec_2: {
    textAlign: "center",
    paddingRight: theme.spacing(28),
    animation: `$popup 600ms ${theme.transitions.easing.easeInOut}`,

    [theme.breakpoints.down("md")]: {
      paddingRight: theme.spacing(0),
      fontSize: "15px",
    },
  },
  text_container_1: {
    fontFamily: "Inter, sans-serif",
    width: "85%",
    marginTop: theme.spacing(2),
  },
  text_container_2: {
    fontFamily: "Inter, sans-serif",
    width: "85%",
    marginTop: theme.spacing(2),
  },
  image: {
    width: "60%",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  text_heading: {
    fontWeight: "bold",
    fontFamily: "Inter, sans-serif",
    animation: `$popup 400ms ${theme.transitions.easing.easeInOut}`,

    [theme.breakpoints.down("md")]: {
      fontSize: "35px",
    },
  },
  text_heading_sec_1: {
    fontWeight: "bold",
    fontFamily: "Inter, sans-serif",
    paddingLeft: theme.spacing(25),
    [theme.breakpoints.down("md")]: {
      fontSize: "35px",
      paddingLeft: theme.spacing(0),
    },
  },
  text_heading_sec_2: {
    fontWeight: "bold",
    fontFamily: "Intert, sans-serif",
    animation: `$popup 700ms ${theme.transitions.easing.easeInOut}`,

    paddingRight: theme.spacing(30),
    [theme.breakpoints.down("md")]: {
      fontSize: "35px",
      paddingRight: theme.spacing(0),
    },
  },
  text_heading_2: {
    fontWeight: "bold",
    fontFamily: "Inter, sans-serif",
    animation: `$popup 600ms ${theme.transitions.easing.easeInOut}`,

    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
    },
  },
  text_body: {
    fontFamily: "Inter, sans-serif",
    fontWeight: "100",
    color: "#cecece",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
    },
  },
  text_body_sec_1: {
    fontFamily: "Inter, sans-serif",
    animation: `$popup 700ms ${theme.transitions.easing.easeInOut}`,

    fontWeight: "100",
    color: "#cecece",
    paddingLeft: theme.spacing(25),
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      paddingLeft: theme.spacing(0),
    },
  },
  text_body_sec_2: {
    fontFamily: "Inter, sans-serif",
    animation: `$popup 600ms ${theme.transitions.easing.easeInOut}`,

    fontWeight: "100",
    color: "#cecece",
    paddingRight: theme.spacing(29),
    [theme.breakpoints.down("md")]: {
      paddingRight: theme.spacing(0),
      fontSize: "15px",
    },
  },
  section_2_header: {
    textAlign: "center",
    fontFamily: "Inter, sans-serif",
    fontWeight: "bold",
    width: "100%",
    height: "100%",
    marginTop: theme.spacing(10),
    color: "#ffffff",
    animation: `$popup 400ms ${theme.transitions.easing.easeInOut}`,
  },
  carousel: {
    width: "50%",
  },

  footer: {
    width: "100%",
    padding: "10px 30px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    animation: `$popup 300ms ${theme.transitions.easing.easeInOut}`,
  },

  // Carousel Left Styling
  carousel_left: {
    width: "300px",
    height: "500px",
    opacity: "0.6",
    zIndex: "-1",
    animation: `$fade 300ms ${theme.transitions.easing.easeInOut}`,

    [theme.breakpoints.between("md")]: {
      width: "150px",
      height: "400px",
    },

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  carousel_left_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "end",
    [theme.breakpoints.between("md", "sm")]: {
      justifyContent: "end",
    },
  },
  //    --------------------

  // Carousel Right Styling
  carousel_right: {
    width: "300px",
    height: "500px",
    opacity: "0.6",
    zIndex: "-1",
    animation: `$fade 300ms ${theme.transitions.easing.easeInOut}`,

    [theme.breakpoints.between("md", "sm")]: {
      width: "150px",
      height: "400px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  carousel_right_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    [theme.breakpoints.between("md", "sm")]: {
      justifyContent: "start",
    },
  },
  //    ----------------------

  // Carousel Active element Styling

  carousel_active: {
    width: "450px",
    height: "780px",
    borderRadius: "80px",
    position: "absolute",
    right: "0",
    left: "0",
    marginLeft: "auto",
    marginRight: "auto",
    animation: `$fade 300ms ${theme.transitions.easing.easeInOut}`,

    [theme.breakpoints.between("md", "sm")]: {
      width: "400px",
      height: "720px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "315px",
      height: "650px",
    },
  },
  carousel_active_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  carousel_iphone: {
    position: "absolute",
    right: "0",
    left: "0",
    marginLeft: "auto",
    marginRight: "auto",
    width: "450px",
    height: "800px",
    [theme.breakpoints.between("md", "sm")]: {
      width: "400px",
      height: "720px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "320px",
      height: "650px",
    },
  },
  //    --------------------------
  carousel_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "850px",
  },
  carousel_nav_icons_container: {
    position: "absolute",
    right: "0",
    left: "0",
    marginLeft: "auto",
    marginRight: "auto",
    width: "550px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.between("md", "sm")]: {
      width: "430px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "350px",
    },
  },
  carousel_nav_icon: {
    color: "white",
    fontSize: "100px",
    backgroundColor: "rgba(56,50,43,0.8)",
    borderRadius: "50px",
    [theme.breakpoints.between("md", "sm")]: {
      fontSize: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  },
  "@keyframes popup": {
    "0%": {
      transform: "scale(0.2)",
    },

    "100%": {
      transform: "scale(1)",
    },
  },
  "@keyframes fade": {
    "0%": {
      opacity: "10%",
    },

    "100%": {
      transform: "100%",
    },
  },

  page_content_container: {
    height: "80%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(5),
  },
  page_heading_text_container: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  text_anim_container: {
    width: "255px",
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      width: "150px",
    },
  },
  animation_wrapper: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
  },
  responsive_breaks: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  floating_btn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "50%",
    maxWidth: "500px",
    color: "#ffffff",
    backgroundColor: "rgba(0,0,0,1)",
    zIndex: "99999",
    borderRadius: "10px",
    position: "fixed",
    right: "30px",
    top: "20px",
    textAlign: "center",
    animation: `$float 5000ms infinite ${theme.transitions.easing.easeInOut}`,
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      right: "15px",
      top: "auto",
      bottom: "20px",
      backgroundColor: "rgba(0,0,0,0.7)",
      backdropFilter: "blur(5px)",
    },
  },
  logo_flame: {
    width: "8%",
  },
  floating_btn_text: {
    textAlign: "left",
    margin: "10px 10px",
  },
  free_trial_btn: {
    width: "152px",
    textAlign: "center",
    backgroundColor: "#0099dd",
    color: "#ffffff",
    borderRadius: "20px",
    "&:hover": {
      backgroundColor: "#0072A5",
    },
  },
  login_btn: {
    width: "100px",
    textAlign: "center",
    border: "2px solid",
    borderColor: "#0099dd",
    color: "#0099dd",
    borderRadius: "20px",
    marginLeft: theme.spacing(2),
    "&:hover": {
      borderColor: "#015e87",
    },
  },
  "@keyframes float": {
    "0%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-15px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  static_bg: {
    backgroundImage: `url(${static_bg_img})`,
    height: "100vh",
    width: "100vw",
    position: "fixed",
    top: "0px",
    right: "0px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: "-9999",
  },
}));

export default useStyles;
