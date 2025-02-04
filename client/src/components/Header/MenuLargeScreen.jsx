import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export const MenuLarge = ({ currentPage }) => {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ display: "flex" }}>
        {/*xs PhoneScreen, sm TabletScreen, md TabletScreen, lg DesktopScreen, xl LargeDesktopScreen */}
        {/*MENU FOR LARGE SCREENS */}
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",
            },
            marginLeft: "0.5em",
          }}
        >
          <Button
            size="small"
            variant="none"
            sx={{ padding: "0em" }}
            children={
              <Typography
                className={currentPage === "/" ? "headerActive" : "textHeader"}
                children="HOME"
              />
            }
            onClick={() => {
              navigate("/");
            }}
          />
          <Button
            size="small"
            variant="none"
            sx={{ padding: "0em" }}
            children={
              <Typography
                className={
                  currentPage === "shop" ? "headerActive" : "textHeader"
                }
                children="SHOP"
              />
            }
            onClick={() => {
              navigate("/shop");
            }}
          />
          <Button
            size="small"
            variant="none"
            sx={{ padding: "0em" }}
            children={
              <Typography
                className={
                  currentPage === "contact" ? "headerActive" : "textHeader"
                }
                children="CONTACT"
              />
            }
            onClick={() => {
              navigate("/contact");
            }}
          />
        </Box>
      </Box>
    </>
  );
};
