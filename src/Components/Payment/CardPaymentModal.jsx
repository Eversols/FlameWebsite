import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import { setPaymentModel, setProfileModel } from '../../Services/store/authSlice';
import CardPaymentForm from './CardPaymentForm';
import { useTranslation } from 'react-i18next';

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

const CardPaymentModal = () => {
  const { paymentModel } = useSelector((state) => state.auth);
  const theme = useTheme();
  const dispatch = useDispatch();

  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const {t} = useTranslation();                             
  const handleClose = (e) => dispatch(setPaymentModel(!paymentModel));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={paymentModel}
      aria-labelledby="responsive-dialog-title"
      onClose={handleClose}
      sx={{
        '& .MuiDialog-paper': {
          maxWidth: { xs: '100%', sm: '600px', md: '780px' },
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
        // onClick={handleClose}
      >
        <Typography
          variant="body1"
          component="span"
          color="#000"
          fontFamily="Inter, sans-serif"
          fontSize={"22px"}
          fontWeight={700}
          ml={2}
        >
          {t("Card Payment")}
        </Typography>

        <IconButton sx={{ width: '35px', height: '35px' }}>
          <CloseIcon sx={{ fill: '#AAAAA', width: '20px' }} />
        </IconButton>
      </Box>

      <Box sx={mainContainer}>
        <CardPaymentForm />
      </Box>
    </Dialog>
  );
};

export default CardPaymentModal;
