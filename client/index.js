import("file-loader?name=[name].[ext]!../index.html");
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./src/App.jsx";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <StrictMode>
     <BrowserRouter>
        <App/>
     </BrowserRouter>
  </StrictMode>
);
