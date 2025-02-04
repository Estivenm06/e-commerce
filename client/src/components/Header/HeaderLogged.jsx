import React from "react";
import logo from "./LOGO.webp";
import { MenuSmallLogged } from "./utilsComponents/menuSmallLogged.jsx";
import { MenuLarge } from "./utilsComponents/menuLargeScreen.jsx";
import { Box } from "@mui/material";

export const HeaderLogged = ({
  user,
  setUser,
  currentPage,
  cart,
  filter,
  setFilter,
  filteredData,
}) => {
  return (
    <>
    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      {/*IMAGE LOGO*/}
      <img
        src={logo}
        alt="LOGO"
        style={{
          padding: "0.5em",
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          border: "1px solid orange",
        }}
      />
      {/* */}
      <MenuLarge currentPage={currentPage} />
    </Box>
    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      {/* */}
      <MenuSmallLogged
        filter={filter}
        currentPage={currentPage}
        user={user}
        setUser={setUser}
        cart={cart}
        filteredData={filteredData}
        setFilter={setFilter}
      />
    </Box>
    </>
  );
};
