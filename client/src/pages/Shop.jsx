import React, { useState, useEffect } from "react";
import Menu from "../components/Menu/index.jsx";
import Header from "../components/Header/index.jsx";
import ShopIndex from "../components/Shop/index.jsx";
import { Divider, Container, CssBaseline } from "@mui/material";

export const Shop = ({user, setUser, products, cart, setCart, handleAddToCart}) => {
  const [pageHeader, setPageHeader] = useState('shop')

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ display: "block", overflow: "hidden" }}
    >
      <CssBaseline />
      <Menu />
      <Divider />
      <Header user={user} setUser={setUser} currentPage={pageHeader} cart={cart} />
      <Divider />
      <ShopIndex products={products} user={user} setCart={setCart} cart={cart} handleAddToCart={handleAddToCart}/>
    </Container>
  );
};
