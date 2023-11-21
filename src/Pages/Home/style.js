import { makeStyles } from "@mui/styles";
import ProfileImage from "../../Assets/images/male.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    maxWidth: "1300px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    flexDirection: "row",
    paddingTop: "75px",
    zIndex: 1,
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      paddingTop: "0",
      gap: "30px",
      justifyContent: "unset",
      alignItems: "center",
    },

    [theme.breakpoints.down("sm")]: {
      gap: "20px",
    },
  },
  heading: {
    color: "#3A4159",
    fontWeight: "bold",
    wordSpacing: "3px",
  },
  box_left: {
    width: "24%",
    minHeight: "78%",
    display: "flex",
    border: "1px solid white",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    borderRadius: "24px",
    padding: "24px 32px",
    boxShadow: "5px 22px 83px -12px #0000001A",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  box_left_info: {
    width: "24%",
    minHeight: "78%",
    display: "flex",
    border: "1px solid white",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    borderRadius: "24px",
    padding: "24px 32px",
    boxShadow: "5px 22px 83px -12px #0000001A",
    [theme.breakpoints.down("md")]: {
      width: "80%",
      minHeight: "450px",
      margin: "0 auto 70px auto",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: 0,
    },
  },

  box_left_history: {
    width: "80%",
    height: "200px",
    display: "none",
    border: "1px solid white",
    boxShadow: "5px 22px 83px -12px #0000001A",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    borderRadius: "24px",
    padding: "16px",
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
    display: "flex",
    minHeight: "78%",
    flexDirection: "column",
    alignItems: "center",
    padding: "50px 0px 0px 0px",
    justifyContent: "space-between",
    maxHeight: "570px",
    [theme.breakpoints.down("md")]: {
      width: "80%",
      padding: "135px 0px 0px 0px",
      maxHeight: "600px",
      minHeight: "unset",
    },
    [theme.breakpoints.down("sm")]: {
      width: "91%",
      padding: "100px 0px 0px 0px",
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
    width: "146px",
    height: "146px",
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
    marginTop: "12px",
    fontSize: "24px",
    fontWeight: "700",
  },
  profile_heading: {
    color: "#000000",
    marginTop: "12px",
    fontSize: "16px",
    fontWeight: "700",
  },

  btn_love: {
    background: "#93BF92",
    borderRadius: "8px",
    color: "#ffff",
    fontSize: "8px",
    fontWeight: 600,
    textTransform: "uppercase",

    "&:hover": {
      background: "#93BF92",
    },
  },

  btnContainer: {
    width: "100%",
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "10px",
    marginTop: "10px",
  },

  btn_hate: {
    background: " #FB6B83",
    borderRadius: "8px",
    color: "#ffff",
    fontSize: "8px",
    fontWeight: 600,
    textTransform: "uppercase",

    "&:hover": {
      background: " #FB6B83",
    },
  },

  profile_answer: {
    color: "#000000",
    fontSize: "14px",
    fontWeight: 400,
    marginTop: "12px",
  },

  profile_detail: {
    textAlign: "center",
  },
  profile_question_text: {
    color: "#868AA9",
    fontSize: "16px",
    borderBottom: "1px solid rgba(255,255,255,0.3)",
    fontWeight: 400,
  },
  profile_text: {
    color: "#868AA9",
    fontSize: "14px",
    borderBottom: "1px solid rgba(255,255,255,0.3)",
    fontWeight: 400,
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
    left: "10%",
    position: "absolute",
    width: "100%",
    maxWidth: "194px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  heart_bg: {
    bottom: 0,
    left: 0,
    position: "absolute",
    width: "420px",
    maxWidth: "420px",
    height: "532px",
    [theme.breakpoints.down("sm")]: {
      bottom: "-36%",
      left: "50%",
      maxWidth: "100%",
      transform: "translateX(-50%)",
    },
  },
}));

export default useStyles;
