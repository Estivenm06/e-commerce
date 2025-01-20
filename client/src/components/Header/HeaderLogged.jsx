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
  Badge,
  styled,
} from "@mui/material";
import { badgeClasses } from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Search } from "./utilsComponents/Search.jsx";
import { logout } from "../../services/logout.js";
import { useNavigate } from "react-router-dom";

export const HeaderLogged = ({ user, setUser, currentPage, cart }) => {
  const [visibility, setVisibility] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => setAnchorEl(null);

  const toggleVisibility = () => setVisibility((prev) => !prev);

  const handleLogout = async () => {
    await logout();
    localStorage.removeItem("userLogged");
    setUser({});
    window.location.reload();
  };

  const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
      top: -12px;
      rigth: -6px;
    }
  `;

  return (
    <>
      <Box sx={{ display: "flex" }}>
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
            paddingLeft: "2em",
            paddingRight: "3em",
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
            onClick={() => {navigate("/"); window.location.reload()}}
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
            onClick={() => {navigate("/shop"); window.location.reload()}}
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
            onClick={() => {navigate("/contact"); window.location.reload()}}
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
        <Avatar
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
          {user.username.slice(0, 1)}
        </Avatar>
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
                    <Typography
                      className={
                        currentPage === "/" ? "headerActive" : "textHeader"
                      }
                      children="HOME"
                    />
                  }
                  onClick={() => {navigate("/"); window.location.reload()}}
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
                  onClick={() => {navigate("/shop"); window.location.reload()}}
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
                  onClick={() => {navigate("/contact"); window.location.reload()}}
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
            sx={{display: currentPage === 'cart' ? 'none' : "flex"}}
              children={
                <IconButton
                onClick={() => {navigate("/cart"); window.location.reload()}}
                >
                  <ShoppingCartIcon sx={{ color: "orange" }} />
                  <CartBadge
                    badgeContent={cart.length}
                    color="primary"
                    overlap="circular"
                  />
                </IconButton>
              } />
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
          sx={{
            marginRight: "1em",
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: currentPage === 'cart' ? 'none' : 'flex',
              xl: currentPage === 'cart' ? 'none' : 'flex',
            },
          }}
          onClick={() => {navigate("/cart"); window.location.reload()}}
        >
          <ShoppingCartIcon sx={{ color: "orange" }} />
          <CartBadge badgeContent={cart.length} color="primary" overlap="circular" />
        </IconButton>
        <Button
          onClick={handleLogout}
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",
            },
            border: "1px red solid",
            borderRadius: "0.5em",
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '0.5em'
          }}
          children={<Typography children="LOG OUT" variant="button" />}
          size="small"
        />
      </Box>
    </>
  );
};
