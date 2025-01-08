import React from "react";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Left } from "./LeftSide";
import { Right } from "./RightSide";

const Content = ({ products }) => {
  if (!products || products.length === 0) return null;
  const mostRated = products.find((product) => Math.max(product.rating.rate));
  return (
    <Container
      maxWidth={false}
      sx={{ backgroundColor: "#FFF5DA", py: 4, justifyContent: 'center', alignItems: 'center' }}
    >
      <Grid
        container
        sx={{
          padding: "2em",
          paddingInline: { xs: "10%", sm: "10%", md: "auto", lg: "auto", xl: "15em"},
        }}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              maxWidth: {
                xs: "100%",
                sm: "40%",
                md: "50%",
                lg: "50%",
                xl: "50%",
              },
            }}
          >
            <Left />
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
                md: "block",
                lg: "block",
                xl: "block",
              },
            }}
          >
            <Right mostRated={mostRated} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Content;
