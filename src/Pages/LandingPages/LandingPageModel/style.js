import { makeStyles } from "@mui/styles";
import bg_image from "../../../Assets/images/page_2_bg.png";
import Img_1 from "../../../Assets/images/page_2_textbox_1.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ffffff",
  },
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.2em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 1px rgba(0,0,0,1)",
      backgroundColor: "black",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#da3200",
      borderRadius: "5px",
    },
  },
  body: {
    maxHeight: "1280px",
    maxWidth: "1920px",
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: "Inter, sans-serif",
    backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.4) ,rgba(0,0,0,0.3)),url(${bg_image})`,
    height: "100vh",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#ffffff",
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
    },
  },
  header_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingTop: theme.spacing(5),
  },
  page_body: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "5%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
    },
  },
  body_item: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "45px",
    },
  },
  page_heading_text: {
    color: "#ffffff",
    fontWeight: "bold",
    animation: `$popup 300ms ${theme.transitions.easing.easeInOut}`,

    [theme.breakpoints.down("sm")]: {
      fontSize: "35px",
      paddingTop: theme.spacing(5),
    },
  },
  page_body_text: {
    color: "rgba(255,255,255,0.9)",
    animation: `$popup 600ms ${theme.transitions.easing.easeInOut}`,

    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      marginTop: theme.spacing(1),
    },
  },

  login_input: {
    textAlign: "center",
    marginTop: theme.spacing(2),
    width: "100%",
  },
  login_input_box: {
    width: "60%",
    color: "#ffffff",
    animation: `$popup 500ms ${theme.transitions.easing.easeInOut}`,

    marginLeft: theme.spacing(20),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: theme.spacing(1),
      textAlign: "center",
      marginBottom: theme.spacing(2),
    },
  },
  login_btn: {
    backgroundImage: `linear-gradient(to left , #a31100,#a31100)`,
    width: "70%",
    borderRadius: "40px",
    marginTop: theme.spacing(3),
    color: "#ffffff",
    fontSize: "20px",
    padding: "5px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: theme.spacing(1),
      textAlign: "center",
      fontSize: "15px",
      marginBottom: theme.spacing(2),
    },
  },
  "@keyframes popup": {
    "0%": {
      transform: "scale(0.2)",
    },

    "100%": {
      transform: "scale(1)",
    },
  },

  body2: {
    fontFamily: "Inter, sans-serif",
    width: "100%",
  },
  text_box_container: {
    backgroundColor: "#ffffff",
    textAlign: "center",
    width: "80%",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(5),
    color: "black",
  },
  heading: {
    fontFamily: "Inter, sans-serif",
    fontWeight: "bold",
    lineHeight: "130%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "35px",
    },
  },
  body1: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    marginTop: theme.spacing(3),
    fontSize: "100%",
    maxHeight: "1280px",
    maxWidth: "1920px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  img_box: {
    backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.4) ,rgba(0,0,0,0.4)),url(${Img_1})`,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "500px",
    textAlign: "center",
    color: "#ffffff",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },
  //   login_btn: {
  //     backgroundImage: `linear-gradient(to left , #a31100,#a31100)`,
  //     width: "20%",
  //     borderRadius: "40px",
  //     marginTop: theme.spacing(5),
  //     color: "#ffffff",
  //     fontSize: "20px",
  //     padding: "5px",
  //     [theme.breakpoints.down("sm")]: {
  //       width: "80%",
  //     },
  //   },
  ModelMangerbtn: {
    width: "250px",
    height: "40px",
    backgroundImage: `linear-gradient(to left , #a31100,#a31100)`,
    borderRadius: "20px",
    color: "#ffffff",
    fontSize: "20px",
    padding: "5px",
  },
  getStartBtn: {
    width: "220px",
    height: "40px",
    backgroundImage: `linear-gradient(to left , #a31100,#a31100)`,
    borderRadius: "20px",
    color: "#ffffff",
    fontSize: "20px",
    padding: "5px",
    marginTop: theme.spacing(3),
  },
  footer: {
    color: "black",
    width: "100%",
    padding: "10px 30px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export default useStyles;
