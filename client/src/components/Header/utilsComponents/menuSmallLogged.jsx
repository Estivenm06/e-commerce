import React, { useState } from "react";
// Material-UI
import {
  Typography,
  Box,
  TextField,
  Avatar,
  Paper,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Badge,
  styled,
  badgeClasses,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// React-Router-Dom
import { useNavigate } from "react-router-dom";
//Components
import { Search } from "./Search.jsx";
import { ListFilter } from "./ListFilter.jsx";
// Services
import { createOneCart } from "../../../services/cart";
import { logout } from "../../../services/logout.js";

export const MenuSmallLogged = ({
  currentPage,
  filter,
  setFilter,
  filteredData,
  user,
  setUser,
  cart,
}) => {
  const navigate = useNavigate();
  const [visibility, setVisibility] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => setAnchorEl(null);

  const toggleVisibility = () => setVisibility((prev) => !prev);

  const handleLogout = async () => {
    const products = cart.map((item) => item);
    await createOneCart(products);
    await logout();
    setUser(null);
    localStorage.removeItem("userLogged");
    localStorage.removeItem("userCart");
    navigate("/");
  };

  const handleCart = async () => {
    navigate("/cart");
  };

  const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
      top: -12px;
      rigth: -6px;
    }
  `;

  return (
    <>

      <Search
        visibility={visibility}
        tvisibility={toggleVisibility}
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
            flexDirection: "column",
            position: "relative",
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
                <ListFilter item={item} key={id} />
              ))}
            </Paper>
          )}
        </Box>

        <Avatar
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",
            },
            marginRight: {
              lg: "0.5em",
              xl: "0.5em",
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
        <Menu open={openMenu} anchorEl={anchorEl} onClose={handleCloseMenu}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
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
            sx={{ display: currentPage === "cart" ? "none" : "flex" }}
            children={
              <IconButton onClick={() => handleCart()}>
                <ShoppingCartIcon sx={{ color: "orange" }} />
                <CartBadge
                  badgeContent={cart?.length}
                  color="primary"
                  overlap="circular"
                />
              </IconButton>
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

      <Box sx={{display: {sx: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex'}}}>
      <IconButton
        sx={{
          marginRight: "1em",
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: currentPage === "cart" ? "none" : "flex",
            xl: currentPage === "cart" ? "none" : "flex",
          },
        }}
        onClick={() => handleCart()}
      >
        <ShoppingCartIcon sx={{ color: "orange" }} />
        <CartBadge
          badgeContent={cart?.length}
          color="primary"
          overlap="circular"
        />
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
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "0.5em",
          margin: "auto",
        }}
        children={<Typography children="LOG OUT" variant="button" />}
        size="small"
      />
      </Box>
    </>
  );
};
