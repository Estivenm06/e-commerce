import React from "react";
import Menu from "../components/Menu/index.jsx";
import Content from "../components/Content/index.jsx";
import Product from "../components/Product/index.jsx";
import { Container, Divider, CssBaseline, Box } from "@mui/material";
import { HeaderLogged } from "../components/Header/HeaderLogged.jsx";

export const Logged = ({ products, user, setUser }) => {
  if (!user) {
    return null;
  }

  return (
    <>
      <CssBaseline />
      <Container
        maxWidth={false}
        disableGutters
        sx={{ display: "flex",justifyContent: 'center', flexDirection: 'column', overflow: "hidden" }}
      >
          <Menu />
          <Divider />
          <HeaderLogged user={user} setUser={setUser} />
          <Divider />
          <Content products={products} />
          <Divider />
          <Product products={products} />
          <Divider />
      </Container>
    </>
  );
};
