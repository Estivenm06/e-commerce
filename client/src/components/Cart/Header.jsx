import {
  Box,
  Divider,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const Header = ({
  cart,
  open,
  handleClick,
  handleClose,
  anchorEl,
  option,
  handleOption,
}) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/shop");
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          color: "white",
          paddingBottom: "0.5em",
        }}
      >
        <IconButton
          children={<ArrowBackIcon sx={{ color: "white" }} />}
          onClick={() => handleBack()}
        />
        <Typography children="Continue shopping" variant="h6" />
      </Box>
      <Divider flexItem sx={{ backgroundColor: "white" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "1em",
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Typography variant="subtitle1" children="Shopping cart" />
          <Typography
            variant="subtitle2"
            children={`You have ${cart.length} in your cart`}
          />
        </Box>
        <Box sx={{ justifyContent: "flex-end" }}>
          <Typography variant="subtitle2">
            Sort by:
            <Button
              disableElevation
              children={`price`}
              endIcon={<KeyboardArrowDownIcon />}
              size="small"
              color="white"
              onClick={handleClick}
            />
            <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
              <FormControl>
                <FormLabel>option</FormLabel>
                <RadioGroup
                  defaultValue={"price"}
                  value={option}
                  onChange={handleOption}
                >
                  <MenuItem>
                    <FormControlLabel
                      value="price"
                      control={<Radio />}
                      label="Price"
                    />
                  </MenuItem>
                  <MenuItem>
                    <FormControlLabel
                      value="quantity"
                      control={<Radio />}
                      label="Quantity"
                    />
                  </MenuItem>
                  <MenuItem>
                    <FormControlLabel
                      value="rate"
                      control={<Radio />}
                      label="Rate"
                    />
                  </MenuItem>
                </RadioGroup>
              </FormControl>
            </Menu>
          </Typography>
        </Box>
      </Box>
    </>
  );
};
