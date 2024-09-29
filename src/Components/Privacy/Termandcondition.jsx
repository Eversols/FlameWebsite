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
import { lineHeight } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";

const CustomListItem = styled(ListItem)({
  paddingLeft: 0,
  paddingRight: 0,
});

const mainContainer = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  // marginTop: { xs: "30px", sm: "30px" },
  padding: {
    xs: "0 24px 24px 24px",
    sm: "0 32px 32px 32px",
    md: "0 32px 32px 32px",
  },
};

const Termandcondition = ({ setModal, modal }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();

  const handleClose = () => setModal((prev) => !prev);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
            top: 0,
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
              variant={isMobile ? "h5" : "h4"}
              component="div"
              fontFamily="Inter, sans-serif"
              fontWeight={700}
              // my={2}
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
              mb={4}
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
              <div style={{ lineHeight: "26px" }}>
                {t(
                  `By accessing or using our Services on Theflame.life (the "Website"), you agree to, and are bound by this Agreement. This Agreement applies to anyone who accesses or uses our Services, regardless of registration or subscription status.`
                )}
              </div>
              <div
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  lineHeight: "26px",
                }}
              >
                {t(
                  `Subject to applicable law, we reserve the right to modify, amend, or change the Terms at any time. Notice of material changes will be posted on this page with an updated effective date. In certain circumstances, we may notify you of a change to the Terms via email or other means; however, you are responsible for regularly checking this page for any changes. Your continued access or use of our Services constitutes your ongoing consent to any changes, and as a result, you will be legally bound by the updated Terms. If you do not accept a change to the Terms, you must stop accessing or using our Services immediately. Further, we reserve the right to change the availability of features in our subscription plans`
                )}
              </div>
              <Typography
                variant="h6"
                component="div"
                fontFamily="Inter, sans-serif"
                fontWeight={700}
                my={2}
              >
                <div style={{ lineHeight: "26px" }}>
                  {t(`Before you create an account on TheFlame.Life, please make sure you are eligible to use our Services. This Section also details what you can and can't do when using the Services, as well as the rights you grant Theflame.Life
                            You are not authorized to create an account or use the Services unless all of the following are true, and by using our Services, you represent and warrant that:`)}
                </div>
              </Typography>

              <List>
                <CustomListItem>
                  <Typography>
                    {t(
                      "1. You are an individual (i.e., not any body corporate, partnership or other business entity) at least 18 years old;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "2. You are not prohibited by law from using our Services;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "3. You have not committed, been convicted of, or pled no contest to a felony or indictable offense (or crime of similar severity), a sex crime, or any crime involving violence or a threat of violence, unless you have received clemency for a non-violent crime and we have determined that you are not likely to pose a threat to other users of our Services;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "4. You are not required to register as a sex offender with any state, federal or local sex offender registry;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "5. You do not have more than one account on our Services; and"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "6. You have not previously been removed from our Services or our affiliates’ services by us or our affiliates, unless you have our express written permission to create a new account."
                    )}
                  </Typography>
                </CustomListItem>
              </List>

              <Typography
                variant="subtitle1"
                component="div"
                fontFamily="Inter, sans-serif"
                fontWeight={700}
                my={2}
              >
                You agree to:
              </Typography>

              <List>
                <CustomListItem>
                  <Typography>
                    {t(
                      "1. Misrepresent your identity, age, or affiliations with a person or entity;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "2. Use the Services in a way that damages the Services or prevents their use by other users;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "3. Use our Services in a way to interfere with, disrupt or negatively affect the platform, the servers, or our Services' networks;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "4. Use our Services for any harmful, illegal, or nefarious purpose, including, but not limited to, using any Virtual Items for purposes of money laundering or other financial crimes;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "5. Harass, bully, stalk, intimidate, assault, defame, harm or otherwise abuse or cause psychological harm;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t("6. Post or share Prohibited Content (see below);")}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "7. Solicit passwords for any purpose, or personal identifying information for commercial or unlawful purposes from other users or disseminate another person's personal information without his or her permission;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "8. Solicit money or other items of value from another user, whether as a gift, loan, or form of compensation;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>{t("9. Use another user's account;")}</Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "10. Use our Services in relation to fraud, a pyramid scheme, or other similar practice;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "11. Use our Services in relation to any political campaign financing or for the purpose of influencing any election, other than sharing your own personal political opinions;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "12. Disclose private or proprietary information that you do not have the right to disclose;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "13. Copy, modify, transmit, distribute, or create any derivative works from, any Member Content or Our Content, or any copyrighted material, images, trademarks, trade names, service marks, or other intellectual property, content or proprietary information accessible through our Services without Tinder's prior written consent;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "14. Express or imply that any statements you make are endorsed by Flame;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "15. Use any robot, crawler, site search/retrieval application, proxy or other manual or automatic device, method or process to access, retrieve, index, 'data mine,' or in any way reproduce or circumvent the navigational structure or presentation of our Services or its contents;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "16. Upload viruses or other malicious code or otherwise compromise the security of our Services;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "17. Forge headers or otherwise manipulate identifiers to disguise the origin of any information transmitted to or through our Services;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "18. 'Frame' or 'mirror' any part of our Services without Flame's prior written authorization;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "19. Use meta tags or code or other devices containing any reference to Flame or the platform (or any trademark, trade name, service mark, logo or slogan of Flame) to direct any person to any other website for any purpose;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "20. Modify, adapt, sublicense, translate, sell, reverse engineer, decipher, decompile or otherwise disassemble any portion of our Services, or cause others to do so;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "21. Use or develop any third-party applications that interact with our Services or Member Content or information without our written consent, including but not limited to artificial intelligence or machine learning systems;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "22. Use, access, or publish the Flame application programming interface without our written consent;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "23. Probe, scan or test the vulnerability of our Services or any system or network;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "24. Encourage, promote, or agree to engage in any activity that violates these Terms;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "25. Create a new account after we suspend or terminate your account, unless you receive our express permission;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "26. Submit a report about a member’s behavior or content that is false, misleading, or otherwise manifestly unfounded, or abuse any Tinder reporting or appeals request system made available."
                    )}
                  </Typography>
                </CustomListItem>
              </List>

              {t(
                " The license granted to you under these Terms and any authorization to access the Services is automatically revoked in the event that you do any of the above."
              )}
              <Typography
                variant="subtitle1"
                component="div"
                fontFamily="Inter, sans-serif"
                fontWeight={700}
                my={2}
              >
                {t(
                  "Prohibited Content - Flame prohibits uploading or sharing content that:"
                )}
              </Typography>

              <List>
                <CustomListItem>
                  <Typography>
                    {t(
                      "1. Could reasonably be deemed to be offensive or to harass, abuse or cause psychological distress to another person;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "2. Is obscene, pornographic, violent or contains nudity;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "3. Is abusive, threatening, discriminatory or that promotes or encourages racism, sexism, hatred or bigotry;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "4. Encourages or facilitates any illegal activity including, without limitation, terrorism, inciting racial hatred or the submission of which in itself constitutes committing a criminal offense;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "5. Encourages or facilitates any activity that may result in harm to the user or another person, including, but not limited to, promotion of self-harm, eating disorders, dangerous challenges, violent extremism,"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t("6. Is defamatory, libelous, or untrue;")}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "7. Relates to commercial activities (including, without limitation, sales, competitions, promotions, and advertising, solicitation for services, sex work, 'sugar daddy' or 'sugar baby' relationships, links to other websites or premium line telephone numbers);"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t("8. Involves or facilitates the transmission of spam;")}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "9. Contains any spyware, adware, viruses, corrupt files, worm programs or other malicious code designed to interrupt, damage or limit the functionality of or disrupt any software, hardware, telecommunications, networks, servers or other equipment, Trojan horse or any other material designed to damage, interfere with, wrongly intercept or expropriate any data or personal information whether from Tinder or otherwise;"
                    )}
                  </Typography>
                </CustomListItem>
              </List>

              <List>
                <CustomListItem>
                  <Typography>
                    {t(
                      "1. Infringes upon any third party's rights (including, without limitation, intellectual property rights and privacy rights);"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "2. Was not written by you, unless expressly authorized by Flame;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "3. Includes the image or likeness of another person without that person's consent (or in the case of a minor, the minor's parent or guardian);"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "4. Includes an image or likeness of a minor who is unaccompanied by the minor's parent or guardian or not fully clothed or otherwise depicts or implies a minor engaged in sexual activity;"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "5. Is inconsistent with the intended use of the Services; or"
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "6. May harm the reputation of Flame or its affiliates, meaning the uploading or sharing of content on the Flame platform that is defamatory to Flame or its affiliates or advocates misuse of the Service or any service provided by Flame’s affiliates."
                    )}
                  </Typography>
                </CustomListItem>
                <CustomListItem>
                  <Typography>
                    {t(
                      "The uploading or sharing of content that violates these Terms ('Prohibited Content') may result in the immediate suspension or termination of your account."
                    )}
                  </Typography>
                </CustomListItem>
              </List>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default Termandcondition;
