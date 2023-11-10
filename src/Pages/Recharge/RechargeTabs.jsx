/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, Grid, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomCard from "../../Components/Recharge/CustomCard";
import CustomTabPanel from "../../Components/Recharge/CustomTabPanel";
import { get } from "../../Services/api";
import useStyles from "./style";

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

  return (
    <Box className={classes.container}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
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
          justifyContent: "space-between",
          flexDirection: "column",
          height: "80%",
        }}
      >
        <CustomTabPanel
          value={value}
          index={0}
          className={classes.CustomTabPanel}
        >
          {plans.map((item, i) => (
            <Grid xs={2} sm={4} md={4} key={i}>
              <CustomCard
                price={item.price}
                description={item.messages}
                text={"messages"}
                isSelected={selectedCard === i}
                onSelect={() => handleCardSelect(item, i)}
              />
            </Grid>
          ))}
        </CustomTabPanel>
        <CustomTabPanel
          value={value}
          index={1}
          className={classes.CustomTabPanel}
        >
          {plans.map((item, i) => (
            <Grid xs={2} sm={4} md={4} key={i}>
              <CustomCard
                price={item.price}
                description={item.minutes}
                text={"minutes"}
                isSelected={selectedCard === i}
                onSelect={() => handleCardSelect(i)}
              />
            </Grid>
          ))}
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
    </Box>
  );
};

export default RechargeTabs;
