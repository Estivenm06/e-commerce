import React from "react";
import { Container } from "@mui/material";
import { Right } from "./RightSide.jsx";
import { Left } from "./LeftSide.jsx";
// sx: PhoneScreen, md: TabletScreen, lg: LaptopScreen, xl: DesktopScreen

const Header = () => {
  return (
    <>
      <Container
        sx={{
          p: 3,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingInline: { xs: "2em", sm: "2em", md: "15em", lg: "15em", xl: "15em" },
        }}
        maxWidth='xl'
        disableGutters
      >
        <Left />
        <Right />
      </Container>
    </>
  );
};

export default Header;
