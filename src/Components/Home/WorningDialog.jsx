/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRechargeModel } from "../../Services/store/authSlice";
import { useTranslation } from "react-i18next";
import useStyles from "./style";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const WorningDilog = ({ dialog, setDialog, }) => {
  const { role } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation()
  const classes = useStyles();
  return (
    <Dialog
      open={dialog.open}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
      sx={{
        "& .MuiDialog-paper": {
          width: { xs: "100%", sm: "60%", md: "40%", lg: "30%" },
          height: dialog.description ? "24%" : '18%',
          background: "#ffff",
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
        onClick={() => setDialog((prev) => ({ ...prev, open: false }))}
      >
        <Box sx={{ width: "42px" }}></Box>
        <Typography
          variant="body1"
          component="span"
          color="#ffff"
          fontFamily="Inter, sans-serif"
          fontWeight={400}
          textAlign={"center"}
          ml={2}
          py={2}
          width={400}
        >
          {t(dialog.title)}
        </Typography>

        <IconButton sx={{ width: "35px", height: "35px" }}>
          <CloseIcon sx={{ fill: "#ffff", width: "20px" }} />
        </IconButton>
      </Box>
      <DialogContent>
        <DialogContentText
          sx={{ fontSize: 16, fontWeight: "bold", textAlign: "center", marginTop: '72px', overflow: 'hidden' }}
          id="alert-dialog-slide-description"
        >
          {t(dialog.description)}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ marginBottom: '12px'}}>

        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
          <Button
            onClick={() => dialog.action()}
            variant="contained"
            type="submit"
            className={classes.btn2}
          >
            {t("Yes")}
          </Button>
          <Button
            onClick={() => setDialog((prev) => ({ ...prev, open: false }))}
            variant="contained"
            type="submit"
            className={classes.btn2}
          >
            {t("No")}
          </Button>
        </Box>

      </DialogActions >
    </Dialog >
  );
};

export default WorningDilog;
