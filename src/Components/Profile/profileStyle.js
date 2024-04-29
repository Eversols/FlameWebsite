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
    color: "#000000",
    fontFamily: "Inter, sans-serif",
    fontWeight: 700,
    fontSize: "14px",
    marginBottom: "2px",
  },
  subHeading: {
    color: "#3A4159",
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    fontSize: "14px",
    marginBottom: "2px",
  },
  label: {
    color: "#333333",
    fontFamily: "Inter, sans-serif",
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
  images: {
    width: "100%",
    height: "90px",
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: "2%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: "0px",
    left: "0px",
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
    fontFamily: "Inter, sans-serif",
    fontWeight: "bold",
    fontSize: "10px",
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

  placeholderStyle: {
    "&::placeholder": {
      fontSize: "13.5px",
      letterSpacing: "inherit",
      color: "#aaaaaa",
      textAlign: "left",
      fontFamily: "Inter, sans-serif",
      fontWeight: 400,
      opacity: 0.8,
      /* Additional placeholder styles if needed */
    },
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
  },
}));

export default useStyles;
