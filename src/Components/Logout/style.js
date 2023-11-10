import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  btn: {
    background: "#FB1F43",
    color: "#ffff",
    fontSize: 14,
    fontWeight: 600,
    textTransform: "capitalize",
    width: "100%",
    height: "35px",
    maxWidth: "80px",

    "&:hover": {
      background: " #FB6B83",
    },
  },

  btnCancel: {
    background: " #ea97a54a",
    color: "#FB1F43",
    height: "35px",
    boxShadow: "none",
    width: "100%",
    maxWidth: "80px",
    fontSize: 14,
    textTransform: "capitalize",
    fontWeight: 600,
    "&:hover": {
      background: " #ea97a54a",
    },
  },
}));

export default useStyles;
