import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({

  cardContainer: {
    minWidth: "200px",
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: "15px",
    border: "1px solid white",
    marginLeft: 26,
    marginRight: 12,
    marginTop: 32,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardDesc: {
    marginTop: 32,
    fontSize: 22,
    fontWeight: "bolder",
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
}));

export default useStyles;
