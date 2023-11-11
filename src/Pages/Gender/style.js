import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    maxWidth: "1000px",
    border: "none",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    zIndex: 1,
    animation: `$popup 500ms ${theme.transitions.easing.easeInOut}`,
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  paragraph_container: {
    width: "100%",
    display: "flex",
    gap: "30px",
    marginTop: "20px",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      marginTop: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      gap: 0,
      textAlign: "center",
    },
  },
  heading1: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "bold",
    marginTop: "20px",
    color: "#000000",
    fontSize: "40px",
  },
  heading2: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "regular",
    color: "#000000",
    fontSize: "20px",
  },
  moodcontainer: {
    width: "100%",
    padding: "10px",
    display: "flex",
    margin: "20px  0px",
    gap: "10px",
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
    },
  },
  btn: {
    width: "20%",
    height: "10%",
    marginTop: "10px",
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
    maxWidth: "310px",
    [theme.breakpoints.down("sm")]: {
      left: "50%",
      maxWidth: "100%",
      transform: "translateX(-50%)",
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