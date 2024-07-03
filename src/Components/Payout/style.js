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
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    fontSize: "14px",
    marginBottom: "2px",
  },
  heading_file: {
    color: "#333333",
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    fontSize: "15px",
    marginBottom: "2px",
  },

  input1: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "10px",
        border: "none",
      },

      "&:hover fieldset": {
        borderRadius: "10px",
        border: "none",
      },
      "&.Mui-focused fieldset": {
        borderRadius: "10px",
        border: "none",
        outline: "none",
      },
      "&.Mui-disabled fieldset": {
        borderRadius: "10px",
        border: "none",
      },

      border: "none",
      borderRadius: "6px",

      backgroundColor: "#F2F2F2",
      color: "#828282",
      fontSize: "14px",
      fontWeight: 400,
      width: "100%",
      height: "40px",
      "& .MuiOutlinedInput-input": {
        padding: "18px 16px 18px 16px",
        "&::placeholder": {
          color: "#828282",
        },
      },
      "&.MuiAutocomplete-inputRoot": {
        padding: "0px 0px 0px 0px",
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
    fontFamily: "Inter, sans-serif",
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
  btn1: {
    width: "30%",
    height: "40px",
    backgroundColor: "#FB1F43",
    color: "#ffffff",
    fontWeight: 600,
    borderRadius: "10px",
    fontFamily: "Inter, Montserrat, sans-serif",
    "&:hover": {
      backgroundColor: "#dc697c",
    },
  }
}));

export default useStyles;
