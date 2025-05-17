import React from "react";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Left } from "./LeftSide";
import { Right } from "./RightSide";

const Content = ({ products, setAlert, user }) => {
  if (!products || products.length === 0) return;
  const mostRated = products.sort((a, b) => b.rating.rate - a.rating.rate).slice(0,1)
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ py: 4, backgroundColor: "#FFF5DA", alignItems: 'center' }}
    >
      <Grid
        container
      >
        <Grid sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: {
                xs: '100%',
                sm: '50%',
                md: '40%',
                lg: '40%',
                xl: '30%'
              },
              padding: {
                xs: '2em'
              }
            }}
          >
            <Left setAlert={setAlert} user={user}/>
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
            }}
          >
            <Right mostRated={mostRated[0]} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Content;
