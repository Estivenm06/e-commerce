import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const Header = ({toggleFeature}) => {
  return (
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            rowGap: "1em",
          }}
        >
          <Box>
            <Typography variant="overline" color="#F53B2F">Get Your's One</Typography>
            <Typography variant="h3">Products Are on Sale</Typography>
          </Box>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </Box>
        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          columns={{ xs: 0, sm: 9, md: 12 }}
          marginTop={'10%'}
        >
          <Grid size={{xs: 1, sm: 3, md: 4}}>
            <Button className="buttonProduct" onClick={() => toggleFeature('recentListed')}>Recent Listed</Button>
          </Grid>
          <Grid size={{xs: 1, sm: 3, md: 4}}>
            <Button className="buttonProduct" onClick={() => toggleFeature('lowerPrices')}>Lower Prices</Button>
          </Grid>
          <Grid size={{xs: 1, sm: 3, md: 4}}>
            <Button className="buttonProduct" onClick={() => toggleFeature('topFeatured')}>Top Featured</Button>
          </Grid>
        </Grid>
      </Box>
  );
};
