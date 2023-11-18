import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "90%",
    height: "90%",
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: "15px",
    border: "1px solid white",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    flexDirection: "column",
    animation: `$popup 500ms ${theme.transitions.easing.easeInOut}`,
    [theme.breakpoints.down("md")]: {
      height: "50% !important",
      width: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "90%",
      width: "90%",
    },
  },
  heading: {
    color: "#333333",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: "14px",
    marginBottom: "2px",
  },
  box_inner: {
    height: "80%",
    width: "100%",
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  box_left: {
    width: "49%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      width: "45%",
    },
  },
  image_container: {
    width: "100%",
    display: "flex !important",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  single_image: {
    width: "95px",
    height: "95px",
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: "6px",
    left: "8px",
    justifyContent: "center",
  },

  single_image_circle: {
    width: "300px",
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  body_text: {
    color: "black",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "bold",
    fontSize: "9px",
    [theme.breakpoints.down("md")]: {
      fontSize: "7px",
    },
  },
  btn: {
    width: "40%",
    height: "8%",
    backgroundColor: "#000000",
    color: "#ffffff",
    borderRadius: "30px",
    marginTop: theme.spacing(7),
    "&:hover": {
      backgroundColor: "#535353",
    },
  },
  box_mid: {
    width: "1%",
    height: "100%",
  },
  percentage: {
    color: "black",
    display: "flex",
    position: "absolute",
    left: "-30px",
    fontSize: "12px",
    top: "20px",
    fontWeight: 900,
  },
  box_midInner: {
    width: "20px",
    height: "100%",
    borderRadius: "30px",
    backgroundColor: "rgba(255,255,255,0.4)",
  },
  progress: {
    width: "20px",
    borderRadius: "30px",
    backgroundColor: "black",
    transition: "height 1s",
  },
  box_right: {
    width: "49%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      height: "100%",
    },
  },
  input: {
    color: "black",
    width: "85%",
    height: "40px",
    borderRadius: "15px",
    backgroundColor: "rgba(255,255,255,0.3)",
    border: "none",
    textAlign: "center",
    "&:focus": {
      outline: "none",
    },
    [theme.breakpoints.down("md")]: {
      width: "90%",
      fontSize: "11px",
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
      height: "45px",
      "& .MuiOutlinedInput-input": {
        padding: "18px 16px 18px 16px",
        "&::placeholder": {
          color: "#00000080",
        },
      },
    },
  },
}));

export default useStyles;
