import React from "react";
import { Right } from "./RightSide";
import { Left } from "./LeftSide";
import { Container } from "@mui/material";

const MenuTop = () => {
  return (
    <Container
      sx={{
        p: 0.5,
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
      maxWidth="xl"
      disableGutters
    >
      <Left />
      <Right />
    </Container>
  );
};

export default MenuTop;
