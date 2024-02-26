import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "LoginMFE/Login";
import Registration from "RegisterMFE/Registration";
import WalkinDrive from "WalkInDriveMFE/WalkinDrive";
import Header from "NavigationMFE/Header";

const App = () => (
  <div className="container">
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register/*" element={<Registration />} />
        <Route path="/walkindrives/*" element={<WalkinDrive />} />
      </Routes>
    </Router>
  </div>
);

const root = createRoot(document.getElementById("app"));
root.render(<App />);
