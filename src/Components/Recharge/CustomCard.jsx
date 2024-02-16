/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import colorCircle from '../../Assets/images/colorcirlce.svg';
import greyCircle from '../../Assets/images/greycircle.svg';
import useStyles from './style';
import moment from 'moment'

const CustomCard = ({ price, description, expires, text, onSelect, isSelected }) => {
  const classes = useStyles(isSelected);
  return (
    <Card className={classes.cardContainer} onClick={onSelect}>
      <Box className={classes.detail_wrapper}>
        <IconButton >
          {isSelected ? (
            <img
              src={colorCircle}
              className={classes.circleImage}
              alt="no image"
            />
          ) : (
            <img src={greyCircle} className={classes.circleImage} />
          )}
        </IconButton>
        <Typography className={classes.cardDesc} color="text.secondary">
          {description || 'no'}
        </Typography>
        <Typography className={classes.cardText}>&nbsp;&nbsp;{text}</Typography>
      </Box>

      <Typography
        className={classes.cardTitle}
        color="text.secondary"
        gutterBottom
      >
        $ {price || 'no'}
      </Typography>
     {expires && <Typography
        className={classes.cardTitle2}
        color="text.secondary"
        gutterBottom
      >
        expires in {moment(expires).diff(moment().format('YYYY-MM-DD'),'days')}
      </Typography>}
    </Card>
  );
};

export default CustomCard;
