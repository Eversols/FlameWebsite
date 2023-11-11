import { makeStyles } from "@mui/styles";
import BackgroundGradient from "../../Assets/images/background_gradient.png";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    height: "12%",
    borderRadius: "0px 0px 0px 0px",
    position: "absolute",
    backgroundColor: "white",
    top: "0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: "0px 92px",
    zIndex: 2,
  },

  logo: {
    width: "152px",
    maxWidth: "150px",
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
  },
  recharge_btn: {
    backgroundColor: "#FB1F43",
    color: "#ffffff",
    borderRadius: "24px",
    padding: "8px, 20px, 8px, 20px",
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
    padding: "8px, 20px, 8px, 20px",
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
    border: "1px solid white",
    height: "100%",
    maxHeight: '601px',
    position: "relative",
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    "& .swiper-button-prev": {
      background: "transparent",
      padding: "1rem 1.2rem",
      borderRadius: "50%",
      fontSize: "14px",
      left: "auto", // Remove the left property
      right: "15%", // Add this property to move to the right side
      bottom: "40%",
      top: "auto",
      border: "2px solid #3A41594D",
      color: "#3A4159",
      "&:hover": {
        background: "transparent",
      },
    },
    "& .swiper-button-next": {
      background: "transparent",
      padding: "1rem 1.2rem",
      borderRadius: "50%",
      fontSize: "14px",
      left: "auto", // Remove the left property
      right: "5%", // Add this property to move to the right side
      bottom: "40%",
      top: "auto",
      border: "2px solid #3A41594D",
      color: "#3A4159",
      "&:hover": {
        background: "transparent",
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
  img: {
    width: "100%",
    height: "100%",
    borderRadius: "15px",
  },
  buttons: {
    width: "100%",
    position: "absolute",
    bottom: "25%",
    left: 0,
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    right: "10%",
    overflow: "hidden",
    position: "fixed",
    background: "#ffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Montserrat, sans-serif",
    zIndex: 1,
    borderRadius: "24px",
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
  history_actions: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
    width: "100%",
    maxWidth: "120px",
    marginTop: "2px",
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
      fontFamily: "Montserrat, sans-serif",
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
}));

export default useStyles;
