import React, { useState } from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Search = ({ visibility, ttrue, tfalse }) => {
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
          onMouseOut={() => tfalse()}
          sx={{ width: "100%", right: "0.5em" }}
        />
      ) : (
        <Button
          variant="error"
          size="small"
          onMouseOver={() => ttrue()}
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <SearchIcon className="search" />
        </Button>
      )}
    </Box>
  );
};

export const Right = () => {
  const [visibility, setVisibility] = useState(false);

  const toggleVisibilityTrue = () => {
    setVisibility(true);
  };

  const toggleVisibilityFalse = () => {
    setVisibility(false);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Search
          visibility={visibility}
          ttrue={toggleVisibilityTrue}
          tfalse={toggleVisibilityFalse}
        />
        <Box sx={{ display: "flex", gap: "0.5em", alignItems: "center" }}>
          <Button
            size="small"
            disableElevation
            sx={{
              padding: "0.5em",
              paddingInline: "1.5em",
              border: "1px solid red",
              borderRadius: "2em",
            }}
          >
            <Typography variant="button">LOG IN</Typography>
          </Button>
          <Typography>SIGN UP</Typography>
          <FavoriteIcon sx={{ color: "orange" }} />
          <ShoppingCartIcon sx={{ color: "orange" }} />
        </Box>
      </Box>
    </>
  );
};
