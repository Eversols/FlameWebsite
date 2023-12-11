import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    padding: "16px",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "180px",
    [theme.breakpoints.down("sm")]: {
   minHeight:"120px",
   maxWidth: "215px",
   margin :"0px 30px"
    },
    minHeight: "180px",
    margin :"0px 0px",
    minWidth: "180px",
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
    [theme.breakpoints.down("sm")]: {
      marginBottom: "5px",
       },
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

  detail_wrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    marginBottom: "30px",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]:{
      marginBottom:"5px"
    }
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
}));

export default useStyles;
