import React from "react";
import { Container, Box } from "@mui/material";
import { Left } from "./LeftSide";
import { Right } from "./RightSide";

const Menu = () => {
  return (
    <Container
      sx={{
        p: 0.5,
      }}
      maxWidth={false}
      disableGutters
    >
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
      <Box sx={{display: 'flex', gap: '0.4em', alignItems: 'center'}}>
        <Left />
      </Box>
      <Box sx={{display: {xs: 'none', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex'}}}>
        <Right />
      </Box>
      </Box>
    </Container>
  );
};

export default Menu;
