import React from "react";
import { Divider, Box, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const Right = () => {
  return (
    <>
      <Divider orientation="vertical" sx={{ height: "1em", margin: "auto" }} />
      <IconButton
        children={<FacebookIcon color="primary" fontSize="small" />}
      />
      <IconButton children={<XIcon fontSize="small" />} />
      <IconButton
        children={<LinkedInIcon color="primary" fontSize="small" />}
      />
      <IconButton children={<YouTubeIcon color="error" fontSize="small" />} />
    </>
  );
};
