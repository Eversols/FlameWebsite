import { makeStyles } from "@mui/styles";
import ProfileImage from "../../Assets/images/male.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    maxWidth: "1300px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    flexDirection: "row",
    paddingTop: "56px",
    zIndex: 1,
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  heading: {
    color: "#3A4159",
    fontWeight: "bold",
    wordSpacing: "3px",
  },
  box_left: {
    width: "24%",
    height: "85vh",
    display: "flex",
    border: "1px solid white",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    borderRadius: "24px",
    padding: "24px 32px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  box_left_history: {
    width: "80%",
    height: "400px",
    display: "none",
    border: "1px solid white",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    borderRadius: "24px",
    padding: "0px 24px",
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  box_leftInner: {
    width: "100%",
  },
  box_mid: {
    width: "50%",
    height: "92%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      marginTop: "45px",
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  call_window: {
    width: "100%",
    border: "1px solid white",
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 0,
  },
  videoCall: {
    height: "85%",
  },
  call_footer: {
    height: "10%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2),
  },
  call_action: {
    width: "40px",
    height: "40px",
    marginLeft: theme.spacing(1),
  },
  videoBtn: {
    color: "white",
    backgroundColor: "red",
    padding: 12,
  },
  gifts: {
    width: "50px",
    height: "50px",
  },

  box_right: {
    width: "24%",
    height: "85vh",

    maxHeight: "85vh",
    display: "flex",
    border: "1px solid white",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    borderRadius: "24px",
    padding: "24px 32px",
  },

  avatar_box_profile: {
    marginBottom: theme.spacing(1),
  },
  single_image_profile: {
    width: "100px",
    height: "100px",
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: "200px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  profile_answer_name: {
    color: "#000000",
    marginTop: "15px",
    fontSize: "18px",
    fontWeight: "bold",
  },

  btn_love: {
    background: "#93BF92",
    borderRadius: "8px",
    color: "#ffff",
    fontSize: "8px",
    fontWeight: 400,
    textTransform: "uppercase",

    "&:hover": {
      background: "#93BF92",
    },
  },

  btnContainer: {
    width: "100%",
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    marginBottom: "15px",
    marginTop: "15px",
  },

  btn_hate: {
    background: " #FB6B83",
    borderRadius: "8px",
    color: "#ffff",
    fontSize: "8px",
    fontWeight: 400,
    textTransform: "uppercase",

    "&:hover": {
      background: " #FB6B83",
    },
  },

  profile_answer: {
    color: "#000000",
    fontSize: "14px",
    fontWeight: 400,
    marginTop: "15px",
  },

  profile_detail: {
    textAlign: "center",
  },
  profile_question_text: {
    color: "rgba(0,0,0,0.4)",
    fontSize: "14px",
    borderBottom: "1px solid rgba(255,255,255,0.3)",
  },
  profile_answer_text: {
    color: "#000000",
    fontSize: "14px",
    borderBottom: "1px solid rgba(255,255,255,0.3)",
  },
  block_bg: {
    bottom: 0,
    right: 0,
    position: "absolute",
    width: "100%",
    maxWidth: "230px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  logo: {
    top: "4%",
    left: "5%",
    position: "absolute",
    width: "100%",
    maxWidth: "150px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  heart_bg: {
    bottom: 0,
    left: 0,
    position: "absolute",
    width: "100%",
    maxWidth: "310px",
    [theme.breakpoints.down("sm")]: {
      left: "50%",
      maxWidth: "100%",
      transform: "translateX(-50%)",
    },
  },
}));

export default useStyles;
