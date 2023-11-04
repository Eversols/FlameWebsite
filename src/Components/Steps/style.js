import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "80%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },

  fieldWrapper: {
    width: "70%",
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
  },
  mainBox: {
    width: "100%",
    maxWidth: "455px",
    height: "100%",
    maxHeight: "450px",
    borderRadius: "24px",
    // padding: "20px 40px",
    margin: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    animation: `$popup 500ms ${theme.transitions.easing.easeInOut}`,
    boxShadow: "0px 41px 56px -5px #0000001A",
    background: "#FFFFFF",
    zIndex: "1",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      boxShadow: "none",
      //   padding: "20px 20px",
    },
  },
  heading: {
    color: "black",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "bold",
    fontSize: "40px",
    textAlign: "center",
    marginBottom: "40px",
  },
  input: {
    width: "100%",
    height: "45px",
    padding: "18px 16px 18px 16px",
    borderRadius: "10px",
    border: "1px solid #D8DADC",
    backgroundColor:
      "linear-gradient(0deg, #D8DADC, #D8DADC), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
    color: "#00000080",
    marginBottom: "15px",
    "&:focus": {
      outline: "none",
    },
    "&::placeholder": {
      color: "#00000080",
    },
  },
  input1: {
    // border: "1px solid #D8DADC",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "10px",
        border: "1px solid #D8DADC",
        // border: "none",
      },

      "&:hover fieldset": {
        borderRadius: "10px",
        border: "1px solid #D8DADC",
      },
      "&.Mui-focused fieldset": {
        borderRadius: "10px",
        border: "1px solid #D8DADC",
        outline: "none",
      },
      "&.Mui-disabled fieldset": {
        borderRadius: "10px",
        border: "1px solid #D8DADC",
      },

      border: "none",
      borderRadius: "10px",
      backgroundColor:
        "linear-gradient(0deg, #D8DADC, #D8DADC), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
      color: "#00000080",
      width: "100%",
      height: "45px",
      "& .MuiOutlinedInput-input": {
        padding: "18px 16px 18px 16px",
        "&::placeholder": {
          color: "#00000080",
        },
      },
    },
  },
  btn: {
    width: "100%",
    height: "45px",
    backgroundColor: "#FB1F43",
    color: "#ffffff",
    borderRadius: "10px",
    marginTop: "40px",
    marginBottom: "30px",
    "&:hover": {
      backgroundColor: "#dc697c",
    },
  },
  error: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "regular",
    fontSize: "12px",
    color: "red",
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
  wrapper: {
    width: "100%",
    display: "flex",
  },
}));

export default useStyles;
