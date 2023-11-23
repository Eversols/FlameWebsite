import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import useStyles from "./style";

const gridStyle = {
  padding: "10px 20px",
  gap: "15px 25px",
  maxWidth: "100%",
  justifyContent: "center",
  display: "flex",
};

const PayoutForm = () => {
  const classes = useStyles();
  return (
    <Grid container sx={gridStyle}>
      <Grid
        item
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <Typography variant="h5" className={classes.label}>
          enter points
        </Typography>
        <Box sx={{ width: "100%", display: "flex", gap: "10px" }}>
          <Button
            className={classes.points_btn}
            type="button"
            variant="contained"
          >
            2140
          </Button>
          <Button
            className={classes.confirm_btn}
            type="button"
            variant="contained"
          >
            Confirm
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <Typography variant="h5" className={classes.label}>
          leave request
        </Typography>
        <Box sx={{ width: "100%", maxWidth: "60%" }}>
          <Box className={classes.text_container}>hghfd</Box>
        </Box>
      </Grid>
      <Grid item sx={{ width: "100%", marginTop: "40px" }}>
        <Typography variant="h5" className={classes.label}>
          leave request
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          width: "100%",
          display: "flex",
          gap: "40px",
          alignItems: "center",
          //   flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: { xs: "10px", sm: "20px" },
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Typography variant="h5" className={classes.label}>
            approved
          </Typography>
          <Box className={classes.text_container}>hghfd</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: { xs: "10px", sm: "20px" },
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Typography variant="h5" className={classes.label}>
            rejected
          </Typography>
          <Box className={classes.text_container}>hghfd</Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PayoutForm;
