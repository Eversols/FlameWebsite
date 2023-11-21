import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    border: "none",
    display: "flex",
    justifyContent: "center",
    gap: "30px",
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

  moodcontainer: {
    width: "100%",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "18px",
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
    },
  },
  btn: {
    width: "15%",
    height: "42px",
    backgroundColor: " #FB1F43",
    color: "#ffffff",
    borderRadius: "30px",
    marginBottom: "40px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      height: "50px",
      fontSize: "20px",
      width: "35%",
    },
    "&:hover": {
      backgroundColor: "#dc697c",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      borderRadius: "5px",
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

  genderWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
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

  heading1: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 700,
    color: "#000000",
    fontSize: "40px",
  },
  heading2: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 300,
    color: "#000000",
    fontSize: "24px",
  },
}));

export default useStyles;
