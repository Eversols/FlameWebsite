import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  selected: {
    width: "100%",
    maxWidth: "397px",
    height: "100%",
    maxHeight: "436px",
    backgroundColor: "#FB1F43",
    background: "#ffff",
    borderRadius: "15px",
    display: "flex",
    transition: "0.3s ease",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    padding: "48px 24px"
  },
  unselected: {
    width: "100%",
    maxWidth: "397px",
    height: "100%",
    maxHeight: "436px",
    background: "#ffff",
    borderRadius: "15px",
    display: "flex",
    transition: "0.3s ease",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    padding: "48px 24px",
  },
  img: {
    width: '100%',
    [theme.breakpoints.down("sm")]: {
      maxWidth: "200px",
    },
  },
  text1: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "24px",
    fontWeight: 700,
    color: "#000000",
  },
  text2: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "16px",
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
