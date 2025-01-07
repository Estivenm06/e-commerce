import React from "react";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Left } from "./LeftSide";
import { Right } from "./RightSide";

const Content = ({ products }) => {
  if (!products || products.length === 0) return null;
  const mostRated = products.find((product) => Math.max(product.rating.rate));
  // xs: PhoneScreen, sm: TabletScreen, md: LaptopScreen, lg: DesktopScreen, xl: LargeDesktopScreen
  return (
    <Container
      maxWidth={false}
      sx={{ backgroundColor: "#FFF5DA", py: 4 }}
      disableGutters
    >
      <Grid
        container
        sx={{
          padding: "2em",
          paddingLeft: { sm: "25%", md: "25%", lg: "15em", xl: "15em" },
          margin: "auto",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            maxWidth: "100%",
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
                md: "40%",
                lg: "40%",
                xl: "40%",
              },
            }}
          >
            <Left />
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              margin: "auto",
            }}
          >
            <Right mostRated={mostRated} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
/*
      <Grid
        container
        spacing={2}
        sx={{
            py: 4,
            backgroundColor: "#FFF5DA",
          padding: { xs: "2%", sm: "4%", md: "7%" },
        }}
      >
        <Grid xs={2} sm={2} md={2} lg={2} >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: 'start',
              py: 2
            }}
          >
          </Box>
          <Box sx={{ height: "100%" }}>
          </Box>
        </Grid>
      </Grid>
<Left />
<Right mostRated={mostRated} />
*/
export default Content;
