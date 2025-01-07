import React from "react";
import { Box, Typography } from "@mui/material";

export const Left = () => {
  return (
    <>
      <img
        src={"../../resources/LOGO.webp"}
        alt="LOGO"
        style={{
          padding: '0.5em',
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          border: "1px solid orange",
        }}
      />
      <Box sx={{ display: "flex", gap: "1.5em" }}>
        <Typography className="textHeader">HOME</Typography>
        <Typography className="textHeader">SHOP</Typography>
        <Typography className="textHeader">COLLECTIONS</Typography>
        <Typography className="textHeader">PAGES</Typography>
        <Typography className="textHeader">CONTACT</Typography>
      </Box>
    </>
  );
};
