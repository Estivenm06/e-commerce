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
  Paper,
} from "@mui/material";
import { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Search } from "./utilsComponents/Search.jsx";
import { logout } from "../../services/logout.js";
import { useNavigate } from "react-router-dom";
import { createOneCart } from "../../services/cart.js";
import { ListFilter } from "./utilsComponents/ListFilter.jsx";

export const HeaderLogged = ({
  user,
  setUser,
  currentPage,
  cart,
  filter,
  setFilter,
  filteredData
}) => {
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
      <Box sx={{ display: "flex", }}>
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
          display: "flex",
          alignItems: "center",
        }}
      >
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
              flexDirection: "column",
              position: 'relative',
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
              width: '100%'
            }}
            label={<SearchIcon />}
          />
          {filter && <Paper elevation={3} sx={{position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 1, bgcolor: 'background.paper'}}>{filteredData.map((item, id) => <ListFilter item={item} key={id}/>)}</Paper>}
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
            margin: 'auto'
          }}
          children={<Typography children="LOG OUT" variant="button" />}
          size="small"
        />
      </Box>
    </>
  );
};
