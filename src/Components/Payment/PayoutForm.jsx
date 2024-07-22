import { Box, Button, Dialog, Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@emotion/react";
import { post } from "../../Services/api";
import { getProfile } from "../../Services/store/authSlice";
import { useTranslation } from "react-i18next";
import { LoadingButton } from "@mui/lab";

const gridStyle = {
  padding: "10px 20px",
  gap: "15px 25px",
  maxWidth: "100%",
  justifyContent: "center",
  display: "flex",
};

const PayoutForm = () => {
  const { userData } = useSelector((state) => state.auth);
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [confirmModal, setConfirmModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {t} = useTranslation()

  const submitHandler = () => {
    setLoading(true);
    post('/pointsPayout', { user_id: userData.id, points_payout: userData.available_points }).then((result) => { setConfirmModal(false); dispatch(getProfile({ id: userData.id })); setLoading(false); }).catch((error) => { })
  }
  return (
    <>
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
            {t("enter points")}
          </Typography>
          <Box sx={{ width: "100%", display: "flex", gap: "10px" }}>
            <Button
              className={classes.points_btn}
              type="button"
              variant="contained"
            >
              {userData?.available_points || 0}
            </Button>
            <Button
              className={classes.confirm_btn}
              type="button"
              variant="contained"
              onClick={() => setConfirmModal(true)}
            >
              {t("Confirm")}
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
            {t("leave request")}
          </Typography>
          <Box sx={{ width: "100%", maxWidth: "60%" }}>
            <Box className={classes.text_container}>{userData.available_points} Points</Box>
          </Box>
        </Grid>
        <Grid item sx={{ width: "100%", marginTop: "40px" }}>
          <Typography variant="h5" className={classes.label}>
            {t("leave request")}
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
              {t("approved")}
            </Typography>
            <Box className={classes.text_container}>{userData?.approved_points || 0}</Box>
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
              {t("rejected")}
            </Typography>
            <Box className={classes.text_container}>{userData?.rejected_points || 0}</Box>
          </Box>
        </Grid>
      </Grid>
      <Dialog
        fullScreen={fullScreen}
        open={confirmModal}
        aria-labelledby="responsive-dialog-title"
        // onClose={handleClose}
        sx={{
          "& .MuiDialog-paper": {
            maxWidth: "342px",
            width: "100%",
            maxHeight: "180px",
            minHeight: "160px",
            height: "100%",
            background: "#fff",
            boxShadow: "none",
            borderRadius: "8px",
          },
          "& .MuiDialog-container": {
            background: "rgba(255, 255, 255, 0.02)",
            backdropFilter: "blur(10px)",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            height: "45px",
            display: "flex",
            textTransform: "lowercase",
            background: "#FB1F43",
            color: "#FFFFFF",
            fontWeight: 600,
            fontSize: "16px",
          }}
          data-cy={`activity-close`}
        // onClick={handleClose}
        >
          {t("Confirm Redeem")}
        </Box>

        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            maxWidth: "280px",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <Typography variant="h5" className={classes.label}>
              {t("Are you sure you want to redeem the points")}
            </Typography>
          </Box>
          <Box sx={{ width: "100%", display: "flex", gap: "10px", justifyContent: "center" }}>

            <LoadingButton variant="contained" loading={loading}
                loadingPosition="center" className={classes.btn} onClick={submitHandler}>
              {t("Yes")}
            </LoadingButton>
            <Button variant="contained" className={classes.btnCancel} onClick={() => setConfirmModal(false)}>
              {t("No")}
            </Button>
          </Box>
        </Box>
      </Dialog>
    </>

  );
};

export default PayoutForm;
