import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "../src/components/App";
import { ResourceProvider } from "./context/Resource";
import { ThemeProvider } from "./context/Theme";
import "./scss/lib/kendo-theme-custom.scss";
import "./scss/main.scss";

ReactDOM.render(
  <HashRouter>
    <ThemeProvider>
      <ResourceProvider>
        <App />
      </ResourceProvider>
    </ThemeProvider>
  </HashRouter>,
  document.getElementById("root")
);
