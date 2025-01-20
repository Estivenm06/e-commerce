import React, { useState } from "react";
import Menu from "../components/Menu/index.jsx";
import Header from "../components/Header/index.jsx";
import Content from "../components/Content/index.jsx";
import Product from "../components/Product/index.jsx";
import { Container, Divider, CssBaseline } from "@mui/material";

export const Home = ({ products, setUser, user, cart }) => {
  const [currentPage, setCurrentPage] = useState('/')
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ display: "flex", overflow: "hidden", flexDirection: "column" }}
    >
      <CssBaseline />
      <Menu />
      <Divider />
      <Header setUser={setUser} user={user} currentPage={currentPage} cart={cart} />
      <Divider />
      <Content products={products} />
      <Divider />
      <Product products={products} />
      <Divider />
    </Container>
  );
};
