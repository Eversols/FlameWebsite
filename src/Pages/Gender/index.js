/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, Container, Radio, Typography } from "@mui/material";
import React from "react";
import bgFrame from "../../Assets/images/bg_frame.svg";
import genderFemale from "../../Assets/images/female.svg";
import flameLogo from "../../Assets/images/flame logo.svg";
import genderMale from "../../Assets/images/male.svg";
import useStyles from "./style";

const index = () => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    console.log(event.target.name, "hhh");
    setSelectedValue(event.target.value);
  };

  console.log("ff", selectedValue);

  return (
    <>
      <img src={flameLogo} className={classes.logo} />
      <img src={bgFrame} className={classes.gender_bg} />

      <Container className={classes.container}>
        <Container className={classes.paragraph_container}>
          <Typography variant="h4" className={classes.heading1}>
            Welcome to Flame
          </Typography>
          <Typography variant="h6" className={classes.heading2}>
            here are few quick questions
          </Typography>
          <Typography variant="h4" className={classes.heading1}>
            What is your gender?
          </Typography>
        </Container>

        <Box className={classes.mainWrapper}>
          <Box className={classes.genderWrapper}>
            <img src={genderMale} className={classes.male} />
            <Typography variant="h6" className={classes.heading2}>
              Male
            </Typography>
            <Radio
              checked={selectedValue === "a"}
              onChange={() => handleChange()}
              value="a"
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
            />
          </Box>

          <Box className={classes.genderWrapper}>
            <img src={genderFemale} className={classes.female} />
            <Typography variant="h6" className={classes.heading2}>
              Female
            </Typography>
            <Radio
              checked={selectedValue === "b"}
              onChange={() => handleChange()}
              value="b"
              name="radio-buttons"
              inputProps={{ "aria-label": "B" }}
            />
          </Box>
        </Box>

        <Button
          type="submit"
          //   onClick={confirmSubmit}
          variant="contained"
          className={classes.btn}
        >
          next
        </Button>
      </Container>
    </>
  );
};

export default index;
