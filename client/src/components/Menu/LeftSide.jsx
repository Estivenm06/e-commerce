import { Typography, Divider, Box } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import React from "react";

export const Left = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: "1em" }}>
      <Typography
        fontSize={"0.9em"}
        sx={{ display: "flex", justifyContent: "center", gap: "0.2em" }}
      >
        <PhoneIcon sx={{ color: "#722F37" }} fontSize="small" />+ 123 456 78900
      </Typography>
      <Divider orientation="vertical" sx={{ height: "1em", margin: "auto" }} />
      <Typography
        fontSize={"0.9em"}
        sx={{ display: "flex", justifyContent: "center", gap: "0.2em" }}
      >
        <EmailIcon sx={{ color: "#722F37" }} fontSize="small" />
        hello@gmail.com
      </Typography>
      <Divider orientation="vertical" sx={{ height: "1em", margin: "auto" }} />
      <Typography
        fontSize={"0.9em"}
        sx={{ display: "flex", justifyContent: "center", gap: "0.2em" }}
      >
        <PlaceIcon sx={{ color: "#722F37" }} fontSize="small" />
        Location our shop
      </Typography>
    </Box>
  );
};
