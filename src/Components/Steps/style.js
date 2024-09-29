import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "60%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },

  fieldWrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
  },
  mainBox: {
    width: "100%",
    maxWidth: "500px",
    // height: "572px",
    height:"100%",
    maxHeight: "572px",
    borderRadius: "24px",
    margin: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    animation: `$popup 500ms ${theme.transitions.easing.easeInOut}`,
    boxShadow: "0px 41px 56px -5px #0000001A",
    background: "#FFFFFF",
    zIndex: "1",
    [theme.breakpoints.down("lg")]: {
      maxWidth:"425px",
      maxHeight:"450px",
      },
  
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      boxShadow: "none",
    },
  },
  heading: {
    color: "black",
    fontFamily: "Inter, sans-serif",
    fontWeight: 700,
    fontSize: "48px",
    textAlign: "center",
    marginBottom: "40px",
    padding: "1px 34px",
    [theme.breakpoints.down("md")]: {
      fontSize: "38px",
      padding: "0px 8px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "35px",
      padding: "0px 0px",
    },
  },
  headingOne: {
    color: "black",
    fontFamily: "Inter, sans-serif",
    fontWeight: 700,
    fontSize: "42px",
    textAlign: "center",
    marginBottom: "40px",
    padding: "1px 34px",
    [theme.breakpoints.down("md")]: {
      fontSize: "38px",
      padding: "0px 8px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "35px",
      padding: "0px 0px",
    },
  },
  input: {
    width: "100%",
    height: "45px",
    padding: "18px 16px 18px 16px",
    borderRadius: "10px",
    fontFamily: "Inter, Montserrat, sans-serif",
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
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "10px",
        border: "1px solid #D8DADC",
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
      height: "50px",
      "& .MuiOutlinedInput-input": {
        padding: "18px 16px 18px 16px",
        "&::placeholder": {
          color: "#00000080",
        },
      },
    },
  },
  input2: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "10px",
        border: "1px solid #D8DADC",
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
      height: "50px",
      marginTop: '12px',
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
    height: "50px",
    backgroundColor: "#FB1F43",
    color: "#ffffff",
    fontWeight: 600,
    borderRadius: "10px",
    fontFamily: "Inter, Montserrat, sans-serif",
    marginTop: "72px",
    marginBottom: "30px",
    textTransform: 'capitalize',
    "&:hover": {
      backgroundColor: "#dc697c",
    },
  },
  error: {
    fontFamily: "Inter, sans-serif",
    fontWeight: "regular",
    fontSize: "12px",
    color: "red",
    position: "absolute",
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
    maxWidth: "270px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "250px",
    },
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
    height:"440px",
    [theme.breakpoints.down("md")]: {
      height: "365px",
    },

    [theme.breakpoints.down("sm")]: {
      bottom: "-65%",
      left: "50%",
      maxWidth: "100%",
      width:"100%",
      transform: "translateX(-50%)",
      height: "100%",
    },
  },
  wrapper: {
    width: "100%",
    display: "flex",
  },

  passwordWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    // height: "115px",
  },

  mainWrapperBox: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;
