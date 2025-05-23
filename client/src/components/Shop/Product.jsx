import React from "react";
import {
  Rating,
  Box,
  Typography,
  Button,
  Stack,
  styled,
  Paper,
} from "@mui/material";

const truncateTitle = (title) => {
  const keywords = title.split(/\s+/).slice(0, 3).join(" ");
  return keywords;
};

export const WindowMode = ({ item, user, setAlert, handleAddToCart }) => {
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
          sx={{marginTop: '0.5em'}}
          onClick={() => handleAddToCart(item)}
        />
      ) : (
        <Button
          children="Add cart"
          variant="contained"
          sx={{marginTop: '0.5em'}}
          onClick={() => {
            setAlert({ message: "You must log-in first.", type: "error" });
            setTimeout(() => setAlert(null), 2000);
          }}
        />
      )}
    </Box>
  );
};

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  display: "flex",
  flexDirection: "row",
}));

export const ListMode = ({ item, user, setAlert, handleAddToCart }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack>
        <Item>
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: "2em",
              textAlign: "start",
            }}
          >
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
                sx={{marginTop: '0.5em'}}
                onClick={() => handleAddToCart(item)}
              />
            ) : (
              <Button
                children="Add cart"
                variant="contained"
                sx={{marginTop: '0.5em'}}
                onClick={() => {
                  setAlert({
                    message: "You must log-in first.",
                    type: "error",
                  });
                  setTimeout(() => setAlert(null), 2000);
                }}
              />
            )}
          </Box>
        </Item>
      </Stack>
    </Box>
  );
};
