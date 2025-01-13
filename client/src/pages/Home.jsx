import React from "react";
import Menu from "../components/Menu/index.jsx";
import Header from "../components/Header/index.jsx";
import Content from "../components/Content/index.jsx";
import Product from "../components/Product/index.jsx";
import { Container, Divider, CssBaseline } from "@mui/material";

export const Home = ({ products, setUser }) => {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth={false}
        disableGutters
        sx={{ display: "block", overflow: "hidden" }}
      >
        <Menu />
        <Divider />
        <Header setUser={setUser}/>
        <Divider />
        <Content products={products} />
        <Divider />
        <Product products={products} />
        <Divider />
      </Container>
    </>
  );
};
