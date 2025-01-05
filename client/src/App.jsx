import Menu from "./components/Menu/index.jsx";
import Header from "./components/Header/index.jsx";
import Content from "./components/Content/index.jsx";
import Product from "./components/Product/index.jsx";
import { Container, Divider, CssBaseline } from "@mui/material";
import "./styles/index.scss";
import React, { useEffect, useState } from "react";
import { getAll } from "./services/product.js";

export const App = () => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await getAll();
      if (products) {
        setProducts(products);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <Menu />
        <Divider />
        <Header />
        <Divider />
        <Content products={products} />
        <Divider />
        <Product products={products} />
        <Divider />
      </Container>
    </>
  );
};