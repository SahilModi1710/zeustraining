import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./Module/Login";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <div className="container">
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(<App />);
