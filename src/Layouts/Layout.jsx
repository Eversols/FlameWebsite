import { makeStyles } from "@mui/styles";
import React from "react";
import BackgroundGradient from "../Assets/images/background_gradient.png";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  body: {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${BackgroundGradient})`,
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
const Layout = () => {
  const { role } = useParams();
  const { role: userRole,  } = useSelector((state) => state.auth);
  const classes = useStyles();

  if (!(role === userRole)) {
    return <Navigate to="/" />;
  }
  return (
    <div className={classes.body}>
      <Outlet />
    </div>
  );
};

export default Layout;
