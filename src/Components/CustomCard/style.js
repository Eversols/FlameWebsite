import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  selected: {
    width: "100%",
    maxWidth: "310px",
    // backgroundColor: "rgba(255,255,255,0.9)",
    background: "#ffff",
    borderRadius: "15px",
    display: "flex",
    transition: "0.3s ease",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  unselected: {
    width: "100%",
    maxWidth: "310px",
    background: "#ffff",
    borderRadius: "15px",
    display: "flex",
    transition: "0.3s ease",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  img: {
    maxWidth: "250px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "200px",
    },
  },
  text1: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "20px",
    fontWeight: 700,
    color: "#000000",
  },
  text2: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "10px",
    fontWeight: 400,
    color: "#000000",
  },

  text: {
    width: "100%",
    display: "flex",
    alignItems: "left",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },

  divider: {
    width: "100%",
    height: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "10px",
    },
  },
  uncheckbox: {
    maxWidth: "20px",
  },
  checkbox: {
    maxWidth: "17px",
  },
  name: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));

export default useStyles;
