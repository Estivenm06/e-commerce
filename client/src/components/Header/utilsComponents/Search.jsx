import React from "react";
import { Box, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Search = ({ visibility, tvisibility }) => {
    const searchStyle = {
      width: "10em",
      height: "2.5em",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
    return (
      <Box sx={searchStyle}>
        {visibility ? (
          <TextField
            size="small"
            color="none"
            label={<SearchIcon />}
            onMouseLeave={() => tvisibility()}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "flex",
                xl: "flex",
              },
              width: "100%",
              right: "0.5em",
              cursor: "pointer",
              transition: "0.5s",
            }}
          />
        ) : (
          <IconButton
            onMouseEnter={() => tvisibility()}
            sx={{
              width: "100%",
              height: "100%",
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "flex",
                xl: "flex",
              },
              justifyContent: "end",
              alignItems: "center",
              margin: "auto",
              cursor: "pointer",
              transition: "0.5s",
              color: "black",
            }}
            children={<SearchIcon />}
          />
        )}
      </Box>
    );
  };