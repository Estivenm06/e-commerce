import React, { useState } from "react";
import Menu from "../components/Menu/index.jsx";
import Header from '../components/Header/index.jsx'
import { Divider, Container, CssBaseline } from "@mui/material";

export const Contact = ({user, setUser}) => {
  const [currentPage, setCurrentPage] = useState('contact')
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ display: "block", overflow: "hidden" }}
    >
      <CssBaseline />
      <Menu />
      <Divider />
      <Header user={user} setUser={setUser} currentPage={currentPage}/>
      <Divider />
      <Divider />
    </Container>
  );
};
