import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";

export const Header = ({ toggleFeature }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        rowGap: "1em",
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2em',
        flexWrap: "wrap",
      }}
    >
      <Typography variant="overline" color="#F53B2F">
        Get Yours One
      </Typography>
      <Typography variant="h3">Products Are on Sale</Typography>
      <Typography variant="subtitle1">
        Take a look for these products.
      </Typography>
      <Grid
        container
        spacing={{ xs: 1, md: 3 }}
        columns={{ xs: 0, sm: 9, md: 12 }}
      >
        <Grid
          xs={1}
          sm={3}
          md={4}
        >
          <Button
            className="buttonProduct"
            onClick={() => toggleFeature("recentListed")}
          >
            Recent Listed
          </Button>
          <Button
            className="buttonProduct"
            onClick={() => toggleFeature("lowerPrices")}
          >
            Lower Prices
          </Button>
          <Button
            className="buttonProduct"
            onClick={() => toggleFeature("topFeatured")}
          >
            Top Featured
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
