import React, { useEffect, useState } from "react";
import { Rating, Box, Pagination, Typography } from "@mui/material";

export const Products = ({
  products,
  limit,
  displayedProducts,
  setCurrentPage,
  currentPage,
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

  const truncateTitle = (title) => {
    const keywords = title.split(/\s+/).slice(0, 3).join(" ");
    return keywords;
  };

  return (
    <Box
      sx={{
        display: "flex",
        paddingInline: "2em",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: '2em'
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
          py: 10,
          px: paddingPX(limit),
        }}
      >
        {displayedProducts.map((item) => (
          <Box
            sx={{ display: "flex", flexDirection: "column", padding: "0.5em" }}
            key={item.id}
          >
            <Box
              sx={{
                display: "inline-flex",
                border: "0.5em solid #7E88A8",
                borderRadius: "0.3em",
                justifyContent: "center",
                alignItems: "center",
                padding: "1em",
              }}
            >
              <img
                srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.image}?w=248fit=crop&auto=format`}
                alt={item.image}
                loading="lazy"
                style={{ width: "200px", height: "250px", objectFit: "fill" }}
              />
            </Box>
              <Typography
                variant="overline"
                fontSize={"small"}
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  overflow: "hidden",
                }}
                children={truncateTitle(item.title)}
              />
              <Typography
                variant="subtitle"
                fontSize={"80%"}
                sx={{ color: "grey" }}
                children={`$${item.price}`}
              />
            <Rating defaultValue={item.rating.rate} readOnly />
          </Box>
        ))}
      </Box>
      <Pagination
        count={Math.ceil(products.length / limit)}
        color="primary"
        page={currentPage}
        onChange={handleChangePage}
      />
    </Box>
  );
};
