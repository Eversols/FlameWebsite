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

const Termandcondition = ({ setModal, modal }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
    const { t } = useTranslation();

    const handleClose = () => setModal(prev => !prev);

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
                        {t("Terms & conditions")}
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
                            {t("By using Flame, you agree to:")}
                        </Typography>
                        {t(`By accessing or using our Services on Theflame.life (the "Website"), you agree to, and are bound by this Agreement. This Agreement applies to anyone who accesses or uses our Services, regardless of registration or subscription status.`)}
                        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                            {t(`Subject to applicable law, we reserve the right to modify, amend, or change the Terms at any time. Notice of material changes will be posted on this page with an updated effective date. In certain circumstances, we may notify you of a change to the Terms via email or other means; however, you are responsible for regularly checking this page for any changes. Your continued access or use of our Services constitutes your ongoing consent to any changes, and as a result, you will be legally bound by the updated Terms. If you do not accept a change to the Terms, you must stop accessing or using our Services immediately. Further, we reserve the right to change the availability of features in our subscription plans`)}
                        </div>
                        <Typography
                            variant="h6"
                            component="div"
                            fontFamily="Inter, sans-serif"
                            fontWeight={700}
                            my={2}
                        >
                            {t(`Before you create an account on TheFlame.Life, please make sure you are eligible to use our Services. This Section also details what you can and can't do when using the Services, as well as the rights you grant Theflame.Life
                            You are not authorized to create an account or use the Services unless all of the following are true, and by using our Services, you represent and warrant that:`)}
                        </Typography>
                        {t(`1. You are an individual (i.e., not any body corporate, partnership or other business entity) at least 18 years old;
                        2. You are not prohibited by law from using our Services;
                        3. You have not committed, been convicted of, or pled no contest to a felony or indictable offense (or crime of similar severity), a sex crime, or any crime involving violence or a threat of violence, unless you have received clemency for a non-violent crime and we have determined that you are not likely to pose a threat to other users of our Services;
                        4. You are not required to register as a sex offender with any state, federal or local sex offender`)}
                    </Typography>
                </Box>
            </Box>
        </Dialog>
    );
};

export default Termandcondition;
