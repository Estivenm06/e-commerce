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
import { useNavigate } from "react-router-dom";

export const HeaderLogged = ({ user, setUser }) => {
  const [visibility, setVisibility] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate()
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
        justifyContent: {sm: 'space-evenly', md: 'space-around', xl: 'space-between'},
        alignItems: "center",
        paddingInline: {xl: '17.2em'},
      }}
    >
     <Box
        sx={{ display: "flex", alignItems: 'center',}}
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
            paddingLeft: '2em',
            paddingRight: '3em'
          }}
        >
          <Button
            size="small"
            variant="none"
            sx={{ padding: "0.5em" }}
            children={<Typography className="textHeader" children="HOME" />}
            onClick={() => navigate("/logged")}
          />
          <Button
            size="small"
            variant="none"
            sx={{ padding: "0.5em" }}
            children={<Typography className="textHeader" children="SHOP" />}
            onClick={() => navigate("/shop")}
          />
          <Button
            size="small"
            variant="none"
            sx={{ padding: "0.5em" }}
            children={<Typography className="textHeader" children="CONTACT" />}
            onClick={() => navigate("/contact")}
          />
        </Box>
      </Box>
      {/* */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          flexDirection: 'row'
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
        <Avatar sx={{display: {              xs: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",}}}>{user.username.slice(0, 1)}</Avatar>
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
              children={
                <Button
                  size="small"
                  variant="none"
                  sx={{ padding: "0.5em" }}
                  children={
                    <Typography className="textHeader" children="HOME" />
                  }
                  onClick={() => navigate("/")}
                />
              }
            />
            <MenuItem
              children={
                <Button
                  size="small"
                  variant="none"
                  sx={{ padding: "0.5em" }}
                  children={
                    <Typography className="textHeader" children="SHOP" />
                  }
                  onClick={() => navigate("/")}
                />
              }
            />
            <MenuItem
              children={
                <Button
                  size="small"
                  variant="none"
                  sx={{ padding: "0.5em" }}
                  children={
                    <Typography className="textHeader" children="CONTACT" />
                  }
                  onClick={() => navigate("/")}
                />
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
