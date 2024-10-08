import { makeStyles } from '@mui/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useParams } from 'react-router-dom';

// import BackgroundGradient from "../Assets/images/background_gradient.png";

const useStyles = makeStyles((theme) => ({
  body: {
    width: '100%',
    minHeight: '100vh',
    position: 'relative',
    height: '100%',
    // backgroundImage: `url(${BackgroundGradient})`,
    backgroundSize: 'cover',
    background: '#ffff',
    display: 'flex',
    justifyContent: 'center',
    // alignItems: "center",
    overflow: 'hidden',
  },
}));
const Layout = () => {
  const { role } = useParams();
  const { role: userRole } = useSelector((state) => state.auth);
  const classes = useStyles();

  // if (!(role === userRole)) {
  //   return <Navigate to="/" />;
  // }
  return (
    <div className={classes.body}>
      <Outlet />
    </div>
  );
};

export default Layout;
