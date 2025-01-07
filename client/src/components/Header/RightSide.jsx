import React, { useState } from "react";
import { Box, Button, Typography, IconButton, TextField } from "@mui/material";
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
          onMouseLeave={() => tfalse()}
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
          onMouseEnter={() => ttrue()}
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
            <TextField
              size="small"
              color="none"
              sx={{
                cursor: "pointer",
                transition: "0.5s",
                display: {
                  xs: "flex",
                  sm: "flex",
                  md: "flex",
                  lg: "none",
                  xl: "none",
                },
                justifyContent: "end",
                alignItems: "center",
              }}
              label={<SearchIcon />}
            />
        <Box
          sx={{
            display: "flex",
            gap: "0.5em",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            size="small"
            disableElevation
            sx={{
              padding: "0.5em",
              paddingInline: "1.5em",
              border: "2px solid red",
              borderRadius: "2em",
              color: "primary",
              transition: "0.5s",
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "block",
                xl: "block",
              },
            }}
            children={
              <Typography
                variant="button"
                children="LOG IN"
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "none",
                    lg: "block",
                    xl: "block",
                  },
                }}
              />
            }
          />
          <IconButton
            children={
              <Typography
                color="black"
                children="SIGN UP"
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "none",
                    lg: "block",
                    xl: "block",
                  },
                }}
              />
            }
          />
          <IconButton
            children={<FavoriteIcon sx={{ color: "orange" }} />}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "block",
                xl: "block",
              },
            }}
          />
          <IconButton
            children={
              <ShoppingCartIcon
                sx={{
                  color: "orange",
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "none",
                    lg: "block",
                    xl: "block",
                  },
                }}
              />
            }
          />
        </Box>
      </Box>
    </>
  );
};
