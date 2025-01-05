import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Box, ImageList, ImageListItem } from "@mui/material";

const Products = ({ products, feature }) => {
  switch (feature) {
    case "recentListed":
      return (
        <>
          {products.slice(0, 3).map((item) => {
            return (
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                sx={{ padding: "1em" }}
              >
                <Grid size={{ xs: 2, sm: 4, md: 4 }} key={item.id}>
                  <img
                    className="PhotoProduct"
                    src={item.image}
                    alt="recent"
                    height={"350px"}
                  />
                </Grid>
              </Grid>
            );
          })}
        </>
      );
    case "lowerPrices":
      const productsLowerPrices = [];
      products.map((item) => {
        if (item.price < 20) {
          productsLowerPrices.push(item);
        }
      });
      return (
        <>
          {productsLowerPrices.slice(0, 3).map((item) => {
            return (
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                sx={{ padding: "1em" }}
              >
                <Grid size={{ xs: 2, sm: 4, md: 4 }} key={item.id}>
                  <img
                    className="PhotoProduct"
                    src={item.image}
                    alt="lower"
                    height={"350px"}
                  />
                </Grid>
              </Grid>
            );
          })}
        </>
      );
    case "topFeatured":
      const topFeatured = [];
      products.map((item) => {
        if (item.rating.rate > 4) {
          topFeatured.push(item);
        }
      });
      return (
        <>
          {topFeatured.slice(0, 3).map((item) => {
            return (
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                sx={{ padding: "1em" }}
              >
                <Grid size={{ xs: 2, sm: 4, md: 4 }} key={item.id}>
                  <img
                    className="PhotoProduct"
                    src={item.image}
                    alt="featured"
                    height={"350px"}
                    />
                </Grid>
              </Grid>
            );
          })}
        </>
      );
  }
};

export const Product = ({ products, feature }) => {
  if (!products) {
    return;
  }
  return (
    <>
      <Box sx={{ display: "flex", marginTop: "5%" }}>
        <ImageList sx={{width: 500, height: 450, transform: 'translateZ(0)'}} gap={1}>
          <ImageListItem>

          </ImageListItem>
        </ImageList>
      </Box>
    </>
  );
};
/*
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ padding: "1em" }}
          >
          {products.slice(0, 3).map((item, id) => {return (<>
          <Grid size={{xs: 2, sm: 4, md: 4}} key={id}>
          <img
            className="PhotoProduct"
            src={item?.image}
            alt="featured"
            height={"350px"}/>
          </Grid>
          </>)})}
        </Grid>
*/
// <Products products={products} feature={feature} />
