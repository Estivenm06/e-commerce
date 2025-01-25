import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Left = ({ setAlert, user }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    setAlert({ message: "You must log-in first.", type: "error" });
    setTimeout(() => setAlert(null), 2000);
  };
  const handleClickLogged = () => {
    setAlert({ message: "Enjoy your shopping." });
    setTimeout(() => setAlert(null), 2000);
    navigate("/shop");
  };
  return (
    <>
      <Typography variant="body1" color="#F53B2F">
        We are Ɲova
      </Typography>
      <Typography
        variant="h3"
        sx={{ textAlign: { sx: "justify", md: "justify" } }}
      >
        Style Your Own Way with Ɲova
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginTop: "1.5em", textAlign: "justify" }}
      >
        Step into the world of Ɲova, where you can style your own way. We offer
        a carefully selected collection of [mention product categories, e.g.,
        clothing, accessories, technology and some others.] to help you create a style that is all
        your own.
      </Typography>
      <Box>
        <Button
          onClick={() => (user ? handleClickLogged() : handleClick())}
          sx={{
            display: "flex",
            padding: "1em",
            paddingInline: "3.5em",
            borderRadius: "2em",
            backgroundColor: "#F2CC05",
            color: "white",
            marginTop: "2em",
          }}
          children={<Typography variant="button">shop now</Typography>}
        />
      </Box>
    </>
  );
};
