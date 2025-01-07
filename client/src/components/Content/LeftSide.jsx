import React from "react";
import { Typography, Button } from "@mui/material";

export const Left = () => {
  return (
    <>
          <Typography variant="body1" color="#F53B2F">We are Ɲova</Typography>
          <Typography variant="h3" sx={{textAlign: {sx: 'justify', md: 'justify'}}}>Style Your Own Way with Ɲova</Typography>
        <Typography variant="body1" sx={{marginTop: '1.5em', textAlign: 'justify'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti
          consequatur sed quam dolor fugiat, necessitatibus maxime porro
          distinctio harum obcaecati laboriosam deserunt. Commodi nulla vero,
          laboriosam libero modi facilis?
        </Typography>
          <Button
            sx={{
              backgroundColor: "white",
              display: "flex",
              padding: "1em",
              paddingInline: "3.5em",
              borderRadius: "2em",
              backgroundColor: "#F2CC05",
              color: "white",
              marginTop: "2em",
            }}
          >
            <Typography variant="button">shop now</Typography>
          </Button>
    </>
  );
};
