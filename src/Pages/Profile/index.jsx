/* eslint-disable react-hooks/rules-of-hooks */

import { Box, Card, Typography } from "@mui/material";
import ProfileForm from "../../Components/Profile/ProfileForm";
import ProfileModal from "../../Components/Profile/ProfileModal";
import Header from "../../Components/LandingPage/Header";


const index = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Box sx={{ marginBottom: "72px" }} >
          {/* <Typography variant="h2">Profile</Typography > */}
        </Box>
        <Card elevation={8} sx={{ padding: "24px", }}>

          <ProfileForm />
        </Card>
      </Box>
    </>
  );
};

export default index;
