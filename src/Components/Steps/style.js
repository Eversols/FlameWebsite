import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    
    container: {
        width: '40%',
        height: '50%',
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: '15px',
        border: '1px solid white',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        animation: `$popup 500ms ${theme.transitions.easing.easeInOut}`,
        [theme.breakpoints.down('md')]: {
            height: '30%',
            width: '70%',
        },
        [theme.breakpoints.down('sm')]: {
            height: '40%',
            width: '70%',
        },

    },
    heading: {
        color: 'black',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 'bold',
        marginTop: '15px',
        [theme.breakpoints.down('md')]: {
            fontSize: '40px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
        }
    },
    input: {
        color: 'black',
        width: '85%',
        height: '50px',
        borderRadius: '15px',
        backgroundColor: 'rgba(255,255,255,0.3)',
        border: 'none',
        textAlign: 'center',
        marginBottom: '15px',
        '&:focus' : {
            outline:'none',
        }  
    },
    btn: {
        width: '30%',
        height: '10%',
        backgroundColor: '#000000',
        color: '#ffffff',
        borderRadius: '30px',
        marginBottom: '10px',
        '&:hover': {
            backgroundColor: '#535353'
        },
        [theme.breakpoints.down('sm')]: {
            width: '45%',
        }
    },
    error: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 'regular',
        fontSize: '12px',
        color: 'red',
    },
    "@keyframes popup": {
        '0%': {
            transform: "scale(0.2)",
        },
        '50%': {
            transform: "scale(1.1)",
        },


        '100%': {
            transform: "scale(1)",
        },
    },
}));

export default useStyles;
