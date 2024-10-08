import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  points_btn: {
    color: ' #FB1F43',
    backgroundColor: '#e1b3bb',
    fontFamily: 'Inter, sans-serif',
    borderRadius: '6px',
    fontWeight: 600,
    fontSize: '14px',
    padding: '8px 30px 8px 30px',
    textTransform: 'capitalize',

    '&:hover': {
      backgroundColor: '#dc697c',
    },
  },
  confirm_btn: {
    backgroundColor: '#FB1F43',
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    borderRadius: '6px',
    fontWeight: 600,
    fontSize: '14px',
    padding: '8px 30px 8px 30px',
    textTransform: 'capitalize',
    [theme.breakpoints.down('md')]: {
      padding: '4px 12px',
    },
    '&:hover': {
      backgroundColor: '#dc697c',
    },
  },

  text_container: {
    backgroundColor: 'white',
    color: '#828282',
    fontFamily: 'Inter, sans-serif',
    borderRadius: '8px',
    width: '100%',
    display: 'flex',
    fontWeight: 400,
    fontSize: '14px',
    padding: ' 13px 15px',
    textTransform: 'capitalize',
    border: '1px solid #868AA9',
  },

  label: {
    fontFamily: 'Inter, sans-serif',
    color: '#333333',
    fontWeight: 400,
    fontSize: '12px',
    textTransform: 'capitalize',
    marginBottom: '5px',
  },

  logo: {
    maxWidth: '170px',
  },

  drawer_header_wrapper: {
    display: 'flex',
    width: '100%',
    padding: '16px 8px',
    gap: 2,
    justifyContent: 'space-between',
  },

  circleImage: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '40px',
  },
  circle: {
    width: '100%',
    maxWidth: '110px',
    position: 'relative',
    borderRadius: '50%',
    height: '110px',
  },
  text: {
    fontSize: '24px',
    fontWeight: 600,
    fontFamily: 'Inter, sans-serif',
  },
  textContainer: {
    margin: '20px auto 0px auto',
    maxWidth: '420px',
    width: '100%',
    textAlign: 'center',
  },

  btn1: {
    width: 'auto',
    height: '44px',
    backgroundColor: '#FB1F43',
    color: '#ffffff',
    fontWeight: '500',
    borderRadius: '10px',
    paddingInline:'32px',
    fontFamily: 'Inter, Montserrat, sans-serif',
    '&:hover': {
      backgroundColor: '#dc697c',
    },
  },
  btn2: {
    width: 'auto',
    height: '44px',
    backgroundColor: '#FB1F43',
    color: '#ffffff',
    fontWeight: '500',
    borderRadius: '10px',
    paddingInline:'32px',
    fontFamily: 'Inter, Montserrat, sans-serif',
    '&:hover': {
      backgroundColor: '#dc697c',
    },
  },
  text2: {
    fontSize: '16px',
    fontWeight: 400,
    fontFamily: 'Inter, sans-serif',
    color: '#3A4159',
  },

  checkBoxLabel: {
    color: 'black',
    fontSize: '14px',
    fontWeight: 400,
    fontFamily: 'Inter, sans-serif',
  },

  input1: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: '10px',
        border: 'none',
      },

      '&:hover fieldset': {
        borderRadius: '10px',
        border: 'none',
      },
      '&.Mui-focused fieldset': {
        borderRadius: '10px',
        border: 'none',
        outline: 'none',
      },
      '&.Mui-disabled fieldset': {
        borderRadius: '10px',
        border: 'none',
      },

      border: 'none',
      borderRadius: '6px',

      backgroundColor: '#F2F2F2',
      color: '#828282',
      fontSize: '14px',
      fontWeight: 400,
      width: '100%',
      height: '40px',
      '& .MuiOutlinedInput-input': {
        padding: '18px 16px 18px 16px',
        '&::placeholder': {
          color: '#828282',
        },
      },
    },
  },
  error: {
    fontFamily: "Inter, sans-serif",
    fontWeight: "regular",
    fontSize: "12px",
    color: "red",
    // position: "absolute",
  },
  checkBox: {
    color: '#FB1F43', // Custom color
    '&.Mui-checked': {
      color: '#FB1F43', // Custom color when checked
    },

  },
  btn: {
    background: "#FB1F43",
    color: "#ffff",
    fontSize: 14,
    fontWeight: 600,
    textTransform: "capitalize",
    width: "100%",
    height: "35px",
    maxWidth: "80px",

    "&:hover": {
      background: " #FB6B83",
    },
  },

  btnCancel: {
    background: " #ea97a54a",
    color: "#FB1F43",
    height: "35px",
    boxShadow: "none",
    width: "100%",
    maxWidth: "80px",
    fontSize: 14,
    textTransform: "capitalize",
    fontWeight: 600,
    "&:hover": {
      background: " #ea97a54a",
    },
  },
}));

export default useStyles;
