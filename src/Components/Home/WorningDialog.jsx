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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const WorningDilog = ({ dialog, setDialog }) => {
  const { role } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
          You do not have enough messages. Would you like to purchase more
          messages?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={() => setDialog(false)}>
          No
        </Button>
        <Button
          color="success"
          onClick={() => {
            // navigate(`/${role}/recharge`);
            dispatch(setRechargeModel(true))
            setDialog(false);

          }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WorningDilog;
