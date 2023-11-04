import { makeStyles } from "@mui/styles";
import BackgroundGradient from "../../Assets/images/background_gradient.png";

const useStyles = makeStyles((theme) => ({
  selected: {
    width: "100%",

    // backgroundColor: "rgba(255,255,255,0.9)",
    background: "#ffff",
    borderRadius: "15px",
    display: "flex",
    transition: "0.3s ease",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      width: "45%",
      height: "300px",
      marginTop: theme.spacing(3),
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "300px",
      marginTop: theme.spacing(3),
    },
  },
  unselected: {
    width: "100%",
    background: "#ffff",
    // backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: "15px",
    display: "flex",
    transition: "0.3s ease",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      width: "45%",
      height: "300px",
      marginTop: theme.spacing(3),
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "300px",
      marginTop: theme.spacing(3),
    },
  },
  img: {
    width: "100%",
    maxWidth: "270px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "200px",
    },
  },
  text1: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "24px",
    fontWeight: 700,
    color: "#000000",

    // [theme.breakpoints.down("md")]: {
    //   fontSize: "19px",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "12px",
    // },
  },
  text2: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    color: "#000000",
    // [theme.breakpoints.down("md")]: {
    //   fontSize: "19px",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "12px",
    // },
  },

  text: {
    width: "100%",
    display: "flex",
    alignItems: "left",
    // [theme.breakpoints.down("md")]: {
    //   fontSize: "19px",
    // },
  },

  divider: {
    width: "100%",
    height: "30px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "10px",
    },
  },
  uncheckbox: {
    maxWidth: "20px",
  },
  checkbox: {
    maxWidth: "17px",
  },
  name: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));

export default useStyles;
