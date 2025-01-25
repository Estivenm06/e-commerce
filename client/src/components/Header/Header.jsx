import React, { useState } from "react";
import {
  Box,
  Typography,
  Menu,
  MenuItem,
  Button,
  IconButton,
  TextField,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Login } from "./utilsComponents/Login.jsx";
import { Register } from "./utilsComponents/Register.jsx";
import { ModalOverflow, ModalClose, ModalDialog, Modal } from "@mui/joy";
import { Search } from "./utilsComponents/Search.jsx";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { ListFilter } from "./utilsComponents/ListFilter.jsx";
import logo from './LOGO.webp'

export const Header = ({
  setUser,
  currentPage,
  setAlert,
  filter,
  setFilter,
  filteredData,
}) => {
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
    navigate("/");
  };

  const handleOpenRegister = () => {
    handleLocation();
    setOpen(true);
    handleCloseMenu();
    setChecked(true);
    navigate("/");
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Box sx={{ display: "inline-flex", justifyContent: "flex-start" }}>
        {/*IMAGE LOGO */}
        <img
          src={logo}
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
            children={
              <Typography
                className={currentPage === "/" ? "headerActive" : "textHeader"}
                children="HOME"
              />
            }
            onClick={() => {
              navigate("/");
            }}
          />
          <Button
            size="small"
            variant="none"
            sx={{ padding: "0.5em" }}
            children={
              <Typography
                className={
                  currentPage === "shop" ? "headerActive" : "textHeader"
                }
                children="SHOP"
              />
            }
            onClick={() => {
              navigate("/shop");
            }}
          />
          <Button
            size="small"
            variant="none"
            sx={{ padding: "0.5em" }}
            children={
              <Typography
                className={
                  currentPage === "contact" ? "headerActive" : "textHeader"
                }
                children="CONTACT"
              />
            }
            onClick={() => {
              navigate("/contact");
            }}
          />
        </Box>
      </Box>
      {/* */}
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Search
          filter={filter}
          setFilter={setFilter}
          filteredData={filteredData}
        />
        <Box
          sx={{
            display: {
              xs: "flex",
              sm: "flex",
              md: "flex",
              lg: "none",
              xl: "none",
              flexDirection: "column",
              position: "relative",
            },
          }}
        >
          <TextField
            size="small"
            color="none"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            sx={{
              cursor: "pointer",
              transition: "0.5s",
              justifyContent: "end",
              alignItems: "center",
              width: "100%",
            }}
            label={<SearchIcon />}
          />
          {filter && (
            <Paper
              elevation={3}
              sx={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                zIndex: 1,
                bgcolor: "background.paper",
              }}
            >
              {filteredData.map((item, id) => (
                <ListFilter key={id} item={item} />
              ))}
            </Paper>
          )}
        </Box>
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
                  children={
                    <Typography
                      className={
                        currentPage === "/" ? "headerActive" : "textHeader"
                      }
                      children="HOME"
                    />
                  }
                  onClick={() => {
                    navigate("/");
                  }}
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
                    <Typography
                      className={
                        currentPage === "shop" ? "headerActive" : "textHeader"
                      }
                      children="SHOP"
                    />
                  }
                  onClick={() => {
                    navigate("/shop");
                  }}
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
                    <Typography
                      className={
                        currentPage === "contact"
                          ? "headerActive"
                          : "textHeader"
                      }
                      children="CONTACT"
                    />
                  }
                  onClick={() => {
                    navigate("/contact");
                  }}
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
              children={
                <IconButton
                  children={<ShoppingCartIcon sx={{ color: "orange" }} 
                  onClick={() => {
                    setAlert({ message: "You must log-in first.", type: "error" })
                    setTimeout(() => setAlert(null), 2000);
                  }
                  }/>}
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
          onClick={() => {
            setAlert({ message: "You must log-in first.", type: "error" })
            setTimeout(() => setAlert(null), 2000);
          }
          }
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
