/* eslint-disable react/prop-types */
import { Box, Grid } from "@mui/material";
import React from "react";

const CustomTabPanel = (props) => {
  const { children, value, index, ...other } = props;
  const gridStyle = { display: "flex", alignItems: "center", gap: "10px" };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid
          container
          // spacing={{ xs: 2, md: 3 }}
          // columns={{ xs: 4, sm: 8, md: 12 }}
          sx={gridStyle}
        >
          {children}
        </Grid>
      )}
    </div>
  );
};

export default CustomTabPanel;