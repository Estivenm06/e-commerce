import React from "react";
import { Container, Typography, Divider, Box } from "@mui/material";

const MenuTop = () => {
  return (
    <Container sx={{p: 0.1, display: 'flex', justifyContent: 'space-evenly'}} maxWidth='lg' disableGutters>
      <Box sx={{p: 1, display: 'flex', justifyContent: 'center', gap: '1em'}}>
      <Typography fontSize={'0.9em'}>+ 123 456 78900</Typography>
      <Divider orientation="vertical" sx={{height: '1em', margin: 'auto'}}/>
      <Typography fontSize={'0.9em'}>hello@gmail.com</Typography>
      <Divider orientation="vertical" sx={{height: '1em', margin: 'auto'}}/>
      <Typography fontSize={'0.9em'}>Location our shop</Typography>

      </Box>
      <Box sx={{p: 1, display: 'flex', justifyContent:'center', gap: '1em'}}>
      <Typography fontSize={'0.9em'}>menu country</Typography>
      <Divider orientation="vertical" sx={{height: '1em', margin: 'auto'}}/>
      <Typography fontSize={'0.9em'}>menu langugue</Typography>
      <Divider orientation="vertical" sx={{height: '1em', margin: 'auto'}}/>
      <Typography fontSize={'0.9em'}>icon</Typography>
      <Typography fontSize={'0.9em'}>icon</Typography>
      <Typography fontSize={'0.9em'}>icon</Typography>
      <Typography fontSize={'0.9em'}>icon</Typography>
      </Box>
    </Container>
  );
};

export default MenuTop;
