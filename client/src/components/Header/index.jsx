import React from "react";
import { Container, Box } from "@mui/material";
import { Header } from "./Header.jsx";
import {HeaderLogged} from './HeaderLogged.jsx'

const Index = ({ user, setUser, currentPage, cart, setAlert, filter, setFilter, filteredData }) => {
  return (
    <Container
      sx={{
        display: 'flex',
        p: 3,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      maxWidth={false}
      disableGutters
    >
      <Box sx={{display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: {xs: '100%', sm: '85%', md: '85%', lg: '80%', xl:'65%'}}}>
          {user?.username ? <HeaderLogged user={user} setUser={setUser} currentPage={currentPage} cart={cart} setAlert={setAlert} filter={filter} setFilter={setFilter} filteredData={filteredData} /> : <Header filteredData={filteredData} setUser={setUser} currentPage={currentPage} setAlert={setAlert} filter={filter} setFilter={setFilter} />}
      </Box>
    </Container>
  );
};

export default Index;
