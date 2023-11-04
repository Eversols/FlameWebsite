/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Container, Radio, Typography } from "@mui/material";
import React from "react";
import africa from "../../Assets/images/africa.svg";
import asia from "../../Assets/images/asia.svg";
import checkradio from "../../Assets/images/checkradio.svg";
import euorpe from "../../Assets/images/euorpe.svg";
import sasia from "../../Assets/images/sasia.svg";
import uncheckradio from "../../Assets/images/uncheckradio.svg";
import useStyles from "./styleCard";

const img = [euorpe, asia, sasia, africa];
const name = ["Euorpe", "Asia", "S. Asia", "S. Africa"];
const index = ({
  index,
  id,
  url,
  text,
  description,
  selected,
  setSelected,
}) => {
  const classes = useStyles();
  return (
    <Container
      key={index}
      className={selected === id ? classes.selected : classes.unselected}
      onClick={() => setSelected(id)}
    >
      <img src={img[id]} className={classes.img} />
      <Box className={classes.divider}></Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          gap: "10px",
          flexDirection: "column",
        }}
      >
        <Box className={classes.name}>
          <Typography className={classes.text1}>{name[id]}</Typography>
        </Box>{" "}
        <Box className={classes.name}>
          <img src={checkradio} className={classes.checkbox} />
          <img src={uncheckradio} className={classes.uncheckbox} />
        </Box>
      </Box>
      <Box className={classes.divider}></Box>
      {/* {description && (
          <Typography className={classes.text2}> */}
      {/* {description}   */}
      {/* </Typography>
        )} */}
    </Container>
  );
};

export default index;
