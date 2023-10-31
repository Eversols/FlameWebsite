import { makeStyles } from "@mui/styles";
import BackgroundGradient from "../../Assets/images/background_gradient.png";

const useStyles = makeStyles((theme) => ({
  selected: {
    width: "30%",
    height: "90%",
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: "15px",
    display: "flex",
    transition: "0.3s ease",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: "45%",
      height: "300px",
      marginTop: theme.spacing(3),
    },
  },
  unselected: {
    width: "30%",
    height: "90%",
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: "15px",
    display: "flex",
    transition: "0.3s ease",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: "45%",
      height: "300px",
      marginTop: theme.spacing(3),
    },
  },
  img: {
    width: "100%",
    height: "55%",
    borderRadius: "15px",
    [theme.breakpoints.down("md")]: {
      height: "60%",
    },
  },
  text1: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "13px",
    color: "#000000",
    [theme.breakpoints.down("md")]: {
      fontSize: "19px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  text2: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "13px",
    color: "#000000",
    [theme.breakpoints.down("md")]: {
      fontSize: "19px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
}));

export default useStyles;
