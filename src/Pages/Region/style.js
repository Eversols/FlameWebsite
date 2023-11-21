import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    maxWidth: "900px",
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
  paragraph_container: {
    width: "100%",
    display: "flex",
    gap: "30px",
    marginBottom: "20px",
    marginTop: "20px",
    alignItems: "center",
    flexDirection: "column",
    padding: 0,
    [theme.breakpoints.down("md")]: {
      marginTop: "100px",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      gap: 0,
      textAlign: "center",
    },
  },
  heading1: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 700,
    color: " #3E2727",
    fontSize: "40px",
  },
  heading2: {
    fontFamily: "Inter, sans-serif",
    fontWeight: "regular",
    color: "#000000",
    fontSize: "30px",
  },

  regionscontainer: {
    width: "100%",
    padding: "10px",
    display: "flex",

    gap: "10px",
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
    },
  },

  btn: {
    width: "20%",
    height: "40px",
    marginTop: "40px",
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
