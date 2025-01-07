import React from "react";
import { Container } from "@mui/material";
import { Right } from "./RightSide.jsx";
import { Left } from "./LeftSide.jsx";
// sx: PhoneScreen, md: TabletScreen, lg: LaptopScreen, xl: DesktopScreen, sm: TabletScreen

const Header = () => {
  return (
    <>
      <Container
        sx={{
          p: 3,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingInline: { xs: "10%", sm: "10%", md: "auto", lg: "5em", xl: "15em" },
          margin: 'auto'
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
