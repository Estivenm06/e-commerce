import React from "react";
import { Container, Box } from "@mui/material";
import { Header } from "./Header.jsx";
import {HeaderLogged} from './HeaderLogged.jsx'

const Index = ({ user, setUser, currentPage, cart, setAlert, filter, setFilter, filteredData }) => {
  return (
    <Container
      sx={{
        p: 3,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto'
      }}
      maxWidth="xl"
      disableGutters
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: 'space-between',
          alignItems: 'center',
          width: {sx: '100%', sm: '95%', md: '85%', lg: '80%', xl: '70%'}
        }}
        >
          {user?.username ? <HeaderLogged user={user} setUser={setUser} currentPage={currentPage} cart={cart} setAlert={setAlert} filter={filter} setFilter={setFilter} filteredData={filteredData} /> : <Header filteredData={filteredData} setUser={setUser} currentPage={currentPage} setAlert={setAlert} filter={filter} setFilter={setFilter} />}
      </Box>
    </Container>
  );
};

export default Index;
