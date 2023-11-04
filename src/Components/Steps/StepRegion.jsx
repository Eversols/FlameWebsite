/* eslint-disable react-hooks/rules-of-hooks */
import { Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import bgFrame from "../../Assets/images/bg_frame.svg";
import flameLogo from "../../Assets/images/flame logo.svg";
import CustomCard2 from "../../Components/CustomCard/CustomCard2";
import useStyles from "../../Pages/Region/style";
import { get } from "../../Services/api";
import { setRegion } from "../../Services/store/authSlice";

const StepRegion = () => {
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
    <>
      <img src={flameLogo} className={classes.logo} />
      <img src={bgFrame} className={classes.gender_bg} />
      <Container className={classes.container}>
        <Container className={classes.paragraph_container}>
          <Typography variant="h4" className={classes.heading1}>
            Where do you want to meet people from?
          </Typography>
        </Container>
        <Container className={classes.regionscontainer}>
          {/* {regions.length > 0 &&
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
              ))} */}

          {[...Array(4)].map((_, i) => (
            <CustomCard2
              key={i}
              index={i}
              id={i}

              // url={item.url}
              // text={item.region}
              // description={item.description}
              // selected={selected}
              // setSelected={setSelected}
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
    </>
  );
};

export default StepRegion;
