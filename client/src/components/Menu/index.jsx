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
        justifyContent: {sx: 'space-evenly', md: 'space-between'},
        alignItems: "center",
        textAlign: "center",
      }}
    >
        <Left />
        <Right />
    </Container>
  );
};

export default MenuTop;
