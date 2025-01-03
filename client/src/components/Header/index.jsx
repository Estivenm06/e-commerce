import React from "react";
import { Container, Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <Container
        sx={{ p: 4, display: "flex", justifyContent: "space-around" }}
        maxWidth="lg"
        disableGutters
      >
        LOGO
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{display: 'flex', justifyContent: 'space-evenly', gap: '2em'}}>
            <Typography sx={{color: 'orange'}}>HOME</Typography>
            <Typography>SHOP</Typography>
            <Typography>COLLECTIONS</Typography>
            <Typography>PAGES</Typography>
            <Typography>CONTACT</Typography>
          </Box>
          <Box sx={{ display: 'flex', paddingLeft: "2.5em", gap: '1em'}}>
            <Typography>S</Typography>
            <Typography>LOG IN</Typography>
            <Typography>SIGN UP</Typography>
            <Typography>H</Typography>
            <Typography>C</Typography>
            </Box>
        </Box>
      </Container>
    </>
  );
};

export default Header;
