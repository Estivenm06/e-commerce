import React, { useState } from "react";
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
  handleAddToCart,
  alert,
  setAlert,
  setFilter,
  filteredData,
  filter
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
        setAlert={setAlert}
        filter={filter}
        filteredData={filteredData}
        setFilter={setFilter}
      />
      <Divider />
      <ShopIndex
        products={products}
        user={user}
        cart={cart}
        handleAddToCart={handleAddToCart}
        setAlert={setAlert}
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
