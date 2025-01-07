import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// xs: PhoneScreen, md: TabletScreen, lg: LaptopScreen, xl: DesktopScreen

const MenuBelow = ({ open, handleClick, handleClose, anchorEl }) => {
  return (
    <Box
      sx={{
        display: {
          xs: "flex",
          sm: "flex",
          md: "flex",
          lg: "none",
          xl: "none",
        },
        paddingLeft: "0.5em",
      }}
    >
      <IconButton onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
        <MenuItem
          children={<Typography className="textHeader" children="HOME" />}
        />
        <MenuItem
          children={<Typography className="textHeader" children="SHOP" />}
        />
        <MenuItem
          children={
            <Typography className="textHeader" children="COLLECTIONS" />
          }
        />
        <MenuItem
          children={<Typography className="textHeader" children="PAGES" />}
        />
        <MenuItem
          children={<Typography className="textHeader" children="CONTACT" />}
        />
        <MenuItem
          children={
            <Button
              size="small"
              disableElevation
              sx={{
                padding: "0.5em",
                paddingInline: "1.5em",
                border: "2px solid red",
                borderRadius: "2em",
                color: "primary",
                transition: "0.5s",
              }}
              children={<Typography variant="button" children="LOG IN" />}
            />
          }
        />
        <MenuItem
          children={
            <IconButton
              children={<Typography color="black" children="SIGN UP" />}
            />
          }
        />
        <MenuItem
          children={
            <IconButton children={<FavoriteIcon sx={{ color: "orange" }} />} />
          }
        />
        <MenuItem
          children={
            <IconButton
              children={<ShoppingCartIcon sx={{ color: "orange" }} />}
            />
          }
        />
      </Menu>
    </Box>
  );
};

const MenuAbove = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "none", md: "none", lg: "flex", xl: "flex" },
        gap: "1.5em",
        paddingLeft: "2em",
      }}
    >
      <Typography className="textHeader" children="HOME" />
      <Typography className="textHeader" children="SHOP" />
      <Typography className="textHeader" children="COLLECTIONS" />
      <Typography className="textHeader" children="PAGES" />
      <Typography className="textHeader" children="CONTACT" />
    </Box>
  );
};

export const Left = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={"../../resources/LOGO.webp"}
          alt="LOGO"
          style={{
            padding: "0.5em",
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            border: "1px solid orange",
          }}
        />
        <MenuBelow
          open={open}
          handleClick={handleClick}
          handleClose={handleClose}
          anchorEl={anchorEl}
        />
        <MenuAbove />
      </Box>
    </>
  );
};
