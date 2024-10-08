import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import flamelogo from "../../Assets/images/flame-logo.svg";
import flameLogoBlack from "../../Assets/images/flame logo.svg";
import Languagebtn from "../LandingPage/Languagebtn";
import { useTranslation, I18nextProvider } from "react-i18next";
import CardMedia from "@mui/material/CardMedia";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setRole, setToken } from "../../Services/store/authSlice";
import { Avatar, IconButton, Typography } from "@mui/material";
import logoutLogo from "../../Assets/images/logout.svg"
import useStyles from "./style";
import { post } from "../../Services/api";
import { persistor } from "../../Services/store";

const Header = ({ setPayoutModel, setDialog }) => {
    const { role, userData, rechargeModel, profileModel, payoutModel } =
        useSelector((state) => state.auth);
    const [showLogo, setShowLogo] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    const classes = useStyles();

    const handleScroll = () => {
        const container = document.querySelector('.scroll-container');
        if (!container) return;

        const currentScrollY = container.scrollTop;
        const isScrollingDown = currentScrollY > lastScrollY;

        setShowLogo(!isScrollingDown);
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        const container = document.querySelector('.scroll-container');
        if (!container) return;

        container.addEventListener("scroll", handleScroll);
        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    const getStartedBtn = () => {
        dispatch(setRole("user"));
        navigate('/user/authentication')
    };

    const { t } = useTranslation();

    const handleLogout = async () => {
        try {
            localStorage.removeItem("token");
            const res = await post("/logout", userData);
            dispatch(setToken('')).then(() => {
                persistor.purge();
                localStorage.removeItem("persist:root");
                navigate(`/`);
            })
        } catch (error) {
            localStorage.removeItem("token", null);
            dispatch(setToken('')).then(() => {
                persistor.purge();
                localStorage.removeItem("persist:root");
                navigate(`/`);
                console.log(error);
            })
        }
    };

    return (

        <AppBar position="fixed" sx={{ bgcolor: "transparent", boxShadow: 0 }}>
            <Container maxWidth="xl" sx={{ paddingInline: { xs: "0", md: "" } }}>
                <Toolbar
                    sx={{ display: "flex", justifyContent: "flex-start", gap: "12px" }}
                >
                    {showLogo && (
                        <CardMedia
                            component="img"
                            image={pathname == '/' ? flamelogo : flameLogoBlack}
                            alt="Flame Logo"
                            sx={{
                                width: "12rem",
                                height: "6rem",
                                objectFit: "contain",
                                marginRight: "0.2rem",
                                cursor: "pointer",
                            }}
                            onClick={() => navigate('/')}
                        />
                    )}

                    <Box
                        sx={{
                            flexGrow: 0,
                            display: {
                                xs: "none",
                                md: "flex",
                            },
                            marginLeft: "auto",
                            gap: "16px",
                            alignItems: "center",
                        }}
                    >
                        {pathname == '/' &&
                            <Button
                                onClick={getStartedBtn}
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                    bgcolor: "#FB1F43",
                                    textTransform: "capitalize",
                                    paddingInline: "2rem",
                                    paddingBlock: ".45rem",
                                    borderRadius: "999px",
                                    fontSize: { xs: "16px", md: "14px", xl: "16px" },
                                    "&:hover": {
                                        bgcolor: "#C81230",
                                        color: "white",
                                    },
                                    "&:active": {
                                        bgcolor: "#C81230",
                                        color: "white",
                                    },
                                }}
                            >
                                {t("Get Started")}
                            </Button>}
                    </Box>
                    <Box sx={{ marginLeft: { md: "0", xs: "auto" } }}>
                        <Languagebtn />
                    </Box>
                    <Box className={classes.header_mid}>
                        <Box
                            onClick={() => setPayoutModel(true)}
                            mr={2}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            sx={{ cursor: "pointer" }}
                        >
                            <Avatar
                                alt={userData?.displayName}
                                src={
                                    userData?.profileImage
                                        ? `${userData.profileImage}`
                                        : userData?.gender === "Male" ? 'https://theflame.life/livebk/public/frontend_images/avatar-man.jpg' :
                                            "https://theflame.life/livebk/public/frontend_images/avatar-woman.jpg"
                                }
                            />
                            <Typography
                                variant="body1"
                                component="span"
                                ml={1}
                                className={classes.remove}
                            >
                                {userData?.displayName}
                            </Typography>
                        </Box>
                        <IconButton onClick={() => setDialog({ open: true, description: 'Are you sure you want to logout?', action: handleLogout })}>
                            <img src={logoutLogo} className={classes.logout} />
                            <Typography
                                variant="body1"
                                component="span"
                                ml={1}
                                className={classes.remove}
                            >
                                {t("Logout")}
                            </Typography>
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
