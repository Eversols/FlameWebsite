import CloseIcon from "@mui/icons-material/Close";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, IconButton, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setPrivacyModel } from "../../Services/store/authSlice";
import useStyles from "./style";
import { useTranslation } from "react-i18next";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// ---------Component style------------

const mainContainer = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    marginTop: { xs: "0px", sm: "30px" },
    padding: { xs: "24px", sm: "32px", md: "42px" }
};

const PrivacyPolicy = ({ setModal, modal}) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
    const { t } = useTranslation()

    const handleClose = () => setModal( prev =>!prev);


    return (
        <Dialog
            fullScreen={fullScreen}
            open={modal}
            aria-labelledby="responsive-dialog-title"
            onClose={handleClose}
            sx={{
                "& .MuiDialog-paper": {
                    width: { xs: "100%", sm: "90%", md: "80%" },
                    height: "86%",
                    background: "#ffff",
                    boxShadow: "none",
                    borderRadius: "24px",
                },

            }}
        >

            <Box
                sx={{
                    position: "absolute",
                    cursor: "pointer",
                    zIndex: 1,
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: "10px",
                }}
                data-cy={`activity-close`}
                onClick={handleClose}
            >
                <Typography
                    variant="body1"
                    component="span"
                    color="#ffff"
                    fontFamily="Inter, sans-serif"
                    fontWeight={400}
                    ml={2}
                >

                </Typography>

                <IconButton sx={{ width: "35px", height: "35px" }}>
                    <CloseIcon sx={{ fill: "#AAAAAA", width: "20px" }} />
                </IconButton>
            </Box>




            <Box sx={mainContainer}>
            <Box>
                    <Typography
                        variant="h4"
                        component="div"
                        fontFamily="Inter, sans-serif"
                        fontWeight={700}
                        my={2}
                    >
                       {t(" Privacy Policy")}
                    </Typography>
                    <Typography
                        variant="caption"
                        component="div"
                        fontFamily="Inter, sans-serif"
                        fontWeight={400}
                        fontSize={"16px"}
                        lineHeight={"24px"}
                        mb={12}
                    >
                        <Typography
                            variant="h6"
                            component="div"
                            fontFamily="Inter, sans-serif"
                            fontWeight={700}
                            my={2}
                        >
                           {t(" 1. Where This Privacy Policy Applies")}
                        </Typography>
                        <div style={{lineHeight:"26px"}}>
                       {t(` This Privacy Policy applies to websites, apps, events and other services we operate under the Flame brand. Whether you're searching for your soulmate, joining us at one of our events, or using any of our other awesome services, this Policy has got you covered. For simplicity, we just refer to all of these as our “service” in this Privacy Policy.
                        If for some reason, one of our services requires its own separate privacy policy, then that policy will be made available to you and that policy -- not this Privacy Policy -- will apply`)}
                        </div>
                        <Typography
                            variant="h6"
                            component="div"
                            fontFamily="Inter, sans-serif"
                            fontWeight={700}
                            my={2}
                        >
                            {("2. Data we collect")}
                        </Typography>
                        <Typography
                            variant="h6"
                            component="div"
                            fontFamily="Inter, sans-serif"
                            fontWeight={700}
                            my={2}
                        >
                            {t("a. Account Data:")}
                        </Typography>
                        <div style={{lineHeight:"26px"}}>
                   {t("When you create an account, you give us basic information for your account to be set up such as your phone number, email address, and date of birth")}
                   </div>
                        <Typography
                            variant="h6"
                            component="div"
                            fontFamily="Inter, sans-serif"
                            fontWeight={700}
                            my={2}
                        >
                           {t(" b. Profile data:")}
                        </Typography>
                        <div style={{lineHeight:"26px"}}>
                      {t("When you complete your profile, you share additional details about you, such as your gender, interests, preferences, approximate location, etc. Some of this data may be considered sensitive or special in certain countries, such as details about sexual orientation, sexual life, health, or political beliefs. If you choose to provide this data, you consent to us using it as laid out in this Privacy Policy")}
                      </div>
                        <Typography
                            variant="h6"
                            component="div"
                            fontFamily="Inter, sans-serif"
                            fontWeight={700}
                            my={2}
                        >
                            {t('3. Data we share')}
                        </Typography>
                        {t("None of your data is shared with any third party or related parties")}
                    </Typography>

                </Box>


            </Box>
        </Dialog>
    );
};

export default PrivacyPolicy;