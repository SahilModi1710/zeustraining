import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./Module/Login";

const App = () => (
  <div className="container">
    <Login />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(<App />);
