import React from "react";
import { Box, TextField, IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ListFilter } from "./ListFilter";

export const Search = ({ filter, setFilter, filteredData }) => {
  const [visibilityValue, setVisibility] = React.useState(false)

  const handleVisibility = () => setVisibility(prevValue => !prevValue)

  return (
    <Box sx={{height: '2.5em', display: 'flex', alignItems: 'center', justifyContent: 'center', width: {xs: '2em', xl: '15em'}}}>
      {visibilityValue ? (
        <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "flex",
            xl: "flex",
          },
          position: 'relative',
          flexDirection: "column",
        }}
        >
          <TextField
            size="small"
            color="none"
            label={<SearchIcon />}
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            sx={{
              width: "100%",
              right: "0.5em",
              cursor: "pointer",
              transition: "0.5s",
            }}
          />
          {filter && <Paper elevation={3} sx={{position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 1, bgcolor: 'background.paper'}}>{filteredData.map((item, id) => <ListFilter item={item} key={id}/>)}</Paper>}
          </Box>
      ) : (
        <IconButton
          onMouseEnter={() => handleVisibility()}
          sx={{
            width: "100%",
            height: "100%",
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",
            },
            justifyContent: "end",
            alignItems: "center",
            margin: "auto",
            cursor: "pointer",
            transition: "0.5s",
            color: "black",
          }}
          children={<SearchIcon />}
        />
      )}
    </Box>
  );
};
