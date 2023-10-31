/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import useStyles from "./style";
import { Box, Grid, Tab, Tabs } from "@mui/material";
import CustomTabPanel from "../../Components/Recharge/CustomTabPanel";
import CustomCard from "../../Components/Recharge/CustomCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { get } from "../../Services/api";
import { useSelector } from "react-redux";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const index = () => {
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
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          centered
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
    </Box>
  );
};

export default index;
