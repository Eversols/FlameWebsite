/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Slide,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRechargeModel } from "../../Services/store/authSlice";
import { useTranslation } from "react-i18next";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const WorningDilog = ({ dialog, setDialog }) => {
  const { role } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation()
  return (
    <Dialog
      open={dialog}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <DialogContentText
          sx={{ fontSize: 18, fontWeight: "bold" }}
          id="alert-dialog-slide-description"
        >
          {t("You do not have enough messages and minutes. Would you like to purchase more messages and minutes")}?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={() => setDialog(false)}>
          {t("No")}
        </Button>
        <Button
          color="success"
          onClick={() => {
            // navigate(`/${role}/recharge`);
            dispatch(setRechargeModel(true))
            setDialog(false);

          }}
        >
          {t("Yes")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WorningDilog;
