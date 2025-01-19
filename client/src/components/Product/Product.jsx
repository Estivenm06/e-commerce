import React from "react";
import {
  Typography,
  Box
} from "@mui/material";
import Grid from "@mui/material/Grid2";

const Price = ({ price }) => {
  return (
    <Typography
      variant="body2"
      sx={{
        color: "white",
        backgroundColor: "#E68209",
        borderRadius: "0.2em",
        marginInline: "0.5em",
        padding: "0.4em",
      }}
    >
      ${price}
    </Typography>
  );
};

export const Product = ({ products, feature }) => {
  const getFilteredProducts = (feature) => {
    switch (feature) {
      case "recentListed":
        return products.slice(0, 3);
      case "lowerPrices":
        return products.sort((a,b) => a.price - b.price).slice(0, 3);
      case "topFeatured":
        return products.sort((a,b) => b.rating.rate - a.rating.rate).slice(0, 3);
      default:
        return [];
    }
  };

  const filteredProducts = getFilteredProducts(feature);
  if (!filteredProducts || filteredProducts.length === 0) {
    return <Typography>"No products found for this category"</Typography>;
  }

  const truncateTitle = (title) => {
    const keywords = title.split(/\s+/).slice(0, 3).join(' ')
    return keywords
  }

  return (
    <Grid container spacing={1} sx={{ py: '2em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {filteredProducts.map((item) => (
            <Grid xs={12} sm={6} md={4} key={item.id}>
                <Box sx={{ padding: '0.5em',border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <img
                        srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.image}?w=248&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                        style={{ width: "200px", height: "250px", objectFit: "fill"}}
                    />
                    <Box sx={{ padding: '1em', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6" children={truncateTitle(item.title)}/>
                        <Price price={item.price} />
                    </Box>
                </Box>
            </Grid>
        ))}
    </Grid>
);
};