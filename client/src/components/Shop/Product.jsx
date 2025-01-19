import React from "react";
import { Rating, Box, Typography } from "@mui/material";

const truncateTitle = (title) => {
  const keywords = title.split(/\s+/).slice(0, 3).join(" ");
  return keywords;
};

export const WindowMode = ({ item }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", padding: "0.5em" }}>
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
    </Box>
  );
};

export const ListMode = ({ item }) => {
  return (
      <Box sx={{ display: "flex", flexDirection: "row", padding: '2em'}}>
        <Box
          sx={{
            display: "inline-flex",
            border: "0.5em solid #7E88A8",
            borderRadius: "0.3em",
            justifyContent: "center",
            alignItems: "center",
            padding: "1em",
            marginRight: '1em'
          }}
        >
          <img
            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.image}?w=248fit=crop&auto=format`}
            alt={item.image}
            loading="lazy"
            style={{ width: '200px', height: "250px", objectFit: 'contain'}}
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
        </Box>
      </Box>
  );
};
