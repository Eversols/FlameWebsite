import CloseIcon from "@mui/icons-material/Close";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  Switch,
  Typography,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setPrivacyModel } from "../../Services/store/authSlice";
import useStyles from "./style";
import { useTranslation } from "react-i18next";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { textAlign } from "@mui/system";
import { styled } from "@mui/styles";
import Link from "@mui/material/Link";

// ---------Component style------------

const mainContainer = {
  textAlign: "justify",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  // marginTop: { xs: "30px", sm: "30px" },
  padding: { xs: "0 24px 24px 24px", sm: "0 32px 32px 32px", md: "0 32px 32px 32px" },

};

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 42,
  height: 22,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 3,
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "red" : "red",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 16,
    height: 16,
    borderRadius: 16,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const PrivacyModal = () => {
  const { privacyModel } = useSelector((state) => state.auth);
  const theme = useTheme();
  const dispatch = useDispatch();
  const classes = useStyles();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();

  const handleClose = (e) => dispatch(setPrivacyModel(!privacyModel));

  const confirmSubmit = (e) => {
    localStorage.setItem("privacyPolicy", true);
    dispatch(setPrivacyModel(!privacyModel));
  };
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Dialog
      fullScreen={fullScreen}
      open={privacyModel}
      aria-labelledby="responsive-dialog-title"
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          width: { xs: "100%", sm: "90%", md: "80%", lg: "50%", xl: "40%" },
          maxWidth: "none",
          height: "auto",
          minHeight: { xs: "auto", sm: "300px", md: "400px" }, // Ensures a minimum height based on content
          maxHeight: {
            xs: "calc(100% - 100px)",
            sm: "calc(100% - 100px)",
            md: "calc(100% - 100px)",
          },
          background: "#ffff",
          boxShadow: "none",
          borderRadius: "24px",
          overflow: "hidden",
          margin: { xs: "16px", sm: "16px", md: "0", lg: "0" },

        },
      }}
    >
      <Box
        sx={{
          height: "100%", // Ensure it takes full height
          overflowY: "auto", // Allow scrolling
        }}
      >
        <Box
          sx={{
            position: "sticky",
            top:0,
            cursor: "pointer",
            zIndex: 1,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255)",
            paddingInline: "24px",
            paddingBlock: "12px",
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
          ></Typography>

          <IconButton sx={{ width: "35px", height: "35px", backgroundColor:'rgba(255, 255, 255)' }}>
            <CloseIcon sx={{ fill: "#AAAAAA", width: "20px" }} />
          </IconButton>
        </Box>

        <Box sx={mainContainer}>
          <Box>
            <Typography
               variant={isMobile ? 'h6' : 'h5'}
              component="div"
              fontFamily="Inter, sans-serif"
              fontWeight={700}
              mb={2} 
            >
              {t("Privacy Preference")}
            </Typography>
            <Typography
              variant="caption"
              component="div"
              fontFamily="Inter, sans-serif"
              fontWeight={400}
              fontSize={"16px"}
              lineHeight={"24px"}
            >
              {t(
                "When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer."
              )}
            </Typography>

            <Typography>
              <Link href="/more-information" underline="always">
                More Information
              </Link>
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              mt: "20px",
            }}
          >
            <Button
              onClick={confirmSubmit}
              variant="contained"
              type="submit"
              className={classes.btn1}
            >
              {t("Allow All")}
            </Button>
          </Box>
          <Box>
            <Typography
              variant={isMobile ? 'h6' : 'h5'}
              component="div"
              fontFamily="Inter, sans-serif"
              fontWeight={700}
              my={2}
            >
              {t("Manage Consent Preferences")}
            </Typography>
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <ArrowForwardIosSharpIcon sx={{ fontSize: "1.3rem" }} />
                }
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                    <Typography
                    variant="subtitle1"
                    component="div"
                    fontFamily="Inter, sans-serif"
                    textAlign="left" 
                    sx={{ whiteSpace: 'normal', }}
                    
                  >
                  {t("Strictly Necessary Cookies")}
                  </Typography>
                  <Typography
                    variant="caption"
                    component="div"
                    fontFamily="Inter, sans-serif"
                    color="green"
                  >
                    {t("Always active")}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                {t(
                  "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work."
                )}
                <br />
                {t("Cookies details")}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <ArrowForwardIosSharpIcon sx={{ fontSize: "1.3rem" }} />
                }
                aria-controls="panel2-content"
                id="panel1-header"
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  {t("Performance Cookies")}
                  <AntSwitch
                    defaultChecked
                    inputProps={{ "aria-label": "ant design" }}
                    size="large"
                  />
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                {t(
                  "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance."
                )}
                <br />
                {t("Cookies details")}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <ArrowForwardIosSharpIcon sx={{ fontSize: "1.3rem" }} />
                }
                aria-controls="panel3-content"
                id="panel1-header"
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  {t("Targeting Cookies")}
                  <AntSwitch
                    defaultChecked
                    inputProps={{ "aria-label": "ant design" }}
                    size="large"
                  />
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                {t(
                  "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance."
                )}
                <br />
                {t("Cookies details")}
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              mt: "50px",
            }}
          >
            <Button
              onClick={confirmSubmit}
              variant="contained"
              type="submit"
              className={classes.btn2}
              size="large"             
              sx={{ whiteSpace: 'nowrap',  }}
              fullWidth
              
            >
              {t("Confirm my choice")}
            </Button>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default PrivacyModal;
