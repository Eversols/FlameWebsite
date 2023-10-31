import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "50%",
    height: "80%",
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: "15px",
    border: "1px solid white",
    animation: `$popup 500ms ${theme.transitions.easing.easeInOut}`,
  },
  customTab: {
    minWidth: "50%", // Set the desired width here
    // Add any other custom styles you want here
    "& .Mui-selected": {
      border: "3px solid red",
    },
  },
  CustomTabPanel: {
    padding: "12px",
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
}));

export default useStyles;
