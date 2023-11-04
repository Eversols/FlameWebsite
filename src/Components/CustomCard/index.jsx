/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import casual from "../../Assets/images/casual.svg";
import love from "../../Assets/images/love.svg";
import see from "../../Assets/images/see.svg";
import useStyles from "./style";

const img = [casual, love, see];

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
        <Box className={classes.text}>
          <Typography className={classes.text1}>
            hhh
            {/* {text} */}
          </Typography>
        </Box>{" "}
        <Box className={classes.text}>
          <Typography className={classes.text2}>
            {/* {description}   */}KKKK
          </Typography>
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
