import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "NavigationMFE/Header";
import router from "./Router";
import { RouterProvider } from "react-router-dom";

const App = () => (
  <div className="container">
    <Header />
    <RouterProvider router={router} />
  </div>
);

const root = createRoot(document.getElementById("app"));
root.render(<App />);
