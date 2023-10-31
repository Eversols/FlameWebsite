/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import useStyles from "./style";
import { Button, Container, Typography } from "@mui/material";
import CustomCard from "../../Components/CustomCard";
import { useState } from "react";
import { useEffect } from "react";
import { get } from "../../Services/api";
import { useDispatch, useSelector } from "react-redux";
import { setMood } from "../../Services/store/authSlice";
import { useNavigate } from "react-router-dom";

const index = () => {
  const { role } = useSelector((state) => state.auth);
  const [selected, setSelected] = useState("");
  const [moods, setMoods] = useState([]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    get("/getMood")
      .then((res) => {
        if (res.data.result) {
          setMoods(res.data.data);
        }
      })
      .catch((err) => {});
  }, []);

  const confirmSubmit = () => {
    if (selected) {
      dispatch(setMood(selected));
      navigate(`/${role}/region`);
    }
  };

  return (
      <Container className={classes.container}>
        <Container className={classes.paragraph_container}>
          <Typography variant="h4" className={classes.heading1}>
            How Is Your Mood Today?
          </Typography>
          <Typography variant="h6" className={classes.heading2}>
            "We'll match you with the women who are in the same mood as you"
          </Typography>
        </Container>
        <Container className={classes.moodcontainer}>
          {moods.length > 0 &&
            moods
              .slice(0, 3)
              .map((item, i) => (
                <CustomCard
                  key={i}
                  index={i}
                  id={item.id}
                  url={item.url}
                  text={item.mood}
                  description={item.description}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))}
        </Container>
        <Button
          type="submit"
          onClick={confirmSubmit}
          variant="contained"
          className={classes.btn}
        >
          next
        </Button>
      </Container>
  );
};

export default index;
