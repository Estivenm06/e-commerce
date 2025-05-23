import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./src/App";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./src/styles/index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
