import React from "react";
import ReactDOM from "react-dom";
import App from "./paltrows-power-toes/App";
import "./index.css";
import DemonymApp from "./demonymapp/demonymApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
