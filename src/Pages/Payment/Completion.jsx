import { Button, Container, Typography } from "@mui/material";
import React from "react";
import useStyles from "./style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

const Completion = () => {
  const { role } = useSelector((state) => state.auth);
  const [messageBody, setMessageBody] = useState("");
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Container className={classes.container}>
      <Typography variant="h2" className={classes.heading}>
        Thank you!
      </Typography>
      <Button
        type="button"
        onClick={() => navigate(`/${role}/home`)}
        variant="contained"
        className={classes.btn}
      >
        Home
      </Button>
      <div
        id="messages"
        role="alert"
        style={messageBody ? { display: "block" } : {}}
      >
        {messageBody}
      </div>
    </Container>
  );
};

export default Completion;
