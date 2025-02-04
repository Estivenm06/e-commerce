import React from "react";
import logo from "./LOGO.webp";
import { MenuSmall } from "./utilsComponents/MenuSmallScreen.jsx";
import { MenuLarge } from "./utilsComponents/MenuLargeScreen.jsx";
import { Box } from "@mui/material";

export const Header = ({
  setUser,
  currentPage,
  setAlert,
  filter,
  setFilter,
  filteredData,
}) => {
  return (
    <> 
    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      {/*IMAGE LOGO */}
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
      <MenuSmall
        setAlert={setAlert}
        filter={filter}
        setFilter={setFilter}
        setUser={setUser}
        filteredData={filteredData}
      />
    </Box>
    </>
  );
};
