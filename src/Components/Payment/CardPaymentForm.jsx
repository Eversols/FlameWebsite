import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import useStyles from './style';
import checkedBox from '../../Assets/images/checkedBox.svg';
import uncheckedBox from '../../Assets/images/uncheckedBox.svg';
import creditCard from '../../Assets/images/creditcard.svg';
const gridStyle = {
  padding: '10px 20px',
  gap: '15px 25px',
  maxWidth: '100%',
  justifyContent: 'center',
  display: 'flex',
};

const CardPaymentForm = () => {
  const classes = useStyles();
  return (
    <Grid container sx={gridStyle}>
      <Grid
        item
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            gap: '10px',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              width: '40%',
              display: 'flex',
              gap: '10px',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',

                flexDirection: 'column',
              }}
            >
              <Typography variant="h5" className={classes.label}>
                enter points
              </Typography>
              <TextField
                type="text"
                name="language"
                placeholder="your text"
                className={classes.input1}
                fullWidth
              />
            </Box>

            <Box
              sx={{
                width: '100%',
                display: 'flex',

                margin: '20px 0px',
                flexDirection: 'column',
              }}
            >
              <Typography variant="h5" className={classes.label}>
                enter points
              </Typography>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  gap: '20px',
                }}
              >
                <Box sx={{ width: '20%' }}>
                  <TextField
                    type="text"
                    name="language"
                    placeholder="your text"
                    className={classes.input1}
                    fullWidth
                  />
                </Box>
                <Box sx={{ width: '20%' }}>
                  <TextField
                    type="text"
                    name="language"
                    placeholder="your text"
                    className={classes.input1}
                    fullWidth
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{ width: '45%', display: 'flex', justifyContent: 'flex-start' }}
          >
            <Box sx={{ width: '75%' }}>
              <img
                src={creditCard}
                style={{ width: '100%', height: '100%' }}
                alt={'Checked'}
              />
            </Box>
          </Box>
        </Box>

        <Box sx={{ width: '100%', display: 'flex', gap: '10px' }}>
          <Box sx={{ width: '100%', display: 'flex', gap: '10px' }}>
            <Box sx={{ width: '50%' }}>
              <Typography variant="h5" className={classes.label}>
                enter points
              </Typography>
              <TextField
                type="text"
                name="language"
                placeholder="your text"
                className={classes.input1}
                fullWidth
              />
            </Box>
            <Box sx={{ width: '20%' }}>
              <Typography variant="h5" className={classes.label}>
                enter points
              </Typography>
              <TextField
                type="text"
                name="language"
                placeholder="your text"
                className={classes.input1}
                fullWidth
              />
            </Box>
          </Box>
        </Box>
      </Grid>

      <Grid item sx={{ width: '100%', marginTop: '20px' }}>
        <Box
          className={classes.checkBox}
          sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}
        >
          <IconButton
            disableRipple
            // onClick={() => handleChange(item.number)}
          >
            <img
              src={checkedBox}
              style={{ maxWidth: '15px' }}
              alt={'Checked'}
            />
          </IconButton>
          <Typography variant="h4" className={classes.checkBoxLabel}>
            By making this payment I confirm I’m 18+ years old, agree Terms and
            Conditions of this purchase, and have read the Privacy Policy
          </Typography>
        </Box>
      </Grid>

      <Grid item sx={{ width: '100%', marginTop: '30px' }}>
        <Box sx={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
          <Button
            // onClick={onSelect}
            variant="contained"
            className={classes.btn1}
          >
            Confirm
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CardPaymentForm;
