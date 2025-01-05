import { Container, Typography, Box, Button } from "@mui/material";
import React from "react";

const Content = ({products}) => {
  if(!products){
    return;
  }
  const mostRated = products.find(product => Math.max(product.rating.rate))

  return (
    <Container
      maxWidth={false}
      sx={{ padding: '7%',paddingInline: '16%', backgroundColor: "#FFF5DA", display: "flex"}}
      disableGutters
    >
      <Box sx={{ display: "flex", flexDirection: "column", rowGap: "1.5em", width: '50%' }}>
        <Box>
          <Typography variant="body1">We are Ɲova</Typography>
          <Typography variant="h3">Style Your Own Way wtih Ɲova</Typography>
        </Box>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti
          consequatur sed quam dolor fugiat, necessitatibus maxime porro
          distinctio harum obcaecati laboriosam deserunt. Commodi nulla vero,
          laboriosam libero modi facilis?
        </Typography>
        <Box>
          <Button
            sx={{
              backgroundColor: "white",
              display: "flex",
              padding: "1em",
              paddingInline: "3.5em",
              borderRadius: "2em",
              backgroundColor: '#F2CC05',
              color: 'white'
            }}
          >
            <Typography variant="button">shop now</Typography>
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: '100%',
          justifyContent: "center",
          alignItems: "center",
          flexGrow: "1",
        }}
      >
          <img className="mostRated" src={mostRated?.image} alt="Most rated" height={'450px'} />

      </Box>
    </Container>
  );
};

export default Content;
