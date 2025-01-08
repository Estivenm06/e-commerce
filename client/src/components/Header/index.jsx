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
          justifyContent: "space-between",
          alignItems: "center",
          paddingInline: { xs: "10%", sm: "10%", md: "auto", lg: "auto", xl: "15em" },
        }}
        maxWidth='xl'
      >
        <Left />
        <Right />
      </Container>
    </>
  );
};

export default Header;
