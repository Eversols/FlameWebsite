import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import ProfileImage from '../../Assets/images/male.jpg';
import volume from '../../Assets/images/volume.svg';
import message from '../../Assets/images/message.svg';
import {
  setPayoutModel,
  setProfileModel,
} from '../../Services/store/authSlice';

import useStyles from './style';

// ---------Component style------------

const CallModal = () => {
  const { payoutModel } = useSelector((state) => state.auth);
  const theme = useTheme();
  const dispatch = useDispatch();
  const classes = useStyles();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = (e) => dispatch(setPayoutModel(!payoutModel));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={false}
      aria-labelledby="responsive-dialog-title"
      onClose={handleClose}
      sx={{
        '& .MuiDialog-paper': {
          maxWidth: '100%',
          width: '100%',
          height: '100%',
          background: '#0A0A0A',
          boxShadow: 'none',
          borderRadius: { xs: 0, sm: '24px' },
        },

        '& .MuiDialog-container': {
          background: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(10px)',
        },
      }}
    >
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        {/* First section with image */}
        <Box
          sx={{
            height: '80%',
            width: '100%',
            padding: '5% 5% 0 5%',
            position: 'relative',
          }}
        >
          <img
            src={ProfileImage}
            alt={`Image`}
            style={{
              height: '100%',
              width: '100%',

              borderRadius: '1%',
            }}
          />
          <Box
            sx={{
              display: 'flex',
              width: '90%',

              justifyContent: 'space-between',
              position: 'absolute',
              height: '15%',
              bottom: 0,
            }}
          >
            {/* <img
              src={volume}
              style={{
                width: '32px',
              }}
              alt={`Image`}
            /> */}

            <img
              src={message}
              style={{
                width: '25px',
              }}
              alt={`Image`}
            />
            <img
              src={message}
              style={{
                maxWidth: '95px',
              }}
              alt={`Image`}
            />
          </Box>
        </Box>

        {/* Second section with text */}
        <Box
          sx={{
            height: '20%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              maxWidth: { xs: '65%', sm: '40%' },
              margin: ' 0 auto',
            }}
          >
            {/* <img
              src={volume}
              style={{
                width: '32px',
              }}
              alt={`Image`}
            /> */}
            <IconButton color="primary" className={classes.chatbox}>
              <img
                src={message}
                style={{
                  width: '25px',
                }}
                alt={`Image`}
              />
            </IconButton>

            <IconButton color="primary" className={classes.chatbox}>
              <img
                src={message}
                style={{
                  width: '25px',
                }}
                alt={`Image`}
              />
            </IconButton>
            <IconButton color="primary" className={classes.chatbox}>
              <img
                src={message}
                style={{
                  width: '25px',
                }}
                alt={`Image`}
              />
            </IconButton>
            <IconButton color="primary" className={classes.chatbox}>
              <img
                src={message}
                style={{
                  width: '25px',
                }}
                alt={`Image`}
              />
            </IconButton>
            <Box sx={{ marginLeft: '20px' }}>
              <IconButton color="primary" className={classes.chatbox}>
                <img
                  src={message}
                  style={{
                    width: '25px',
                  }}
                  alt={`Image`}
                />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default CallModal;
