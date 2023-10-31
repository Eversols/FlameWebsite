/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import flirting from "../../Assets/images/flirting.jpg";
import love from "../../Assets/images/love.jpg";
import discover from "../../Assets/images/discover.jpg";
import useStyles from "./style";

const img = [flirting, love, discover];

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
      <Box className={classes.text}>
        <Typography className={classes.text1}>{text}</Typography>
        {description && (
          <Typography className={classes.text2}>{description}</Typography>
        )}
      </Box>
    </Container>
  );
};

export default index;
