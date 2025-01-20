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
import { Login } from "./utilsComponents/Login.jsx";
import { Register } from "./utilsComponents/Register.jsx";
import { ModalOverflow, ModalClose, ModalDialog, Modal } from "@mui/joy";
import { Search } from "./utilsComponents/Search.jsx";
import SearchIcon from "@mui/icons-material/Search";
import {useNavigate} from 'react-router-dom'

export const Header = ({ setUser, currentPage }) => {
  const [visibility, setVisibility] = useState(false);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [checked, setChecked] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const navigate = useNavigate();

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
    setChecked(false);
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
        sx={{ display: "flex" }}
      >
        {/*IMAGE LOGO */}
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
            marginLeft: "2em",
          }}
        >
          <Button
            size="small"
            variant="none"
            sx={{ padding: "0.5em" }}
            children={<Typography className={currentPage === '/' ? 'headerActive': 'textHeader'} children="HOME" />}
            onClick={() => {navigate('/'); window.location.reload()}}
          />
          <Button
            size="small"
            variant="none"
            sx={{ padding: "0.5em" }}
            children={<Typography className={currentPage === 'shop' ? 'headerActive': 'textHeader'} children="SHOP" />}
            onClick={() => {navigate('/shop'); window.location.reload()}}
          />
          <Button
            size="small"
            variant="none"
            sx={{ padding: "0.5em" }}
            children={<Typography className={currentPage === 'contact' ? 'headerActive': 'textHeader'}children="CONTACT" />}
            onClick={() => {navigate('/contact'); window.location.reload()}}
          />
        </Box>
      </Box>
      {/* */}
      <Box
        sx={{
          display: "flex",
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
              children={
                <Button
                  size="small"
                  variant="none"
                  sx={{ padding: "0.5em" }}
                  children={<Typography className={currentPage === '/' ? 'headerActive': 'textHeader'} children="HOME" />}
                  onClick={() => {navigate('/'); window.location.reload()}}
                />
              }
            />
            <MenuItem
              children={
                <Button
                  size="small"
                  variant="none"
                  sx={{ padding: "0.5em" }}
                  children={<Typography className={currentPage === 'shop' ? 'headerActive': 'textHeader'} children="SHOP" />}
                  onClick={() => {navigate('/shop'); window.location.reload()}}
                />
              }
            />
            <MenuItem
              children={
                <Button
                  size="small"
                  variant="none"
                  sx={{ padding: "0.5em" }}
                  children={<Typography className={currentPage === 'contact' ? 'headerActive': 'textHeader'} children="CONTACT" />}
                  onClick={() => {navigate('/contact'); window.location.reload()}}
                />
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
              onClick={() => alert("You must log-in first.")}
              children={
                <IconButton
                  children={<FavoriteIcon sx={{ color: "orange" }} />}
                />
              }
            />
            <MenuItem
              onClick={() => alert("You must log-in first.")}
              children={
                <IconButton
                  children={<ShoppingCartIcon sx={{ color: "orange" }} />}
                />
              }
            />
          </Menu>
        </Box>
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
              lg: "flex",
              xl: "flex",
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
                  lg: "flex",
                  xl: "flex",
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
                  lg: "flex",
                  xl: "flex",
                },
              }}
            />
          }
        />
        <IconButton
          onClick={() => alert("You must log-in first.")}
          children={<FavoriteIcon sx={{ color: "orange" }} />}
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",
            },
          }}
        />
        <IconButton
          onClick={() => alert("You must log-in first.")}
          children={
            <ShoppingCartIcon
              sx={{
                color: "orange",
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "flex",
                  xl: "flex",
                },
              }}
            />
          }
        />
      </Box>
    </>
  );
};
