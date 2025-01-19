import React, { useEffect, useState } from "react";
import { Container, Box } from "@mui/material";
import { Top } from "./top.jsx";
import { Products } from "./Products.jsx";

const ShopIndex = ({ products }) => {
  const [limit, setLimit] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [selected, setSelected] = useState(4);
  const [visual, setVisual] = useState('window')
  const [anchorElFilter, setAnchorElFilter] = useState(null)
  const [valueFilter, setValueFilter] = useState('All')
  const [anchorElSort, setAnchorSort] = useState(null)
  const [valueSort, setValueSort] = useState('Nothing')

  const handleRadioChangeSort = (event) => {
    setValueSort(event.target.value)
  }

  const openSort = Boolean(anchorElSort)

  const handleClickSort = (event) => {
    setAnchorSort(event.currentTarget)
  }

  const handleCloseSort = () => {
    setAnchorSort(null)
  }

  const handleRadioChangeFilter = (event) => {
    setValueFilter(event.target.value)
  }


  const openFilter = Boolean(anchorElFilter)
  const handleClickFilter = (event) => {
    setAnchorElFilter(event.currentTarget)
  }


  const handleCloseFilter = () => {
    setAnchorElFilter(null)
  }

  const handleSetLimit = (limit, selected) => {
    setLimit(limit);
    setSelected(selected);
  };

  const productsFilter = valueFilter === 'All' ? products : products.filter(product => product.category === valueFilter)

  const productsSort = (sort) => {
    const sortedProducts = [...productsFilter]
    switch(sort){
      case 'Nothing':
        return sortedProducts;
      case 'most rated':
        return sortedProducts.sort((a,b) => b.rating.rate - a.rating.rate)
      case 'lowest rated':
        return sortedProducts.sort((a, b) => a.rating.rate - b.rating.rate)
      case 'expensive':
        return sortedProducts.sort((a, b) => b.price - a.price)
        case 'cheapest':
        return sortedProducts.sort((a, b) => a.price - b.price)
      default:
        return sortedProducts;
    }
  }

  const productsSR = productsSort(valueSort)

  useEffect(() => {
    const startIndex = (currentPage - 1) * limit;
    const endIndex = startIndex + limit;
    const sortedProducts = productsSort(valueSort)
    setDisplayedProducts(sortedProducts.slice(startIndex, endIndex));
  }, [limit, currentPage, valueSort, valueFilter, products]);

  const handleMode = (mode) => {
    setVisual(mode)
  }

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
          products={productsFilter}
          handleSetLimit={handleSetLimit}
          selected={selected}
          visual={visual}
          handleMode={handleMode}
          openFilter={openFilter}
          handleClickFilter={handleClickFilter}
          handleCloseFilter={handleCloseFilter}
          anchorElFilter={anchorElFilter}
          handleRadioChangeFilter={handleRadioChangeFilter}
          valueFilter={valueFilter}
          openSort={openSort}
          handleClickSort={handleClickSort}
          handleCloseSort={handleCloseSort}
          anchorElSort={anchorElSort}
          handleRadioChangeSort={handleRadioChangeSort}
          valueSort={valueSort}
        />
        <Products
          products={productsSR}
          limit={limit}
          displayedProducts={displayedProducts}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          visual={visual}
        />
      </Box>
    </Container>
  );
};

export default ShopIndex;
