import React, { useState } from "react";
import Menu from "../components/Menu/index.jsx";
import Header from "../components/Header/index.jsx";
import CartIndex from "../components/Cart/index.jsx";
import { Divider, Container, CssBaseline, Box } from "@mui/material";
import { Alert } from "../components/Error/Alert.jsx";

export const Cart = ({ user, setUser, cart, alert, setAlert }) => {
  const [currentPage, setCurrentPage] = useState("cart");
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
        cart={cart}
        currentPage={currentPage}
      />
      <Divider />
      <CartIndex cart={cart} />
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
