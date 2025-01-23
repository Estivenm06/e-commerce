import React, { useState } from "react";
import { Rating, Box, Typography, Button } from "@mui/material";
import { createOneCart } from "../../services/cart.js";

const truncateTitle = (title) => {
  const keywords = title.split(/\s+/).slice(0, 3).join(" ");
  return keywords;
};

export const WindowMode = ({ item, user, setCart, handleAddToCart }) => {
  
  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      padding: "0.5em",
      justifyContent: "flex-start",
    }}
    >
      <Box
        sx={{
          display: "inline-flex",
          border: "0.5em solid #7E88A8",
          borderRadius: "0.3em",
          justifyContent: "center",
          alignItems: "center",
          padding: "1em",
        }}
      >
        <img
          srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
          src={`${item.image}?w=248fit=crop&auto=format`}
          alt={item.image}
          loading="lazy"
          style={{ width: "200px", height: "250px", objectFit: "contain" }}
          />
      </Box>
      <Typography
        variant="overline"
        fontSize={"small"}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          overflow: "hidden",
        }}
        children={truncateTitle(item.title)}
        />
      <Typography
        variant="subtitle"
        fontSize={"80%"}
        sx={{ color: "grey" }}
        children={`$${item.price}`}
        />
      <Rating defaultValue={item.rating.rate} readOnly />
      {user?.username ? (
        <Button
        children="Add cart"
        variant="contained"
        onClick={() => handleAddToCart(item)}
        />
      ) : (
        <Button
        children="Add cart"
        variant="contained"
        onClick={() => alert("You must log-in to do this.")}
        />
      )}
    </Box>
  );
};

export const ListMode = ({ item, user, setCart, handleAddToCart }) => {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        padding: "2em",
        justifyContent: { xs: "center" },
        alignItems: { xs: "center" },
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          border: "0.5em solid #7E88A8",
          borderRadius: "0.3em",
          justifyContent: "center",
          alignItems: "center",
          padding: "1em",
          marginRight: "1em",
        }}
      >
        <img
          srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
          src={`${item.image}?w=248fit=crop&auto=format`}
          alt={item.image}
          loading="lazy"
          style={{ width: "200px", height: "250px", objectFit: "contain" }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }} gap={"0.5em"}>
        <Typography
          variant="overline"
          fontSize={"small"}
          children={truncateTitle(item.title)}
        />
        <Typography
          variant="subtitle"
          fontSize={"80%"}
          sx={{ color: "grey" }}
          children={`$${item.price}`}
        />
        <Rating defaultValue={item.rating.rate} readOnly />{" "}
        {user?.username ? (
          <Button
            children="Add cart"
            variant="contained"
            onClick={() => handleAddToCart(item)}
          />
        ) : (
          <Button
            children="Add cart"
            variant="contained"
            onClick={() => alert("You must log-in to do this.")}
          />
        )}
      </Box>
    </Box>
  );
};
