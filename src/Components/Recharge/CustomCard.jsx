/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import useStyles from "./style";

const CustomCard = ({ price, description, text, onSelect }) => {
  const classes = useStyles();
  return (
    <Card className={classes.cardContainer}>
      <CardContent>
        <Typography
          className={classes.cardTitle}
          color="text.secondary"
          gutterBottom
        >
          $ {price}
        </Typography>
        <Typography
          className={classes.cardDesc}
          color="text.secondary"
          gutterBottom
        >
          {description} <Typography component="span">{text}</Typography>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="medium"
          fullWidth
          className={classes.cardBtn}
          onClick={onSelect}
        >
          Select
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
