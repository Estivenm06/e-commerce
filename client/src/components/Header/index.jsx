import React from "react";
import { Container, Box } from "@mui/material";
import { Header } from "./Header.jsx";
import {HeaderLogged} from './HeaderLogged.jsx'

const Index = ({ user, setUser, currentPage }) => {
  return (
    <Container
      sx={{
        p: 3,
        display: "flex",
      }}
      maxWidth="xl"
      disableGutters
    >
      <Box
        sx={{
          display: "flex",
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-evenly',
        }}>
          {user?.username ? <HeaderLogged user={user} setUser={setUser} currentPage={currentPage} /> : <Header setUser={setUser} currentPage={currentPage} />}
      </Box>
    </Container>
  );
};

export default Index;
