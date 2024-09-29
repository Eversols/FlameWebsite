import CloseIcon from "@mui/icons-material/Close";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
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

// ---------Component style------------

const mainContainer = {
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

const PrivacyPolicy = ({ setModal, modal }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();

  const handleClose = () => setModal((prev) => !prev);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Dialog
      fullScreen={fullScreen}
      open={modal}
      aria-labelledby="responsive-dialog-title"
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          width: { xs: "100%", sm: "90%", md: "80%", lg: "50%", xl: "40%" },
          maxWidth: "none",
          height: "auto",
          minHeight: { xs: "auto", sm: "300px", md: "400px" },
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
            color="#ffffff"
            fontFamily="Inter, sans-serif"
            fontWeight={400}
            ml={2}
          ></Typography>

          <IconButton
            sx={{
              width: "35px",
              height: "35px",
              backgroundColor: "rgba(255, 255, 255)",
            }}
          >
            <CloseIcon sx={{ fill: "#AAAAAA", width: "20px" }} />
          </IconButton>
        </Box>

        <Box sx={mainContainer}>
          <Box>
            <Typography
               variant={isMobile ? 'h5' : 'h4'}
              component="div"
              fontFamily="Inter, sans-serif"
              fontWeight={700}
              // my={2}
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
              // mb={12}
            >
              <Typography
                variant={isMobile ? "subtitle1" : "h6"}
                component="div"
                fontFamily="Inter, sans-serif"
                fontWeight={700}
                my={1}
              >
                {t(" 1. Where This Privacy Policy Applies")}
              </Typography>
              <div style={{ lineHeight: "26px", marginBottom:'32px' }}>
                {t(` This Privacy Policy applies to websites, apps, events and other services we operate under the Flame brand. Whether you're searching for your soulmate, joining us at one of our events, or using any of our other awesome services, this Policy has got you covered. For simplicity, we just refer to all of these as our “service” in this Privacy Policy.
                        If for some reason, one of our services requires its own separate privacy policy, then that policy will be made available to you and that policy -- not this Privacy Policy -- will apply`)}
              </div>

              <Typography
                 variant={isMobile ? "subtitle1" : "h6"}
                component="div"
                fontFamily="Inter, sans-serif"
                fontWeight={700}
                my={1}
              >
                {"2. Data we collect"}
              </Typography>
             
              <Typography
                 variant={isMobile ? "subtitle1" : "subtitle1"}
                component="div"
                fontFamily="Inter, sans-serif"
                fontWeight={700}
                my={1}
              >
                {t(" a. Account Data:")}
              </Typography>
              
        
              <div style={{ lineHeight: "26px" }}>
                {t(
                  "When you create an account, you give us basic information for your account to be set up such as your phone number, email address, and date of birth"
                )}
              </div>
              <Typography
                 variant={isMobile ? "subtitle1" : "subtitle1"}
                component="div"
                fontFamily="Inter, sans-serif"
                fontWeight={700}
                my={1}
              >
                {t(" b. Profile data:")}
              </Typography>
              <div style={{ lineHeight: "26px", marginBottom:'32px'}}>
                {t(
                  "When you complete your profile, you share additional details about you, such as your gender, interests, preferences, approximate location, etc. Some of this data may be considered sensitive or special in certain countries, such as details about sexual orientation, sexual life, health, or political beliefs. If you choose to provide this data, you consent to us using it as laid out in this Privacy Policy"
                )}
              </div>
              <Typography
                variant={isMobile ? "subtitle1" : "h6"}
                component="div"
                fontFamily="Inter, sans-serif"
                fontWeight={700}
                my={1}
              >
                {t("3. Data we share")}
              </Typography> 
              {t(
                "None of your data is shared with any third party or related parties"
              )}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default PrivacyPolicy;
