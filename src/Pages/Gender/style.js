import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    maxWidth: "1000px",
    border: "none",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    zIndex: 1,
    animation: `$popup 500ms ${theme.transitions.easing.easeInOut}`,
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  paragraph_container: {
    width: "100%",
    display: "flex",
    gap: "20px",
    marginTop: "30px",
    marginBottom: "30px",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      gap: 0,
      textAlign: "center",
    },
  },


  heading: {
    fontFamily: "Inter, sans-serif",
    fontWeight: "bold",
    color: "#000000",
    fontSize: "40px",
    "& .text":{
      color: '#FB1F43'
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "24px"
    }
  },
  
  heading1: {
    fontFamily: "Inter, sans-serif",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "20px",
    color: "#000000",
    fontSize: "40px",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px"
    }
  },
  
  heading2: {
    color: "black",
    fontFamily: "Inter, Montserrat, sans-serif",
    fontWeight: "300",
    fontSize: "24px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px"
    }
  },

  btn: {
    width: "15%",
    height: "42px",
    marginTop: "40px",
    backgroundColor: " #FB1F43",
    color: "#ffffff",
    borderRadius: "30px",
    marginBottom: "40px",
    textTransform: 'capitalize',
    [theme.breakpoints.down("md")]: {
      height: "50px",
      fontSize: "20px",
      width: "35%",
    },
    "&:hover": {
      backgroundColor: "#dc697c",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      borderRadius: "5px",
      fontSize: "14px",
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
  },
  "@keyframes popup": {
    "0%": {
      transform: "scale(0.2)",
    },
    "50%": {
      transform: "scale(1.1)",
    },

    "100%": {
      transform: "scale(1)",
    },
  },

  logo: {
    top: "4%",
    left: "10%",
    position: "absolute",
    width: "100%",
    maxWidth: "194px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  heart_bg: {
    bottom: 0,
    left: 0,
    position: "absolute",
    width: "100%",
    maxWidth: "310px",
    [theme.breakpoints.down("sm")]: {
      left: "50%",
      maxWidth: "100%",
      transform: "translateX(-50%)",
    },
  },

  genderWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  mainWrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    gap: "20px",
    maxWidth: "460px",
  },
  male: {
 
    width: "100%",
    marginBottom: "20px",
    maxWidth: "100px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90px",
    }
  },

  female: {
   
    width: "100%",
    marginBottom: "20px",
    maxWidth: "80px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "70px",
    }
  },

  paragraph: {
    width: "100%",
    height: "5%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      height: "18%",
      textAlign: "center",
      marginTop: theme.spacing(5),
    },
  },

  gender_bg: {
    bottom: 0,
    right: 0,
    position: "absolute",
    width: "100%",
    maxWidth: "230px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  mainWrapperBox: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;
