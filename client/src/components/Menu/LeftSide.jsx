import { Typography, Divider, Box } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import React from "react";

const Location = ({ label }) => {
  return (
    <>
      <PlaceIcon sx={{ color: "#722F37" }} fontSize="small" />
      {label}
    </>
  );
};
const Email = ({ label }) => {
  return (
    <>
      <EmailIcon sx={{ color: "#722F37" }} fontSize="small"/>
      {label}
    </>
  );
};
const Phone = ({ label }) => {
  return (
    <>
      <PhoneIcon sx={{ color: "#722F37" }} fontSize="small" />
      {label}
    </>
  );
};
export const Left = () => {
  return (
    <Box sx={{display: 'flex', gap: '0.7em', justifyContent: 'flex-start'}}>
      <Typography
        variant="caption"
        sx={{ display: "flex", justifyContent: "center", fontSize: {sx: '0.7em', sm: 'small'}}}
        children={<Phone label="+(1) 2019375338" />}
      />
      <Divider orientation="vertical" sx={{ height: "1em", margin: "auto" }} />
      <Typography
      variant="caption"
        sx={{ display: "flex", justifyContent: "center", fontSize: {sx: '0.7em', sm: 'small'} }}
        children={<Email label="nova@gmail.com" />}
      />
      <Divider orientation="vertical" sx={{ height: "1em", margin: "auto" }} />
      <Typography
        variant="caption"
        sx={{ display: "flex", justifyContent: "center", fontSize: {sx: '0.7em', sm: 'small'} }}
        children={<Location label="Location" />}
      />
    </Box>
  );
};
