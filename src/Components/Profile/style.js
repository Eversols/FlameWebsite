import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    padding: "16px",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "180px",
    background: (arg) => (arg ? "#ECECFF" : "#ffff"),
    border: (arg) => (arg ? "2px solid #FB1F43" : "1px solid #87A2F7"),
  },

  cardTitle: {
    fontSize: "12px",
    fontWeight: 400,
    color: "#0A0E1A",
  },

  cardTitle2: {
    fontSize: "12px",
    fontWeight: 400,

    color: "#868AA9",
    marginBottom: "20px",
  },

  cardDesc: {
    fontSize: "28px",
    fontWeight: 700,
  },

  cardText: {
    fontSize: "12px",
    fontWeight: 700,
    color: " #868AA9",
  },

  circleImage: {
    maxWidth: "20px",
  },

  cardBtn: {
    marginTop: 0,
    fontSize: 16,
    fontWeight: "bolder",
    backgroundColor: "#000000",
    color: "#ffffff",
    borderRadius: "30px",
    marginBottom: "10px",
    "&:hover": {
      backgroundColor: "#535353",
    },
    [theme.breakpoints.down("md")]: {
      height: "50px",
      fontSize: "20px",
      width: "35%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "45%",
      fontSize: "14px",
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
  },
  gridStyle: { gap: "10px" },
  CustomTabPanel: {
    padding: "15px 0px",
    margin: "10px 0px",
  },
}));

export default useStyles;
