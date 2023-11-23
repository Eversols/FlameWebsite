import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import flameLogo from "../../Assets/images/flame logo.svg";
import { setProfileModel } from "../../Services/store/authSlice";
import PayoutForm from "./PayoutForm";
import useStyles from "./style";

// ---------Component style------------

const mainContainer = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  marginTop: { xs: "0px", sm: "30px" },
};

const PayoutModal = () => {
  const { profileModel } = useSelector((state) => state.auth);
  const theme = useTheme();
  const dispatch = useDispatch();
  const classes = useStyles();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = (e) => dispatch(setProfileModel(!profileModel));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={true}
      aria-labelledby="responsive-dialog-title"
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          width: { xs: "100%", sm: "450px", md: "620px" },
          maxWidth: "900px",
          maxHeight: { xs: "100vh", sm: "420px" },
          minHeight: "400px",
          height: "100%",
          background: "#ffff",
          boxShadow: "none",
          borderRadius: { xs: 0, sm: "24px" },
        },
        "& .MuiDialog-container": {
          background: "rgba(255, 255, 255, 0.02)",
          backdropFilter: "blur(10px)",
        },
      }}
    >
      {!isSmallScreen && (
        <Box
          sx={{
            position: "absolute",
            background: " #FB1F43",
            cursor: "pointer",
            zIndex: 1,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: "10px",
          }}
          data-cy={`activity-close`}
          onClick={handleClose}
        >
          <Typography
            variant="body1"
            component="span"
            color="#ffff"
            fontFamily="Inter, sans-serif"
            fontWeight={400}
            ml={2}
          >
            Payout
          </Typography>

          <IconButton sx={{ width: "35px", height: "35px" }}>
            <CloseIcon sx={{ fill: "#ffff", width: "20px" }} />
          </IconButton>
        </Box>
      )}

      {isSmallScreen && (
        <Box sx={{ width: "100%" }}>
          <Box className={classes.drawer_header_wrapper}>
            <img src={flameLogo} className={classes.logo} />
            <IconButton sx={{ width: "35px", height: "35px" }}>
              <CloseIcon sx={{ fill: "#AAAAAA", width: "20px" }} />
            </IconButton>
          </Box>
          <Box
            sx={{
              background: " #FB1F43",
              width: "100%",
              display: "flex",
              alignItems: "center",
              p: "16px",
            }}
          >
            <Typography
              variant="body1"
              component="span"
              color="#ffff"
              fontFamily="Inter, sans-serif"
              fontWeight={400}
              ml={2}
            >
              Payout
            </Typography>
          </Box>
        </Box>
      )}

      <Box sx={mainContainer}>
        <PayoutForm />
      </Box>
    </Dialog>
  );
};

export default PayoutModal;
