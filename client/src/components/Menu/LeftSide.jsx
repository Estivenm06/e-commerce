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
      <EmailIcon sx={{ color: "#722F37" }} fontSize="small" />
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
    <>
      <Typography
        fontSize={"0.9em"}
        sx={{ display: "flex", justifyContent: "center", gap: "0.1em", alignItems: 'center'}}
        children={<Phone label="+(1) 2019375338" />}
      />
      <Divider orientation="vertical" sx={{ height: "1em", margin: "auto" }} />
      <Typography
        fontSize={"0.9em"}
        sx={{ display: "flex", justifyContent: "center", gap: "0.1em" }}
        children={<Email label="nova@gmail.com" />}
      />
      <Divider orientation="vertical" sx={{ height: "1em", margin: "auto" }} />
      <Typography
        fontSize={"0.9em"}
        sx={{ display: "flex", justifyContent: "center", gap: "0.1em" }}
        children={<Location label="Location" />}
      />
    </>
  );
};
