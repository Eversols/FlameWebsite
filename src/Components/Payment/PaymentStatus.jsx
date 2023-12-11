import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import FailureIcon from '../../Assets/images/failureIcon.svg';
import SuccessIcon from '../../Assets/images/successIcon.svg';
import useStyles from './style';
const PaymentStatus = () => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          //   background: '#FF8688',
          background: '#8BD592',
        }}
        className={classes.circle}
      >
        <img src={SuccessIcon} className={classes.circleImage} alt="no image" />
        {/* <img src={FailureIcon} className={classes.circleImage} alt="no image" /> */}
      </Box>
      <Box className={classes.textContainer}>
        <Typography className={classes.text}>
          Payment Done!
          {/* Payment Failed */}
        </Typography>
      </Box>
      <Box className={classes.textContainer}>
        <Typography className={classes.text2}>
          Thank you for completing your secure online payment. Have a great day!
          {/* 
          Unfortunately payment was rejected */}
        </Typography>
      </Box>
      <Box className={classes.textContainer}>
        <Button
          // onClick={onSelect}
          variant="contained"
          className={classes.btn}
        >
          Confirm
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentStatus;
