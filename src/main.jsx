import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { ContextProvider } from "./Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </ContextProvider>
);
