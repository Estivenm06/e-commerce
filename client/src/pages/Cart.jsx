import React, { useState } from "react";
import Menu from "../components/Menu/index.jsx";
import Header from "../components/Header/index.jsx";
import { Divider, Container, CssBaseline } from "@mui/material";

export const Cart = ({ user, setUser, cart }) => {
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
      <Divider />
    </Container>
  );
};
