import { Typography, Divider, Box, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import React from "react";

export const Right = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "0.5em",
        alignItems: "center",
      }}
    >
      <div>
        <Button
          disableElevation
          endIcon={<KeyboardArrowDown />}
          color="black"
          size="small"
        >
          USD
        </Button>
      </div>
      <Divider orientation="vertical" sx={{ height: "1em", margin: "auto" }} />
      <div>
        <Button
          disableElevation
          endIcon={<KeyboardArrowDown />}
          color="black"
          size="small"
        >
          ENG
        </Button>
      </div>
      <Divider orientation="vertical" sx={{ height: "1em", margin: "auto" }} />
      <Typography fontSize={"0.9em"}>
        <FacebookIcon color="primary" fontSize="small" />
      </Typography>
      <Typography fontSize={"0.9em"}>
        <XIcon fontSize="small" />
      </Typography>
      <Typography fontSize={"0.9em"}>
        <LinkedInIcon color="primary" fontSize="small" />
      </Typography>
      <Typography fontSize={"0.9em"}>
        <YouTubeIcon color="error" fontSize="small" />
      </Typography>
    </Box>
  );
};
