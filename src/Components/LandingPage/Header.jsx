import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import flamelogo from "../../Assets/images/flame-logo.svg";
import flameLogoBlack from "../../Assets/images/flame logo.svg";
import Languagebtn from "./Languagebtn";
import { useTranslation, I18nextProvider } from "react-i18next";
import CardMedia from "@mui/material/CardMedia";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../../Services/store/authSlice";

const Header = () => {
    const [showLogo, setShowLogo] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { token } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { pathname } = useLocation()

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
        if (token) {
            navigate('/user/home')
        } else {
            navigate('/user/authentication')
        }
    };

    const { t } = useTranslation();

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
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
