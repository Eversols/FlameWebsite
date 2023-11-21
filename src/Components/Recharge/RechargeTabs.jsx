/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, Grid, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useStyles from "../../Pages/Recharge/style";
import { get } from "../../Services/api";
import CustomCard from "./CustomCard";
import CustomTabPanel from "./CustomTabPanel";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const RechargeTabs = () => {
  const [value, setValue] = useState(0);
  const [plans, setPlans] = useState([]);
  const [selectedCard, setSelectedCard] = useState(0);
  const { role } = useSelector((state) => state.auth);
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    get("/getPlan")
      .then((res) => {
        if (res.data.result) {
          setPlans(res.data.data);
        }
      })
      .catch((err) => {});
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCardSelect = (card, index) => {
    setSelectedCard(index);
    navigate(`/${role}/payment/${card.id}`);
  };

  const plansContent = Array.from({ length: 5 }).map((_, index) => (
    <>
      <CustomCard
        price={plans[index]?.price} // Assuming plans array has the prices
        description={plans[index]?.messages} // Assuming plans array has the messages
        text={"messages"}
        isSelected={selectedCard === index}
        onSelect={() => handleCardSelect(plans[index], index)}
      />
    </>
  ));

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
        <Tabs
          sx={{
            "& .MuiTabs-scroller": {
              overflowX: "auto !important", // Use "auto" or "scroll" for scrolling
              maxWidth: "100%", // Set a maximum width
            },
            "& .MuiTabs-flexContainer": {
              //  justifyContent: "flex-start",
            },
            "& .MuiTab-root": {
              color: "#868AA9",
              textTransform: "none",
              background: " #EFE9FD",
              width: "50%",
              maxWidth: "50%",
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
            label="Message Packs"
            {...a11yProps(0)}
            className={classes.customTab}
          />
          <Tab
            value={1}
            label="Video Call Packs"
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
        }}
      >
        <CustomTabPanel
          value={value}
          index={0}
          className={classes.CustomTabPanel}
        >
          {plansContent}
        </CustomTabPanel>
        <CustomTabPanel
          value={value}
          index={1}
          className={classes.CustomTabPanel}
        >
          {plansContent}
        </CustomTabPanel>
        <Box sx={{ width: "100%", justifyContent: "center", display: "flex" }}>
          <Button
            // onClick={onSelect}
            variant="contained"
            className={classes.btn}
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default RechargeTabs;
