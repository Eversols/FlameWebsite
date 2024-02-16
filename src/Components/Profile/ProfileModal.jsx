import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import flameLogo from '../../Assets/images/flame logo.svg';
import { setProfileModel } from '../../Services/store/authSlice';
import ProfileTabs from './ProfileTabs';
import useStyles from './style';

// ---------Component style------------

const mainContainer = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  // height: "100%",
  width: '100%',
};

const ProfileModal = () => {
  const { profileModel } = useSelector((state) => state.auth);
  const theme = useTheme();
  const dispatch = useDispatch();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const classes = useStyles();
  const handleClose = (e) => dispatch(setProfileModel(!profileModel));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={profileModel}
      aria-labelledby="responsive-dialog-title"
      onClose={handleClose}
      sx={{
        '& .MuiDialog-paper': {
          maxWidth: { xs: '100%', sm: '600px', md: '680px' },
          width: '100%',
          minHeight: '500px',
          height: '100%',
          maxHeight: { xs: '100vh', sm: '600px' },
          background: '#fff',
          boxShadow: 'none',
          borderRadius: { xs: 0, sm: '24px' },
        },
        '& .MuiDialog-container': {
          background: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(10px)',
        },
      }}
    >
      {!isSmallScreen && (
        <Box
          sx={{
            position: 'absolute',
            right: 9,
            top: 8,
            cursor: 'pointer',
            zIndex: 1,
          }}
          data-cy={`activity-close`}
          onClick={handleClose}
        >
          <IconButton sx={{ width: '35px', height: '35px' }}>
            <CloseIcon sx={{ fill: '#AAAAAA', width: '20px' }} />
          </IconButton>
        </Box>
      )}
      {isSmallScreen && (
        <Box className={classes.drawer_header_wrapper}>
          <img src={flameLogo} className={classes.logo} />
          <IconButton sx={{ width: '35px', height: '35px' }}>
            <CloseIcon sx={{ fill: '#AAAAAA', width: '20px' }} />
          </IconButton>
        </Box>
      )}

      <Box sx={mainContainer}>
        <ProfileTabs />
      </Box>
    </Dialog>
  );
};

export default ProfileModal;
