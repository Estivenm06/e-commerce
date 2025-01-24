import React, { useEffect, useState } from "react";
import { CardProduct } from "./Card.jsx";
import { Header } from "./Header.jsx";
import {
  Container,
  Box,
  Typography,
  Pagination,
  CircularProgress,
} from "@mui/material";
import { Summary } from "./Summary.jsx";

const Cart = ({ cart, setCart }) => {
  const [displayedCart, setDisplayedCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [option, setOption] = useState("price");
  const [loading, setLoading] = useState(true);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOption = (event) => {
    setOption(event.target.value);
  };

  const cartSorted = (option) => {
    switch (option) {
      case "price":
        return cart.sort((a, b) => b.item.price - a.item.price);
      case "quantity":
        return cart.sort((a, b) => b.quantity - a.quantity);
      case "rate":
        return cart.sort((a, b) => b.item.rating.rate - a.item.rating.rate);
      default:
        return cart;
    }
  };

  const handleDeleteItem = (item) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(
        (cartItem) => cartItem.item.id !== item.item.id
      );
      localStorage.setItem("userCart", JSON.stringify(updatedCart));

      return updatedCart;
    });
  };

  useEffect(() => {
    setLoading(false);
    const startIndex = (currentPage - 1) * 3;
    const endIndex = startIndex + 3;
    const cartByOption = cartSorted(option);
    setDisplayedCart(cartByOption.slice(startIndex, endIndex));
  }, [currentPage, option, cart]);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Container maxWidth="lg" sx={{ my: "2em", py: "2em" }}>
      <Box sx={{ display: "flex", paddingInline: "2em" }}>
        <Box
          sx={{
            flex: "4",
            padding: "2em",
            backgroundColor: "#575757",
            borderTopLeftRadius: "1em",
            borderBottomLeftRadius: "1em",
          }}
        >
          {loading ? (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                <CircularProgress />
                <Typography>Loading...</Typography>
              </Box>
            </>
          ) : (
            <>
              <Header
                cart={cart}
                open={open}
                handleClick={handleClick}
                handleClose={handleClose}
                anchorEl={anchorEl}
                option={option}
                handleOption={handleOption}
              />
              {cart.length === 0 ? (
                <Typography
                  variant="h6"
                  children="You have not products selected yet."
                  sx={{ color: "white", textAlign: "center" }}
                />
              ) : (
                displayedCart.map((item, id) => (
                  <CardProduct
                    item={item}
                    key={id}
                    handleDeleteItem={handleDeleteItem}
                  />
                ))
              )}
              <Pagination
                count={Math.ceil(cart.length / 3)}
                color="primary"
                page={currentPage}
                onChange={handleChangePage}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "1.5em",
                }}
              />
            </>
          )}
        </Box>
        <Box sx={{ flex: "1", backgroundColor: "#3A3A3A", padding: "2em" }}>
          {cart.length === 0 ? (
            <Typography
              variant="h6"
              children="You have not products selected yet."
              sx={{ color: "white", textAlign: "center" }}
            />
          ) : (
            <Summary cart={cart} displayed />
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Cart;
