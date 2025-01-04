import React from "react";
import { Box, Typography } from "@mui/material";

export const Left = () => {
  return (
    <>
      LOGO
      <Box sx={{ display: "flex", gap: "1.5em" }}>
        <Typography sx={{ color: "orange" }}>HOME</Typography>
        <Typography>SHOP</Typography>
        <Typography>COLLECTIONS</Typography>
        <Typography>PAGES</Typography>
        <Typography>CONTACT</Typography>
      </Box>
    </>
  );
};
