import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Material-UI
import {
  Typography,
  Button,
  Box,
  TextField,
  Paper,
  IconButton,
  MenuItem,
  Menu,
} from "@mui/material";
import { ModalOverflow, ModalClose, ModalDialog, Modal } from "@mui/joy";
// Icons
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// Components
import { ListFilter } from "./utilsComponents/ListFilter.jsx";
import { Search } from "./utilsComponents/Search.jsx";
import { Register } from "./utilsComponents/Register.jsx";
import { Login } from "./utilsComponents/Login.jsx";

export const MenuSmall = ({
  setAlert,
  currentPage,
  filter,
  setFilter,
  filteredData,
  setUser,
}) => {
  const navigate = useNavigate();
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
          },
          position: "relative",
          flexDirection: "column",
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
        }}
      >
        <IconButton onClick={handleClick}>
          <MenuIcon />
        </IconButton>
        <Menu
          open={openMenu}
          anchorEl={anchorEl}
          onClose={handleCloseMenu}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
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
                      currentPage === "contact" ? "headerActive" : "textHeader"
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
                children={
                  <ShoppingCartIcon
                    sx={{ color: "orange" }}
                    onClick={() => {
                      setAlert({
                        message: "You must log-in first.",
                        type: "error",
                      });
                      setTimeout(() => setAlert(null), 2000);
                    }}
                  />
                }
              />
            }
          />
        </Menu>
      </Box>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "flex",
            xl: "flex",
          },
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
            setAlert({ message: "You must log-in first.", type: "error" });
            setTimeout(() => setAlert(null), 2000);
          }}
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
