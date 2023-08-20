import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./contextProvider/AuthProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <App></App>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
