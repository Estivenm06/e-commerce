import React from "react";
import { Container } from "@mui/material";
import { Header } from './Header.jsx';

const Index = ({setUser}) => {
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
        <Header setUser={setUser}/>
      </Container>
    </>
  );
};

export default Index;
