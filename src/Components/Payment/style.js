import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  points_btn: {
    color: " #FB1F43",
    backgroundColor: "#e1b3bb",
    fontFamily: "Inter, sans-serif",
    borderRadius: "6px",
    fontWeight: 600,
    fontSize: "14px",
    padding: "8px 30px 8px 30px",
    textTransform: "capitalize",

    "&:hover": {
      backgroundColor: "#dc697c",
    },
  },
  confirm_btn: {
    backgroundColor: "#FB1F43",
    color: "#ffffff",
    fontFamily: "Inter, sans-serif",
    borderRadius: "6px",
    fontWeight: 600,
    fontSize: "14px",
    padding: "8px 30px 8px 30px",
    textTransform: "capitalize",
    [theme.breakpoints.down("md")]: {
      padding: "4px 12px",
    },
    "&:hover": {
      backgroundColor: "#dc697c",
    },
  },

  text_container: {
    backgroundColor: "white",
    color: "#828282",
    fontFamily: "Inter, sans-serif",
    borderRadius: "8px",
    width: "100%",
    display: "flex",
    fontWeight: 400,
    fontSize: "14px",
    padding: " 13px 15px",
    textTransform: "capitalize",
    border: "1px solid #868AA9",
  },

  label: {
    fontFamily: "Inter, sans-serif",
    color: "#3A4159",
    fontWeight: 600,
    fontSize: "14px",
    textTransform: "capitalize",
  },

  logo: {
    maxWidth: "170px",
  },

  drawer_header_wrapper: {
    display: "flex",
    width: "100%",
    padding: "16px 8px",
    gap: 2,
    justifyContent: "space-between",
  },
}));

export default useStyles;
