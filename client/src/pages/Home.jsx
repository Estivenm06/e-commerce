import React, { useState } from "react";
import Menu from "../components/Menu/index.jsx";
import Header from "../components/Header/index.jsx";
import Content from "../components/Content/index.jsx";
import Product from "../components/Product/index.jsx";
import { Container, Divider, CssBaseline, Box } from "@mui/material";
import { Alert } from "../components/Error/Alert.jsx";

export const Home = ({ products, setUser, user, cart, alert, setAlert }) => {
  const [currentPage, setCurrentPage] = useState("/");
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ display: "flex", overflow: "hidden", flexDirection: "column" }}
    >
      <CssBaseline />
      <Menu />
      <Divider />
      <Header
        setUser={setUser}
        user={user}
        currentPage={currentPage}
        cart={cart}
      />
      <Divider />
      <Content products={products} />
      <Divider />
      <Product products={products} />
      <Divider />
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
