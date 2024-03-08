import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Products from "./components/functional/products";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Products />
  </React.StrictMode>
);
