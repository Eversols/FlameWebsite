import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import useStyles from "./style";

// ---------Component style------------

const LogoutModal = () => {
  const theme = useTheme();
  const classes = useStyles();
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
          maxWidth: "290px",
          width: "100%",
          maxHeight: "160px",
          minHeight: "160px",
          height: "100%",
          background: "#fff",
          boxShadow: "none",
          borderRadius: "8px",
        },
        "& .MuiDialog-container": {
          background: "rgba(255, 255, 255, 0.02)",
          backdropFilter: "blur(10px)",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          height: "45px",
          display: "flex",
          textTransform: "lowercase",
          background: "#FB1F43",
          color: "#FFFFFF",
          fontWeight: 600,
          fontSize: "16px",
        }}
        data-cy={`activity-close`}
        // onClick={handleClose}
      >
        Confirm Logout
      </Box>

      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          maxWidth: "200px",
          gap: "15px",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <Button variant="contained" className={classes.btn}>
          Logout
        </Button>
        <Button variant="contained" className={classes.btnCancel}>
          Cancel
        </Button>
      </Box>
    </Dialog>
  );
};

export default LogoutModal;
