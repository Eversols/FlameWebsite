/* eslint-disable react/prop-types */
import {
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React from "react";
import CallEndIcon from "@mui/icons-material/CallEnd";
import CallIcon from "@mui/icons-material/Call";
import useStyles from "./style";

const IncomingCallDialog = ({
  callingUser,
  onAnswer,
  onReject,
}) => {
  const classes = useStyles();
  return (
    <Dialog open={true} className={classes.root}>
      <DialogTitle>Incoming Call</DialogTitle>
      {callingUser && (
        <DialogContent>
          <DialogContentText>
            Incoming call from {callingUser?.first_name ?? ""}
          </DialogContentText>
          <Avatar
            alt={callingUser?.first_name}
            src={`https://theflame.life/livebk/public/uploads/${callingUser.photo}`}
            sx={{ width: 100, height: 100, margin: "0 auto" }}
          />
        </DialogContent>
      )}
      <DialogActions>
        <IconButton
          className={classes.acceptCallBtn}
          variant="contained"
          label="Accept"
          onClick={onAnswer}
        >
          <CallIcon />
        </IconButton>
        <IconButton
          className={classes.rejectCallBtn}
          variant="contained"
          label="Reject"
          onClick={onReject}
        >
          <CallEndIcon />
        </IconButton>
      </DialogActions>
    </Dialog>
  );
};

export default IncomingCallDialog;
