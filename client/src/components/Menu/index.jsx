import React from "react";
import { Container, Box } from "@mui/material";
import { Left } from "./LeftSide";
import { Right } from "./RightSide";

const Menu = () => {
  return (
    <Container
      sx={{
        p: 1,
        display: "flex",
        justifyContent: 'space-around',
      }}
      maxWidth='xl'
      disableGutters
    >
      <Box sx={{display: 'flex', gap: '0.7em', alignItems: 'center'}}>
        <Left />
      </Box>
      <Box sx={{display: {xs: 'none', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex'}}}>
        <Right />
      </Box>
    </Container>
  );
};

export default Menu;
