import React from "react";
import {
  IconButton,
  Box,
  Divider,
  Typography,
  Container,
  Menu,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import SortIcon from "@mui/icons-material/Sort";

export const Top = ({
  handleSetLimit,
  displayedProducts,
  products,
  selected,
  handleMode,
  visual,
  openFilter,
  handleClickFilter,
  handleCloseFilter,
  anchorElFilter,
  handleRadioChangeFilter,
  valueFilter,
  openSort,
  handleClickSort,
  handleCloseSort,
  anchorElSort,
  handleRadioChangeSort,
  valueSort,
}) => {
  const styleOn = {
    border: "1px black solid",
    width: "1.5em",
    height: "1.5em",
    color: "black",
    transition: "0.5s",
  };
  const styleOff = {
    border: "1px grey solid",
    width: "1.5em",
    height: "1.5em",
    color: "grey",
    transition: "0.5s",
  };
  return (
    <>
      <Container
        sx={{
          backgroundColor: "#FFF5DA",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: {xl: "10%"},
        }}
        maxWidth={false}
        disableGutters
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: "1em",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }} gap={0.5}>
            <IconButton
              children={<Typography variant="button" children="3" />}
              size="small"
              onClick={() => handleSetLimit(12, 4)}
              sx={selected === 4 ? styleOn : styleOff}
            />
            <IconButton
              children={<Typography variant="button" children="4" />}
              size="small"
              onClick={() => handleSetLimit(8, 6)}
              sx={selected === 6 ? styleOn : styleOff}
            />
            <IconButton
              children={<Typography variant="button" children="5" />}
              size="small"
              onClick={() => handleSetLimit(10, 8)}
              sx={selected === 8 ? styleOn : styleOff}
            />
          </Box>
          <Typography
            children={`Showing 1-${displayedProducts.length} of ${products.length} products`}
            variant="subtitle2"
          />
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: {xs: '100%', xl: 'auto'}
          }}
        >
          {visual === "window" ? (
            <IconButton
              children={<WindowOutlinedIcon />}
              onClick={() => handleMode("list")}
            />
          ) : (
            <IconButton
              children={<ViewListOutlinedIcon />}
              onClick={() => handleMode("window")}
            />
          )}
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: {xs: '100%', xl: 'auto'}
          }}
        >
          <IconButton
            children={<TuneOutlinedIcon />}
            onClick={handleClickFilter}
          />
          <Typography
            variant="overline"
            children="Filters"
            fontSize={"small"}
          />
          <Menu
            open={openFilter}
            onClose={handleCloseFilter}
            anchorEl={anchorElFilter}
          >
            <FormControl>
              <FormLabel>Categories</FormLabel>
              <RadioGroup
                value={valueFilter}
                onChange={handleRadioChangeFilter}
                defaultValue={"All"}
              >
                <MenuItem>
                  <FormControlLabel
                    value={"All"}
                    control={<Radio />}
                    label="All"
                  />
                </MenuItem>
                <MenuItem>
                  <FormControlLabel
                    value={"men's clothing"}
                    control={<Radio />}
                    label="Men's clothing"
                  />
                </MenuItem>
                <MenuItem>
                  <FormControlLabel
                    value={"jewelery"}
                    control={<Radio />}
                    label="Jewelery"
                  />
                </MenuItem>
                <MenuItem>
                  <FormControlLabel
                    value={"electronics"}
                    control={<Radio />}
                    label="Electronics"
                  />
                </MenuItem>
                <MenuItem>
                  <FormControlLabel
                    value={"women's clothing"}
                    control={<Radio />}
                    label="Women's clothing"
                  />
                </MenuItem>
              </RadioGroup>
            </FormControl>
          </Menu>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: {xs: '100%', xl: 'auto'}
          }}
        >
          <IconButton children={<SortIcon />} onClick={handleClickSort} />
          <Menu open={openSort} onClose={handleCloseSort} anchorEl={anchorElSort}>
            <FormControl>
              <FormLabel>Sort by</FormLabel>
              <RadioGroup
                value={valueSort}
                onChange={handleRadioChangeSort}
                defaultValue={"Nothing"}
              >
                <MenuItem>
                  <FormControlLabel
                    value={"Nothing"}
                    control={<Radio />}
                    label="Nothing"
                  />
                </MenuItem>
                <MenuItem>
                  <FormControlLabel
                    value={"most rated"}
                    control={<Radio />}
                    label="Most rated"
                  />
                </MenuItem>
                <MenuItem>
                  <FormControlLabel
                    value={"lowest rated"}
                    control={<Radio />}
                    label="Lowest rated"
                  />
                </MenuItem>
                <MenuItem>
                  <FormControlLabel
                    value={"expensive"}
                    control={<Radio />}
                    label="Expensive"
                  />
                </MenuItem>
                <MenuItem>
                  <FormControlLabel
                    value={"cheapest"}
                    control={<Radio />}
                    label="Cheapest"
                  />
                </MenuItem>
              </RadioGroup>
            </FormControl>
          </Menu>
        </Box>
        <Divider orientation="vertical" flexItem />
      </Container>
      <Divider flexItem />
    </>
  );
};
