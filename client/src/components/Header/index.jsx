import React from "react";
import { Container, Box, Typography, Button, TextField, Autocomplete } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Search = () => {

}

const Header = () => {
  return (
    <>
      <Container
        sx={{ p: 3, display: "flex", justifyContent: "space-around", alignItems: 'center' }}
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
            <div>
              <TextField id='searchInput' label={<SearchIcon/>} />
            </div>
            <div>
            <Button size="small" disableElevation sx={{ padding: '0.5em', paddingInline: '1.5em', border: '1px solid red', borderRadius: '2em'}}>
              <Typography>LOG IN</Typography>
            </Button>
            </div>
            <Typography>SIGN UP</Typography>
            <div>
              <FavoriteIcon sx={{color: 'orange'}}/>
            </div>
            <div>
            <ShoppingCartIcon sx={{color: 'orange'}}/>
            </div>
            </Box>
        </Box>
      </Container>
    </>
  );
};

export default Header;
