import React from "react";
import { Divider, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { redirect } from "react-router";

export const Right = () => {
  return (
    <>
      <Divider orientation="vertical" sx={{ height: "1em", margin: "auto" }} />
      <IconButton
        onClick={() => window.location.replace("https://www.facebook.com/")}
        children={<FacebookIcon color="primary" fontSize="small" />}
      />
      <IconButton
        onClick={() => window.location.replace("https://x.com/")}
        children={<XIcon fontSize="small" />}
      />
      <IconButton
        onClick={() => window.location.replace("https://www.linkedin.com/")}
        children={<LinkedInIcon color="primary" fontSize="small" />}
      />
      <IconButton
        onClick={() => window.location.replace("https://www.youtube.com/")}
        children={<YouTubeIcon color="error" fontSize="small" />}
      />
    </>
  );
};
