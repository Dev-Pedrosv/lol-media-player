import React from "react";
import ReactDOM from "react-dom/client";
import { CreateGlobalStyle } from "./styles";
import { RoutesNavigation } from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CreateGlobalStyle />
    <RoutesNavigation />
  </React.StrictMode>
);
