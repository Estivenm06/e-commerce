import React from "react";
import { Contact } from "./Contact";
import { Container } from "@mui/material";

const ContactComponent = ({setAlert}) => {
  return (
    <Container maxWidth='xl' disableGutters sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Contact setAlert={setAlert}/>
    </Container>
  );
};

export default ContactComponent;
