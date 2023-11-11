/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import bgFrame from "../../Assets/images/bg_frame.svg";
import checkedBox from "../../Assets/images/checkedBox.svg";
import flameLogo from "../../Assets/images/flame logo.svg";
import uncheckedBox from "../../Assets/images/uncheckedBox.svg";
import useStyles from "./style";

const values = [
  { number: "a", label: "Straight" },
  { number: "b", label: "Gay" },
  { number: "c", label: "Lesbian" },
  { number: "d", label: "Bisexual" },
  { number: "e", label: "Other" },
];

const index = () => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (number) => {
    setSelectedValue(number);
  };
  console.log("ff", selectedValue);

  return (
    <>
      <img src={flameLogo} className={classes.logo} />
      <img src={bgFrame} className={classes.gender_bg} />

      <Container className={classes.container}>
        <Typography variant="h4" className={classes.heading1}>
          Your sexual orientation
        </Typography>

        <Box className={classes.checkBoxWrapper}>
          {values.map((item, index) => (
            <Box
              key={index}
              className={classes.checkBox}
              sx={{ display: "flex", gap: "10px", alignItems: "center" }}
            >
              <IconButton
                disableRipple
                onClick={() => handleChange(item.number)}
              >
                <img
                  src={
                    selectedValue === item.number ? checkedBox : uncheckedBox
                  }
                  style={{ maxWidth: "15px" }}
                  alt={selectedValue === item.number ? "Checked" : "Unchecked"}
                />
              </IconButton>
              <Typography variant="h4" className={classes.checkBoxLabel}>
                {item.label}
              </Typography>
            </Box>
          ))}
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
