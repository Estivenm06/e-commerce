import React, { useState } from "react";
import {
  Box,
  Typography,
  Menu,
  MenuItem,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Login } from "./Login";
import { Register } from "./Register";
import { ModalOverflow, ModalClose, ModalDialog, Modal } from "@mui/joy";
import { Search } from "./Search.jsx";
import SearchIcon from "@mui/icons-material/Search";

export const Header = ({ setUser }) => {
  const [visibility, setVisibility] = useState(false);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [checked, setChecked] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  const openMenu = Boolean(anchorEl);

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
    });
  };

  const toggleChecked = () => {
    handleLocation();
    setChecked((prev) => !prev);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => setAnchorEl(null);

  const handleOpenLogin = () => {
    setOpen(true);
    handleCloseMenu();
  };

  const handleOpenRegister = () => {
    handleLocation();
    setOpen(true);
    handleCloseMenu();
    setChecked(true);
  };

  const handleClose = () => setOpen(false);

  const toggleVisibility = () => setVisibility((prev) => !prev);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
        {/*xs PhoneScreen, sm TabletScreen, md TabletScreen */}
        <Box
          sx={{
            display: {
              xs: "flex",
              sm: "flex",
              md: "flex",
              lg: "none",
              xl: "none",
            },
            paddingLeft: "0.5em",
          }}
        >
          <IconButton onClick={handleClick}>
            <MenuIcon />
          </IconButton>
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
                <Button
                  onClick={handleOpenLogin}
                  size="small"
                  disableElevation
                  sx={{
                    padding: "0.5em",
                    paddingInline: "1.5em",
                    border: "2px solid red",
                    borderRadius: "2em",
                    color: "primary",
                    transition: "0.5s",
                  }}
                  children={<Typography variant="button" children="LOG IN" />}
                />
              }
            />
            <MenuItem
              children={
                <IconButton
                  onClick={handleOpenRegister}
                  size="small"
                  children={<Typography color="black" children="SIGN UP" />}
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
          </Menu>
        </Box>
        {/* lg DesktopScreen, xl LargeDesktopScreen */}
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
        {/* */}
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
            onClick={handleOpenLogin}
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
          <Modal open={open} onClose={handleClose}>
            <ModalOverflow>
              <ModalDialog layout="center" sx={{ backgroundColor: "#FFF5DA" }}>
                <ModalClose />
                {checked ? (
                  <Register
                    checked={checked}
                    toggleChecked={toggleChecked}
                    userLocation={userLocation}
                    handleClose={handleClose}
                  />
                ) : (
                  <Login
                    setUser={setUser}
                    checked={checked}
                    toggleChecked={toggleChecked}
                  />
                )}
              </ModalDialog>
            </ModalOverflow>
          </Modal>
          <Button
            onClick={handleOpenRegister}
            size="small"
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
