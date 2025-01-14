import React from "react";
import { Container} from "@mui/material";
import { Left } from "./LeftSide";
import { Right } from "./RightSide";

const MenuTop = () => {
  return (
    <Container
      sx={{
        p: 0.5,
        display: "flex",
        justifyContent: {xs: 'center', sm: 'space-evenly', md: 'space-around', xl: 'space-between', lg: 'space-around'},
        alignItems: "center",
        textAlign: "center",
        width: '100%',
        paddingInline: {xl: '6em'}
      }}
    >
        <Left />
        <Right />
    </Container>
  );
};

export default MenuTop;
