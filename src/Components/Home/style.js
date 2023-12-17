import { makeStyles } from "@mui/styles";
import BackgroundGradient from "../../Assets/images/background_gradient.png";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    height: "100%",
    maxWidth: "1300px",
    borderRadius: "0px 0px 0px 0px",
    position: "absolute",
    backgroundColor: "white",
    top: "0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    // padding: "0px 92px",
    zIndex: 2,
    [theme.breakpoints.down("lg")]: {
      padding: "0 6px", // Set padding to 0 when screen width is below 1200px
    },
  },

  headermain: {
    width: "100%",
    height: "100%",
    maxHeight: "85px",
    borderRadius: "0px 0px 0px 0px",
    position: "absolute",
    backgroundColor: "white",
    top: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // padding: "0px 92px",
    zIndex: 2,
    [theme.breakpoints.down("sm")]: {
      boxShadow: "unset",
    },
  },

  marginHandler: {
    marginLeft: "16px",
    marginRight: "16px",
    [theme.breakpoints.down("lg")]: {
      marginLeft: "8px",
      marginRight: "8px", // Set padding to 0 when screen width is below 1200px
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "4px",
      marginRight: "4px", // Set padding to 0 when screen width is below 1200px
    },
  },

  fontadjust: {
    fontSize: "16px",

    [theme.breakpoints.down("lg")]: {
      fontSize: "14px",
    },
  },

  logo: {
    width: "100%",
    maxWidth: "150px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "125px", // Set padding to 0 when screen width is below 1200px
    },
  },

  drawer_logo: {
    width: "100%",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "125px",

      display: "flex",
    },
  },

  logout: {
    width: "17px",
    maxWidth: "150px",
  },
  online_indicator: {
    width: 10,
    height: 10,
    backgroundColor: "#68D391",
    border: "1px solid white",
    borderRadius: "50%",
  },
  offline_indicator: {
    width: 10,
    height: 10,
    backgroundColor: "#9A9A9A",
    border: "1px solid white",
    borderRadius: "50%",
  },
  header_left: {
    width: "5%",
    height: "100%",
    marginRight: "0%",
  },
  header_mid: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    flexDirection: "row",
    // boxShadow:
    //   "0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px 0px rgba(0, 0, 0, 0.14), 0px 4px 6px -1px rgba(0, 0, 0, 0.12)",

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  recharge_btn: {
    backgroundColor: "#FB1F43",
    color: "#ffffff",
    borderRadius: "24px",
    padding: "6px 14px 6px 14px",
    textTransform: "capitalize",
    [theme.breakpoints.down("md")]: {
      padding: "4px 12px",
    },
    "&:hover": {
      backgroundColor: "#dc697c",
    },
  },
  payout_btn: {
    // backgroundColor: "#FB1F43",
    color: "#868AA9",
    fontWeight: "500",
    lineHeight: "24px",
    border: "1px solid #868AA9",
    borderRadius: "24px",
    padding: "6px 14px 6px 14px",
    textTransform: "capitalize",
    [theme.breakpoints.down("md")]: {
      padding: "4px 12px",
    },
    "&:hover": {
      backgroundColor: "#dc697c",
    },
  },
  profile_icon: {
    width: "30px",
    height: "30px",
  },
  logout_button: {
    width: "5px",
  },
  logout_icon: {
    width: "30px",
    height: "30px",
  },
  header_right: {
    width: "5%",
    height: "100%",
    marginLeft: "0%",
  },
  window: {
    width: "100%",
    maxWidth: "509px",
    // border: "1px solid white",

    // maxHeight: "510px",

    position: "relative",
    // backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      // maxHeight: "410px",
      maxWidth: "100%",
    },

    [theme.breakpoints.down("sm")]: {
      maxHeight: "285px",
    },

    alignItems: "center",
    justifyContent: "space-around",


    "& .swiper-pagination-bullet": {
      width: "12px",
      height: "12px",
 
      background: "#3A41594D",


     
      opacity: .5,
      "&:not(:last-child)": {
        marginRight: "8px", // Adjust spacing between pagination bullets if needed
      },
      "&:hover": {
        background: "#3A41594D",
         // Adjust hover color for inactive bullets if necessary
      },
    },
    "& .swiper-pagination-bullet-active": {
  
      background: "#3A4159",

      "&:hover": {
        background: "#3A4159",
      },
    },



    
    "& .swiper-button-prev": {
      background: "transparent",
      padding: "1rem 1.2rem",
      borderRadius: "50%",
      fontSize: "14px",
      left: "auto", // Remove the left property
      right: "15%", // Add this property to move to the right side
      bottom: "8%",
      top: "auto",
      border: "2px solid #3A41594D",
      color: "#3A4159",
      "&:hover": {
        background: "transparent",
      },

      [theme.breakpoints.down("md")]: {
        left: "25%", // Remove the left property
        right: "auto", // Add this property to move to the right side
        bottom: 0,
      },
    },
    "& .swiper-button-next": {
      background: "transparent",
      padding: "1rem 1.2rem",
      borderRadius: "50%",
      fontSize: "14px",
      left: "auto", // Remove the left property
      right: "5%", // Add this property to move to the right side
      bottom: "8%",
      top: "auto",
      border: "2px solid #3A41594D",
      color: "#3A4159",
      "&:hover": {
        background: "transparent",
      },

      [theme.breakpoints.down("md")]: {
        left: "auto", // Remove the left property
        right: "25%", // Add this property to move to the right side
        bottom: 0,
      },
    },
    "& .swiper-button-prev:after": {
      fontSize: "1rem",
      color: "#3A4159",
    },
    "& .swiper-button-next:after": {
      fontSize: "1rem",
      color: "#3A4159",
    },
  },
  slide: {
    "&.swiper-slide.swiper-slide-active": {
      height: "365px",
    
      [theme.breakpoints.down("md")]: {
        height: "300px",
      },
      [theme.breakpoints.down("sm")]: {
        height: "250px",
      },
    },
  },
  img: {
    width: "100%",
    height: "inherit",
    borderRadius: "15px",
  },
  buttons: {
    width: "100%",
    position: "absolute",
    bottom: "18% ",
    left: 0,
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      bottom: "28%",
    },
  },
  phoneBtn: {
    padding: 12,
    background: theme.palette.secondary.main,
    color: "white",
    "&:hover": {
      background: theme.palette.secondary.light,
    },
  },
  videoBtn: {
    padding: 12,
    background: theme.palette.secondary.main,
    color: "white",
    "&:hover": {
      background: theme.palette.secondary.light,
    },
  },
  messageBtn: {
    padding: 12,
    background: "#ffff",
    color: "white",
    "&:hover": {
      background: "#FFFF",
    },
  },

  input1: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "10px",
        border: "1px solid #D8DADC",
      },

      "&:hover fieldset": {
        borderRadius: "10px",
        border: "1px solid #D8DADC",
      },
      "&.Mui-focused fieldset": {
        borderRadius: "10px",
        border: "1px solid #D8DADC",
        outline: "none",
      },
      "&.Mui-disabled fieldset": {
        borderRadius: "10px",
        border: "1px solid #D8DADC",
      },

      border: "none",
      borderRadius: "10px",
      backgroundColor:
        "linear-gradient(0deg, #D8DADC, #D8DADC), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
      color: "#00000080",
      width: "100%",
      height: "45px",
      "& .MuiOutlinedInput-input": {
        padding: "18px 16px 18px 16px",
        "&::placeholder": {
          color: "#00000080",
        },
      },
    },
  },
  paper: {
    maxWidth: 430,
    width: "100%",
    height: "75vh",
    bottom: "5%",
    right: "5%",
    overflow: "hidden",
    position: "fixed",
    background: "#ffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Inter, sans-serif",
    zIndex: 2,
    borderRadius: "24px",
    [theme.breakpoints.down("sm")]: {
      height: "93vh",
      top: "7%",
      bottom: "unset",
      maxWidth: "100%",
      right: "unset",
      borderRadius: "0px",
      boxShadow: "unset",
    },
    [theme.breakpoints.down("380")]: {
      height: "92vh",
      top: "8%",
      bottom: "unset",
      maxWidth: "100%",
      right: "unset",
      borderRadius: "0px",
      boxShadow: "unset",
    },
  },
  msg_window: {
    width: "100%",
    height: "100%",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  incoming_container: {
    height: "100%",
    overflow: "auto",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "12px",
    },
    "&::-webkit-scrollbar-track": {
      background: "rgba(255,255,255,0.2)",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "rgba(255,255,255,0.3)",
      borderRadius: "10px",
      height: "50%",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "rgba(255,255,255,1)",
    },
  },

  flexContainer: {
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      gap: "10px",
      justifyContent: "space-between",
    },
  },

  outgo_msg: {
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "end",
    marginTop: theme.spacing(2),
  },
  incoming_msg: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    marginTop: theme.spacing(2),
  },
  single_image: {
    width: "60px",
    height: "40px",
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: "200px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  single_chat_image: {
    width: "40px",
    height: "35px",
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  outgo_text_box: {
    width: "70%",
    height: "100%",
    marginLeft: "auto",
    marginRight: "10px",
    borderRadius: "10px",
    backgroundColor: "rgba(255,255,255,0.3)",
    textAlign: "left",
    padding: theme.spacing(1),
  },
  incoming_text_box: {
    width: "70%",
    height: "100%",
    marginLeft: "10px",
    marginRight: "auto",
    borderRadius: "10px",
    backgroundColor: "rgba(255,255,255,0.3)",
    textAlign: "left",
    padding: theme.spacing(1),
  },
  outgoing_text: {
    color: "rgba(0,0,0,0.4)",
    fontSize: "16px",
  },
  incoming_text: {
    color: "rgba(0,0,0,0.7)",
    fontSize: "16px",
  },
  outgoing_msg: {
    width: "100%",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "end",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  outgoing_text_box: {
    color: "black",
    width: "70%",
    height: "100%",
    marginLeft: "auto",
    marginRight: "10px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "rgba(255,255,255,0.3)",
    textAlign: "right",
    padding: theme.spacing(1),
    "&:focus": {
      outline: "none",
    },
  },
  box_single_user_history: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      maxWidth: "160px",
      minWidth: "155px",
    },
  },
  avatar_box: {
    display: "flex",
    alignItems: "start",
    justifyContent: "flex-start",
    gap: "10px",
    width: "100%",
  },
  history_name: {
    color: "black",
    fontSize: "14px",
    fontWeight: "bold",
  },
  history_lastseen: {
    color: "black",
    fontSize: "12px",
  },

  ideaImage: {
    width: "100%",
    maxWidth: "45px",
  },

  ideaIcon: {
    position: "fixed",
    bottom: 20,
    left: 20,
    background: "#ffff",
    height: "53px",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      left: "25%",
    },
  },
  history_actions: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
    width: "100%",
    maxWidth: "120px",
    marginTop: "2px",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      justifyContent: "center",
    },
  },

  chat_actions: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
    width: "100%",
    maxWidth: "93px",
    marginTop: "2px",
  },

  history_actions_btn: {
    width: "24px",
    height: "24px",
    backgroundColor: "#F0F0F0",
    // padding: "4px",
    borderRadius: "50%",
    textAlign: "center",
    marginRight: "3px",
  },
  history_actions_icons: {
    width: "12px",
    height: "12px",
    // marginLeft: theme.spacing(1),
  },

  history_actions_icon: {
    width: "25px",
    height: "25px",
    // marginLeft: theme.spacing(1),
  },

  single_user_history_text: {
    marginLeft: theme.spacing(1),
    width: "100%",
  },
  single_user_chat_text: {
    marginLeft: theme.spacing(1),
    width: "100%",
    display: "flex",
    alignItems: "center",
  },

  root: {
    "& .MuiPaper-root": {
      backgroundImage: `url(${BackgroundGradient})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Inter, sans-serif",
    },
  },
  acceptCallBtn: {
    color: "white",
    backgroundColor: "green",
    padding: 12,
  },
  rejectCallBtn: {
    color: "white",
    backgroundColor: "red",
    padding: 12,
  },

  remove: {
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },

  animatedDrawer: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: " #FB1F43",
    },
  },

  slideIn: {
    animation: "slideInFromLeft 0.5s ease-in-out",
  },
  slideOut: {
    animation: "slideOutToLeft 0.5s ease-in-out",
  },

  "@keyframes slideInFromLeft": {
    "0%": {
      transform: "translateX(-100%)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  },

  "@keyframes slideOutToLeft": {
    " 0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-100)",
    },
  },

  recharge_drawer_btn: {
    backgroundColor: "#ffff",
    color: "#FB1F43",
    borderRadius: "24px",
    fontWeight: 700,
    maxWidth: "100px",
    padding: "6px 14px 6px 14px",
    textTransform: "capitalize",
    [theme.breakpoints.down("md")]: {
      padding: "4px 12px",
    },
    "&:hover": {
      backgroundColor: "#dc697c",
    },
  },
  payout_drawer_btn: {
    color: "#ffff",
    fontWeight: 400,
    maxWidth: "100px",
    lineHeight: "24px",
    border: "1px solid #ffff",
    borderRadius: "24px",
    padding: "6px 14px 6px 14px",
    textTransform: "capitalize",
    [theme.breakpoints.down("md")]: {
      padding: "4px 12px",
    },
    "&:hover": {
      backgroundColor: "#dc697c",
    },
  },

  drawerContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    justifyContent: "center",
  },
  drawer_header_wrapper: {
    display: "flex",
    width: "80%",
    position: "absolute",
    top: "20px",
    gap: 2,
    justifyContent: "space-between",
  },
  drawer_action_container: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "fex-start",
    gap: "40px",
    justifyContent: "center",
  },
  drawer_text: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    gap: "60px",
  },

  chatbox_container: {
    position: "fixed",
    bottom: 20,
    right: 20,
    background: "#ffff",
    height: "53px",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      right: "25%",
    },
  },

  chatbox: {
    
    background: "transparent",
 
   
  
  },
  callImage: {
    
   maxWidth:"90px",
 
   
  
  },

  chat_wrapper: {
    width: "100%",
    maxWidth: "90%",
    display: "flex",
    marginTop: "10px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      padding: "0 6px",
    },
  },
}));

export default useStyles;
