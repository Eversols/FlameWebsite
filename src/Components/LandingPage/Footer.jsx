import {
    Container,
    Box,
    Toolbar,
    Button,
  } from "@mui/material";
  import { List, ListItem, IconButton } from "@mui/material";
  import FacebookIcon from "@mui/icons-material/Facebook";
  import InstagramIcon from "@mui/icons-material/Instagram";
  import LinkedInIcon from "@mui/icons-material/LinkedIn";
  import YouTubeIcon from "@mui/icons-material/YouTube";
  import XIcon from '@mui/icons-material/X';
  import TikTokIcon from './TikTokIcon';
  
  import flamelogo from "../../Assets/images/flame-logo.svg";
  import { useTranslation } from "react-i18next";
  
  const socialMediaLinks = [
    {
      href: "https://x.com/Xtheflamelife",
      icon: (
        <XIcon style={{ width: 16, height: 16 }} />
      ),
    },
    { href: "https://youtube.com/@jointheflamelife?si=4HYiivuS9tCDhtVA", icon: <YouTubeIcon /> },
    { href: "https://www.tiktok.com", icon: <TikTokIcon /> },
    { href: "https://www.linkedin.com/company/theflamelife ", icon: <LinkedInIcon /> },
    { href: "https://www.facebook.com", icon: <FacebookIcon /> },
    { href: "https://www.instagram.com/jointheflamelife/", icon: <InstagramIcon /> },
  ];
  
  const privaypolicylinks = [
    { href: "https://tremsofuse", title: "Terms of Use" },
    { href: "https://privacypolicy", title: "Privacy Policy" },
  ];
  
  const Footer = () => {
    const { t } = useTranslation();
    return (
      <Box
        sx={{
          bgcolor: "#0D0B0C",
          paddingBlock: { xs: '4rem', sm: '4rem', md: '2rem', xl: '3rem' },
          position: "relative",
        }}
      >
        <Container maxWidth="xl" sx={{ paddingLeft: { xs: '0px', md: 'unset' } }}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: { xs: 'start', md: 'center' },
              justifyContent: "space-between",
              gap: "12px",
              width: { xs: '100%', md: '70%' },
              flexDirection: { xs: 'column', md: 'row' },
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexDirection: { xs: 'column', md: 'row' } }}>
              <Button
                component="a"
                href={"/"}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ display: { xs: 'none', md: 'flex' } }}
              >
                <img src={flamelogo} className="w-32 h-8 object-contain" />
              </Button>
  
              <List sx={{ display: "flex", flexDirection: "row", padding: 0, order: { xs: -1, md: 0 } }}>
                {socialMediaLinks.map((item, index) => (
                  <ListItem key={index} sx={{ width: "auto", padding: 0 }}>
                    <IconButton
                      component="a"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "white",
                        "&:hover": {
                          color: "#FB1F43",
                        },
                      }}
                    >
                      {item.icon}
                    </IconButton>
                  </ListItem>
                ))}
              </List>
  
              <Box sx={{ display: { xs: 'flex', md: 'unset' }, justifyContent: 'space-between', marginTop: { xs: '16px', sm: '16px', md: '0px' } }}>
                <List sx={{ display: "flex", flexDirection: { xs: 'column', md: 'row' }, padding: 0, order: { xs: -1, md: 0 } }}>
                  {privaypolicylinks.map((item, index) => (
                    <ListItem key={index} sx={{ width: "auto", padding: 0 }}>
                      <Button
                        component="a"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: "white",
                          textTransform: "capitalize",
                          fontSize: "14px",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {t(item.title)}
                      </Button>
                    </ListItem>
                  ))}
                </List>
  
                <Button
                  component="a"
                  href={"/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ display: { xs: 'flex', md: 'none' } }}
                >
                  <img src={flamelogo} className="w-32 h-8 object-contain" />
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </Box>
    );
  };
  
  export default Footer;
  