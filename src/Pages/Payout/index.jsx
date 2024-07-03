/* eslint-disable react-hooks/rules-of-hooks */

import { Box, Card, Typography } from "@mui/material";
import Payout from "../../Components/Payout";
import Header from "../../Components/LandingPage/Header";

const index = () => {
  return (
    <>
    <Header/>
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
        <Box sx={{ marginBottom: "72px" }}>
          <Typography variant="h2">Payout</Typography >
        </Box>
        <Card elevation={8} >
          <Box sx={{ padding: "24px", }}>

          <Payout />
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default index;
