import React, { useState } from "react";
import Menu from "../components/Menu/index.jsx";
import Header from "../components/Header/index.jsx";
import { Divider, Container, CssBaseline, Box } from "@mui/material";
import { Alert } from "../components/Error/Alert.jsx";
import ContactComponent from '../components/Contact/index.jsx'

export const Contact = ({ user, setUser, cart, setAlert, alert, filter, filteredData, setFilter }) => {
  const [currentPage, setCurrentPage] = useState("contact");
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ display: "block", overflow: "hidden" }}
    >
      <CssBaseline />
      <Menu />
      <Divider />
      <Header
        user={user}
        setUser={setUser}
        currentPage={currentPage}
        cart={cart}
        filter={filter}
        setFilter={setFilter}
        filteredData={filteredData}
        setAlert={setAlert}
      />
      <Divider />
      <ContactComponent setAlert={setAlert}/>
      <Divider />
      {alert ? (
        <Box
          sx={{
            position: 'fixed',
            bottom: '1em',
            left: '1em',
            zIndex: 1000,
            display: "inline-flex",
            padding: "1em",
            borderRadius: "0.5em",
          }}
        >
          <Alert alert={alert} />
        </Box>
      ) : null}
    </Container>
  );
};
