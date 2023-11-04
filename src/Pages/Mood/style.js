import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "80%",
    height: "85%",
    border: "none",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    zIndex: 1,
    animation: `$popup 500ms ${theme.transitions.easing.easeInOut}`,
    [theme.breakpoints.down("md")]: {
      height: "70%",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      width: "100%",
      justifyContent: "center",
    },
  },
  paragraph_container: {
    width: "100%",
    height: "30%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      height: "18%",
      textAlign: "center",
      marginTop: theme.spacing(5),
    },
  },
  heading1: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "bold",
    color: "#000000",
    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  heading2: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "regular",
    color: "#000000",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      marginTop: theme.spacing(3),
    },
  },
  moodcontainer: {
    width: "100%",
    height: "100%",
    maxHeight: "300px",
    display: "flex",
    // contentJustify: "space-between",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      flexWrap: "wrap",
      width: "100%",
      marginTop: theme.spacing(3),
    },
  },
  btn: {
    width: "20%",
    height: "10%",
    backgroundColor: " #FB1F43",
    color: "#ffffff",
    borderRadius: "30px",
    marginBottom: "10px",
    [theme.breakpoints.down("md")]: {
      height: "50px",
      fontSize: "20px",
      width: "35%",
    },
    "&:hover": {
      backgroundColor: "#dc697c",
    },
    [theme.breakpoints.down("sm")]: {
      width: "45%",
      fontSize: "14px",
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
  },
  "@keyframes popup": {
    "0%": {
      transform: "scale(0.2)",
    },
    "50%": {
      transform: "scale(1.1)",
    },

    "100%": {
      transform: "scale(1)",
    },
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
    maxWidth: "275px",
    [theme.breakpoints.down("sm")]: {
      bottom: "-70%",
      left: "50%",
      maxWidth: "100%",
      transform: "translateX(-50%)",
    },

    [theme.breakpoints.down(480)]: {
      bottom: "-45%",
      // Your styles for 420px and below
    },
    [theme.breakpoints.down(420)]: {
      bottom: "-35%",
      // Your styles for 420px and below
    },
    [theme.breakpoints.down(376)]: {
      bottom: "-48%",
      // Your styles for 420px and below
    },
    [theme.breakpoints.down(320)]: {
      bottom: "-35%",
      // Your styles for 420px and below
    },
  },

  genderWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  mainWrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    gap: "20px",
    maxWidth: "460px",
  },
  male: {
    marginBottom: "20px",
  },

  female: {
    marginBottom: "20px",
  },

  checkBoxWrapper: {
    display: "flex",
    width: "100%",
    maxWidth: "110px",
    flexDirection: "column",
    gap: "15px",
  },

  paragraph: {
    width: "100%",
    height: "5%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      height: "18%",
      textAlign: "center",
      marginTop: theme.spacing(5),
    },
  },

  checkBox: { display: "flex", gap: "10px", alignItems: "center" },

  checkBoxLabel: {
    fontSize: "16px",
    fontWeight: 500,
    fontFamily: "Montserrat, sans-serif",
  },
  gender_bg: {
    bottom: 0,
    right: 0,
    position: "absolute",
    width: "100%",
    maxWidth: "230px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
}));

export default useStyles;
