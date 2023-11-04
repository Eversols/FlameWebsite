/* eslint-disable react/prop-types */
import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../Services/store/authSlice";
import useStyles from "./style";

const StepName = ({ onNext }) => {
  const [name, setName] = useState("");
  const { error } = useSelector((state) => state.auth);
  const classes = useStyles();
  const dispatch = useDispatch();
  const confirmSubmit = async (e) => {
    if (name) {
      dispatch(setUser({ displayName: name }));
      onNext();
    }
  };
  return (
    <Box className={classes.mainBox}>
      <Container className={classes.container}>
        <Typography variant="h5" className={classes.heading}>
          Ready to find your next?
        </Typography>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className={classes.input}
        />
        {error && <p className={classes.error}>{error}</p>}
        <Button
          type="button"
          onClick={confirmSubmit}
          variant="contained"
          className={classes.btn}
        >
          next
        </Button>
      </Container>
    </Box>
  );
};

export default StepName;
