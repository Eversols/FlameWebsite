/* eslint-disable react/prop-types */
import { Box, Grid } from "@mui/material";
import React from "react";

const CustomTabPanel = (props) => {
  const { children, value, index, ...other } = props;
  const gridStyle = {
    display: "flex",
    alignItems: "center",
    gap: "17px",
    width: "78%",
    margin: "0 auto",
    flexWrap: "wrap",
    justifyContent: { xs: "center", sm: "center", md: "unset" },
  };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          // spacing={{ xs: 2, md: 3 }}
          // columns={{ xs: 4, sm: 8, md: 12 }}
          sx={gridStyle}
        >
          {children}
        </Box>
      )}
    </div>
  );
};

export default CustomTabPanel;
