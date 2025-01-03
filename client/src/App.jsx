import React from "react";
import Menu from "./components/Menu/index.jsx";
import Header from "./components/Header/index.jsx";
import Content from "./components/Content/index.jsx";
import { Container, Divider, CssBaseline } from "@mui/material";
import "./styles/index.scss";

export const App = () => {
  return (
    <>
      <CssBaseline />
        <Container maxWidth={false} disableGutters>
          <Menu />
          <Divider/>
          <Header />
          <Divider/>
          <Content />
          <Divider/>
        </Container>
    </>
  );
};
