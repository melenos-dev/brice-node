import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./css/normalize.css";
import "./css/styles.scss";
import "./css/csshake.min.css";
import "./css/css-tooltips.css";
import { dom, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import { AuthProvider } from "./utils/context/AuthProvider";
import { BrowserRouter } from "react-router-dom";

library.add(fas);
dom.watch();
const el = document.getElementById("app");
const root = ReactDOM.createRoot(el);
document.documentElement.lang = "fr";

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
