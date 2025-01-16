import React from "react";
import { IconButton, Button, Box, Divider, Typography, Container } from "@mui/material";

export const Top = ({ handleSetLimit, displayedProducts, products, selected }) => {
  const styleOn = {
    border: "1px black solid",
    width: "1.5em",
    height: "1.5em",
    color: 'black',
    transition: '0.5s'
  }
  const styleOff ={
    border: "1px grey solid",
    width: "1.5em",
    height: "1.5em",
    color: 'grey',
    transition: '0.5s'
  }
  return (
    <>
      <Container
        sx={{
          backgroundColor: "#FFF5DA",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "10%",
        }}
        maxWidth={false}
        disableGutters
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: "1em",
            width: "100%",
          }}
        >
          <Box sx={{ display: "inline-flex", flexDirection: "row" }} gap={0.5}>
            <IconButton
              children={<Typography variant="button" children="4" />}
              size="small"
              onClick={() => handleSetLimit(12, 4)}
              sx={selected === 4 ? styleOn : styleOff}
              />
            <IconButton
              children={<Typography variant="button" children="6" />}
              size="small"
              onClick={() => handleSetLimit(8, 6)}
              sx={selected === 6 ? styleOn : styleOff}
              />
            <IconButton
              children={<Typography variant="button" children="8" />}
              size="small"
              onClick={() => handleSetLimit(4, 8)}
              sx={selected === 8 ? styleOn : styleOff}
            />
          </Box>
          <Typography
            children={`Showing 1-${displayedProducts.length} of ${products.length} products`}
            variant="subtitle2"
          />
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Button>STYLE OF PRODUCTS</Button>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Button>FILTERS</Button>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Button>Sort by</Button>
        </Box>
        <Divider orientation="vertical" flexItem />
      </Container>
      <Divider flexItem />
    </>
  );
};
