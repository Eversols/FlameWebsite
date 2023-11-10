import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import RechargeTabs from "./RechargeTabs";

// ---------Component style------------

const mainContainer = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "100%",
};

const RechargeModal = () => {
  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = (e) => {};

  return (
    <Dialog
      fullScreen={fullScreen}
      open={false}
      aria-labelledby="responsive-dialog-title"
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          width: { xs: "280px", sm: "400px", md: "780px" },
          maxHeight: "600px",
          minHeight: "500px",
          height: "100%",
          background: "#fff",
          boxShadow: "none",
          borderRadius: "24px",
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

      <Box sx={mainContainer}>
        <RechargeTabs />
      </Box>
    </Dialog>
  );
};

export default RechargeModal;
