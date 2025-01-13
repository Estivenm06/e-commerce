import React, { useState } from "react";
import {
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  TextField,
  Avatar,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Search } from "./Search.jsx";
import { logout } from "../../services/logout.js";

export const HeaderLogged = ({ user, setUser }) => {
  const [visibility, setVisibility] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => setAnchorEl(null);

  const toggleVisibility = () => setVisibility((prev) => !prev);

  const handleLogout = async () => {
    await logout()
    localStorage.removeItem('userLogged')
    setUser({})
  }

  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        justifyContent: {
          sm: "space-evenly",
          md: "space-around",
          lg: "space-evenly",
        },
        alignItems: "center",
        margin: 'auto'
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {/*IMAGE LOGO*/}
        <img
          src={"../../resources/LOGO.webp"}
          alt="LOGO"
          style={{
            padding: "0.5em",
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            border: "1px solid orange",
          }}
        />
        {/*xs PhoneScreen, sm TabletScreen, md TabletScreen, lg DesktopScreen, xl LargeDesktopScreen */}
        {/*MENU FOR LARGE SCREENS */}
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",
            },
            gap: "1.5em",
            paddingLeft: "2em",
          }}
        >
          <Typography className="textHeader" children="HOME" />
          <Typography className="textHeader" children="SHOP" />
          <Typography className="textHeader" children="COLLECTIONS" />
          <Typography className="textHeader" children="PAGES" />
          <Typography className="textHeader" children="CONTACT" />
        </Box>
      </Box>
      {/* */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Search visibility={visibility} tvisibility={toggleVisibility} />
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
        <IconButton
          children={<Avatar>{user.username.slice(0, 1)}</Avatar>}
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
        <Box
          sx={{
            display: {
              xs: "flex",
              sm: "flex",
              md: "flex",
              lg: "none",
              xl: "none",
            },
          }}
        >
          <IconButton
            onClick={handleClick}
            children={<Avatar>{user.username.slice(0, 1)}</Avatar>}
          />
          <Menu open={openMenu} anchorEl={anchorEl} onClose={handleCloseMenu}>
            <MenuItem
              children={<Typography className="textHeader" children="HOME" />}
            />
            <MenuItem
              children={<Typography className="textHeader" children="SHOP" />}
            />
            <MenuItem
              children={
                <Typography className="textHeader" children="COLLECTIONS" />
              }
            />
            <MenuItem
              children={<Typography className="textHeader" children="PAGES" />}
            />
            <MenuItem
              children={
                <Typography className="textHeader" children="CONTACT" />
              }
            />
            <MenuItem
              children={
                <IconButton
                  children={<FavoriteIcon sx={{ color: "orange" }} />}
                />
              }
            />
            <MenuItem
              children={
                <IconButton
                  children={<ShoppingCartIcon sx={{ color: "orange" }} />}
                />
              }
            />
            <MenuItem
              children={
                <Button
                  onClick={handleLogout}
                  children={<Typography children="LOG OUT" variant="button" />}
                  size="small"
                  sx={{
                    display: {
                      sx: "block",
                      sm: "block",
                      md: "block",
                      lg: "none",
                      xl: "none",
                    },
                    border: "1px red solid",
                    borderRadius: "0.5em",
                  }}
                />
              }
            />
          </Menu>
        </Box>
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
        <Button
          onClick={handleLogout}
          sx={{display: {xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block'}, border: '1px red solid', borderRadius: '0.5em'}}
          children={<Typography children="LOG OUT" variant="button" />}
          size="small"
        />
      </Box>
    </Box>
  );
};
