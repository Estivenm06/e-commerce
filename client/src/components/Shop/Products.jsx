import React from "react";
import { Box, Pagination } from "@mui/material";
import { ListMode, WindowMode } from "./Product";

export const Products = ({
  products,
  limit,
  displayedProducts,
  setCurrentPage,
  currentPage,
  visual
}) => {
  
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const paddingPX = (limit) => {
    switch (limit) {
      case 12:
        return "20em";
      case 8:
        return "10em";
      case 10:
        return "3em";
      default:
        return "";
    }
  };

  const styleWindow = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    px: {xl: paddingPX(limit)},
  }

  const styleList = {
    display: 'flex',
    flexDirection: 'row',
    paddingInline: '2em',
    flexWrap: 'wrap',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <Box
      sx={{
        display: "flex",
        paddingInline: "2em",
        flexDirection: "column",
        py: '4em',
      }}
      gap={'2em'}
    >
      <Box
        sx={visual === 'window' ? styleWindow : styleList}
      >
        {displayedProducts.map((item) => visual === 'window' ? <WindowMode item={item} key={item.id}/> : <ListMode item={item} key={item.id}/>)}
      </Box>
      <Pagination
        count={Math.ceil(products.length / limit)}
        color="primary"
        page={currentPage}
        onChange={handleChangePage}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
      />
    </Box>
  );
};
