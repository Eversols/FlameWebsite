import { makeStyles } from "@mui/styles";
import ProfileImage from "../../Assets/images/male.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    flexDirection: "row",
    paddingTop: "56px"
  },
  heading: {
    color: "#3A4159",
    fontWeight: "bold",
    wordSpacing: "3px",
    padding: "12px 0px 0px 12px"
  },
  box_left: {
    width: "24%",
    height: "92%",
    display: "flex",
    border: "1px solid white",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    borderRadius: "24px",
    padding: "24px 32px"
  },
  box_leftInner: {
    width: "100%",
  },
  box_mid: {
    width: "60%",
    height: "92%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
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
    padding: 0
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
    width: "20%",
    height: "92%",
    border: "1px solid white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: "15px",
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
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "center",
  },
  profile_detail: {
    textAlign: "center",
  },
  profile_question_text: {
    color: "rgba(0,0,0,0.4)",
    fontSize: "15px",
    borderBottom: "1px solid rgba(255,255,255,0.3)",
  },
  profile_answer_text: {
    color: "#000000",
    fontSize: "15px",
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
