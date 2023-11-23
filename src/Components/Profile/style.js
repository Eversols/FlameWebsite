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
  drawer_header_wrapper: {
    display: "flex",
    width: "100%",
    padding: "16px 8px",
    gap: 2,
    justifyContent: "space-between",
  },
  logo: {
    maxWidth: "194px",
  },
  recharge_btn: {
    backgroundColor: "#FB1F43",
    color: "#ffffff",
    borderRadius: "24px",
    padding: "6px 14px 6px 14px",
    textTransform: "capitalize",
    [theme.breakpoints.down("md")]: {
      padding: "4px 12px",
    },
    "&:hover": {
      backgroundColor: "#dc697c",
    },
  },
}));

export default useStyles;
