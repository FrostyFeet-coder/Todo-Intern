import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");
const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (root.hasChildNodes()) {
  ReactDOM.hydrate(rootElement, root);
} else {
  ReactDOM.createRoot(root).render(rootElement);
}
