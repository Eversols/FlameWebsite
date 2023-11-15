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
  },

  heading1: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "bold",
    marginTop: "20px",
    color: "#000000",
    fontSize: "40px",
  },

  btn: {
    width: "20%",
    height: "40px",
    marginTop: "40px",
    backgroundColor: " #FB1F43",
    color: "#ffffff",
    borderRadius: "30px",
    marginBottom: "40px",
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

  checkBoxWrapper: {
    display: "flex",
    width: "100%",
    maxWidth: "110px",
    flexDirection: "column",
    gap: "10px",
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
