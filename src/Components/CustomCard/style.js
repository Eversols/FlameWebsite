import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  selected: {
    width: "397px",
    maxWidth: "397px",
    maxHeight: "436px",
    backgroundColor: "#FB1F43",
    background: "#ffff",
    borderRadius: "15px",
    display: "flex",
    transition: "0.3s ease",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    padding: "32px 20px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "280px",
    },
  },
  unselected: {
    width: "397px",
    cursor: "pointer",
    maxWidth: "397px",
    maxHeight: "436px",
    background: "#ffff",
    borderRadius: "15px",
    display: "flex",
    transition: "0.3s ease",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    padding: "32px 20px",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "280px",
    },
  },
  img: {
    width: "100%",
    // [theme.breakpoints.down("sm")]: {
    //   maxWidth: "200px",
    // },
  },
  text1: {
    fontFamily: "Inter, sans-serif",
    fontSize: "24px",
    fontWeight: 700,
    color: "#000000",
    marginTop: "12px",
  },
  text2: {
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    color: "#000000",
    marginTop: "12px",
  },

  text: {
    width: "100%",
    display: "flex",
    alignItems: "left",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
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
