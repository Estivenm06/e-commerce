import React from "react";
import { Container, Box } from "@mui/material";
import { Left } from "./LeftSide";
import { Right } from "./RightSide";

const MenuTop = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        p: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
        paddingInline: { xs: "1em", sm: "7em", md: "8em", lg: "8.5em", xl: "15em" },
      }}
    >
      <Box sx={{display: 'flex', flexDirection: 'row', gap: '0.5em', justifyContent: 'center', alignItems: 'center'}}>
        <Left />
      </Box>
      <Box sx={{display: {xs: 'none', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}}>
        <Right />
      </Box>
    </Container>
  );
};

export default MenuTop;
