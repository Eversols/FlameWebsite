import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "40%",
    height: "50%",
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: "15px",
    border: "1px solid white",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    animation: `$popup 500ms ${theme.transitions.easing.easeInOut}`,
    [theme.breakpoints.down("md")]: {
      height: "30%",
      width: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "40%",
      width: "70%",
    },
  },
  heading: {
    color: "#333333",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: "14px",
    marginBottom: "2px",
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
      height: "45px",
      "& .MuiOutlinedInput-input": {
        padding: "18px 16px 18px 16px",
        "&::placeholder": {
          color: "#00000080",
        },
      },
    },
  },
  inputOne: {
    color: "black",
    width: "50%",
    height: "50px",
    borderRadius: "15px",
    backgroundColor: "rgba(255,255,255,0.3)",
    border: "none",
    textAlign: "center",
    marginBottom: "15px",
    marginLeft: "4px",
    marginRight: "4px",
    "&:focus": {
      outline: "none",
    },
  },
  btn: {
    width: "30%",
    height: "10%",
    backgroundColor: "#000000",
    color: "#ffffff",
    borderRadius: "30px",
    marginBottom: "10px",
    "&:hover": {
      backgroundColor: "#535353",
    },
    [theme.breakpoints.down("sm")]: {
      width: "45%",
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

  download: {
    maxWidth: "150px",
  },
}));

export default useStyles;
