import React, { useState, useEffect } from "react";
import Menu from "../components/Menu/index.jsx";
import Header from "../components/Header/index.jsx";
import ShopIndex from "../components/Shop/index.jsx";
import { Divider, Container, CssBaseline, Box } from "@mui/material";
import { Alert } from "../components/Error/Alert.jsx";

export const Shop = ({
  user,
  setUser,
  products,
  cart,
  setCart,
  handleAddToCart,
  alert,
  setAlert,
}) => {
  const [pageHeader, setPageHeader] = useState("shop");
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ display: "block", overflow: "hidden" }}
    >
      <CssBaseline />
      <Menu />
      <Divider />
      <Header
        user={user}
        setUser={setUser}
        currentPage={pageHeader}
        cart={cart}
      />
      <Divider />
      <ShopIndex
        products={products}
        user={user}
        setCart={setCart}
        cart={cart}
        handleAddToCart={handleAddToCart}
      />
      {alert ? (
        <Box
          sx={{
            position: 'fixed',
            bottom: '1em',
            left: '1em',
            zIndex: 1000,
            display: "inline-flex",
            padding: "1em",
            borderRadius: "0.5em",
          }}
        >
          <Alert alert={alert} />
        </Box>
      ) : null}
    </Container>
  );
};
