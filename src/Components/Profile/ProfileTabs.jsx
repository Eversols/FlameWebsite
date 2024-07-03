/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, Grid, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Payment from "../../Pages/Payment/index";
import { get } from "../../Services/api";
import CustomTabPanel from "./CustomTabPanel";
import ProfileForm from "./ProfileForm";
import useStyles from "./style";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProfileTabs = ({setDialog}) => {
  const [value, setValue] = useState(0);
  const [plans, setPlans] = useState([]);
  const [selectedCard, setSelectedCard] = useState(0);
  const { role } = useSelector((state) => state.auth);
  const classes = useStyles();
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCardSelect = (card, index) => {
    setSelectedCard(index);
    navigate(`/${role}/payment/${card.id}`);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
        <Tabs
          sx={{
            "& .MuiTabs-scroller": {
              overflowX: "auto !important", // Use "auto" or "scroll" for scrolling
              maxWidth: "100%", // Set a maximum width
            },

            "& .MuiTab-root .MuiButtonBase-root": {
              // Your styles here for MuiButtonBase-root inside MuiTab-root
              // For example:
              maxWidth: "100%",
            },

            "& .MuiTabs-flexContainer": {
              //  justifyContent: "flex-start",
            },
            "& .MuiTab-root": {
              color: "#000",
              textTransform: "none",
              background: "#ffff",
              width: "50%",
              maxWidth: "100%",
            },

            "& .MuiTabs-indicator": {
              backgroundColor: " #FB1F43",
              borderRadius: "8px",
              border: "none",
            },
            "& .MuiTab-root.Mui-selected": {
              color: "#ffff",
              background: " #FB1F43",
            },
          }}
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
        >
          <Tab
            value={0}
            label=" My Profile"
            {...a11yProps(0)}
            className={classes.customTab}
          />
          <Tab
            value={1}
            label=" Payout"
            {...a11yProps(1)}
            className={classes.customTab}
          />
        </Tabs>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <CustomTabPanel
          value={value}
          index={0}
          className={classes.CustomTabPanel}
        >
          <ProfileForm setDialog={setDialog} />
        </CustomTabPanel>
        <CustomTabPanel
          value={value}
          index={1}
          className={classes.CustomTabPanel}
        >
          <Payment />
        </CustomTabPanel>
        {/* <Box sx={{ width: "100%", justifyContent: "center", display: "flex" }}>
          <Button
            // onClick={onSelect}
            variant="contained"
            className={classes.btn}
          >
            Confirm
          </Button>
        </Box> */}
      </Box>
    </>
  );
};

export default ProfileTabs;
