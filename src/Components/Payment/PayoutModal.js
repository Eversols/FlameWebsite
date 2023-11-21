import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setProfileModel } from "../../Services/store/authSlice";
import ProfileTabs from "./ProfileTabs";

// ---------Component style------------

const mainContainer = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  // height: "100%",
  width: "100%",
};

const PayoutModal = () => {
  const { profileModel } = useSelector((state) => state.auth);
  const theme = useTheme();
  const dispatch = useDispatch();

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
          width: { xs: "280px", sm: "450px", md: "650px" },
          maxWidth: "900px",
          maxHeight: "600px",
          minHeight: "500px",
          height: "100%",
          background: "#fff",
          boxShadow: "none",
          borderRadius: "10px",
        },
        "& .MuiDialog-container": {
          background: "rgba(255, 255, 255, 0.02)",
          backdropFilter: "blur(10px)",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: 9,
          top: 8,
          cursor: "pointer",
          zIndex: 1,
        }}
        data-cy={`activity-close`}
        onClick={handleClose}
      >
        <IconButton sx={{ width: "35px", height: "35px" }}>
          <CloseIcon sx={{ fill: "#AAAAAA", width: "20px" }} />
        </IconButton>
      </Box>

      <Box sx={mainContainer}></Box>
    </Dialog>
  );
};

export default PayoutModal;
