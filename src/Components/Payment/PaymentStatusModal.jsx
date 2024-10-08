import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// import { useDispatch, useSelector } from 'react-redux';
// import { setProfileModel } from '../../Services/store/authSlice';
import PaymentStatus from './PaymentStatus';

// ---------Component style------------

const mainContainer = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
};

const PaymentStatusModal = () => {
  //   const { profileModel } = useSelector((state) => state?.auth);
  const theme = useTheme();
  //   const dispatch = useDispatch();

  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = (e) => {
    //    dispatch(setProfileModel(!profileModel));
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={false}
      aria-labelledby="responsive-dialog-title"
      onClose={handleClose}
      sx={{
        '& .MuiDialog-paper': {
          width: { xs: '280px', sm: '450px', md: '550px' },
          maxWidth: '900px',
          maxHeight: '450px',
          minHeight: '450px',
          height: '100%',
          background: '#fff',
          boxShadow: 'none',
          borderRadius: '10px',
        },
        '& .MuiDialog-container': {
          background: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(10px)',
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          background: '#ffff',
          cursor: 'pointer',
          zIndex: 1,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: '10px',
        }}
        data-cy={`activity-close`}
        onClick={handleClose}
      >
        <Typography
          variant="body1"
          component="span"
          color="#000"
          fontFamily="Inter, sans-serif"
          fontWeight={700}
          ml={2}
        >
          Card Payment
        </Typography>

        <IconButton sx={{ width: '35px', height: '35px' }}>
          <CloseIcon sx={{ fill: '#AAAAA', width: '20px' }} />
        </IconButton>
      </Box>

      <Box sx={mainContainer}>
        <PaymentStatus />
      </Box>
    </Dialog>
  );
};

export default PaymentStatusModal;
