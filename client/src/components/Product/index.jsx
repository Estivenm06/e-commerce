import React, { useState } from "react";
import { Header } from "./Header";
import { Container } from "@mui/material";
import { Product } from "./Product";

const Index = ({ products }) => {
  const [feature, setFeature] = useState("recentListed");
  if (!products) {
    return;
  }

  const toggleFeature = (option) => {
    setFeature(option);
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "7%",
      }}
    >
      <Header toggleFeature={toggleFeature} />
      <Product products={products} feature={feature} />
    </Container>
  );
};

export default Index;
