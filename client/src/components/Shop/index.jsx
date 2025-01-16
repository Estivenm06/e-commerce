import React, { useEffect, useState } from "react";
import { Container, Box } from "@mui/material";
import { Top } from "./top.jsx";
import { Products } from "./Products.jsx";

const ShopIndex = ({ products }) => {
  const [limit, setLimit] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [selected, setSelected] = useState(4);

  const handleSetLimit = (limit, selected) => {
    setLimit(limit);
    setSelected(selected);
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * limit;
    const endIndex = startIndex + limit;
    setDisplayedProducts(products.slice(startIndex, endIndex));
  }, [limit, currentPage, products]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      maxWidth={false}
      disableGutters
    >
      <Box sx={{ width: "100%" }}>
        <Top
          displayedProducts={displayedProducts}
          products={products}
          handleSetLimit={handleSetLimit}
          selected={selected}
        />
        <Products
          products={products}
          limit={limit}
          displayedProducts={displayedProducts}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Box>
    </Container>
  );
};

export default ShopIndex;
