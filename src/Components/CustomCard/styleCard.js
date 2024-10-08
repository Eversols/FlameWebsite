import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  selected: {
    width: "100%",
    maxWidth: "257px",
    maxHeight: "367px",
    background: "transparent",
    borderRadius: "15px",
    display: "flex",
    transition: "0.3s ease",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  unselected: {
    width: "100%",
    maxWidth: "257px",
    maxHeight: "367px",
    background: "transparent",
    borderRadius: "15px",
    display: "flex",
    transition: "0.3s ease",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  imgbox: {
    background: "#FB1F43",
    borderRadius: "12px",
  },
  img: {
    maxWidth: "160px",
  },
  text1: {
    fontFamily: "Inter, sans-serif",
    fontSize: "18px",
    fontWeight: 700,
    color: "#000000",
  },
  text2: {
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    color: "#000000",
  },

  text: {
    width: "100%",
    display: "flex",
    alignItems: "left",
  },

  divider: {
    width: "100%",
    height: "30px",
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
