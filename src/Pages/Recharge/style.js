import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    // height: "100%",
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: "15px",

    // animation: `$popup 500ms ${theme.transitions.easing.easeInOut}`,
  },
  customTab: {
    // minWidth: "50%", // Set the desired width here
    // // Add any other custom styles you want here
    // color: "green",
    // "& .Mui-selected": {
    //   border: "3px solid red",
    //   color: "red",
    // },
  },
  CustomTabPanel: {
    padding: "15px 0px",
    margin: "10px",
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

  btn: {
    width: "100%",
    maxWidth: "250px",
    height: "40px",
    marginTop: "10px",
    backgroundColor: " #FB1F43",
    color: "#ffffff",
    borderRadius: "10px",
    marginBottom: "10px",

    "&:hover": {
      backgroundColor: "#dc697c",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
  },
}));

export default useStyles;
