/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

import useStyles from "./style";
import CustomCard from "../../Components/CustomCard";
import { Button, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { get } from "../../Services/api";
import { setRegion } from "../../Services/store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const index = () => {
  const { role } = useSelector((state) => state.auth);
  const [selected, setSelected] = useState("");
  const [regions, setRegions] = useState([]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    get("/getRegion")
      .then((res) => {
        if (res.data.result) {
          setRegions(res.data.data);
        }
      })
      .catch((err) => {});
  }, []);

  const confirmSubmit = () => {
    if (selected) {
      dispatch(setRegion(selected));
      navigate(`/${role}/home`);
    }
  };
  return (
      <Container className={classes.container}>
        <Container className={classes.paragraph_container}>
          <Typography variant="h4" className={classes.heading1}>
            Where do you want to meet people from?
          </Typography>
          <Typography variant="h6" className={classes.heading2}>
            "We'll match you with the women who are in the same mood as you"
          </Typography>
        </Container>
        <Container className={classes.regionscontainer}>
          {regions.length > 0 &&
            regions
              .slice(0, 4)
              .map((item, i) => (
                <CustomCard
                  key={i}
                  index={i}
                  id={item.id}
                  url={item.url}
                  text={item.region}
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
