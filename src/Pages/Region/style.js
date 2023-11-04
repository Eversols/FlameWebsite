import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "85%",
    border: "none",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
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
  regionscontainer: {
    width: "100%",
    height: "70%",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      height: "45%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      flexWrap: "wrap",
      marginTop: theme.spacing(5),
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
      backgroundColor: "#535353",
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
}));

export default useStyles;
