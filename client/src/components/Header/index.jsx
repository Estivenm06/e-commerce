import React from "react";
import { Container } from "@mui/material";
import { Right } from "./RightSide.jsx";
import { Left } from "./LeftSide.jsx";

const Header = () => {
  return (
    <>
      <Container
        sx={{
          p: 3,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
        maxWidth='lg'
        disableGutters
      >
        <Left />
        <Right />
      </Container>
    </>
  );
};

export default Header;
