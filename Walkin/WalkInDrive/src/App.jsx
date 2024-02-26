import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import WalkinDrive from "./WalkInModule/WalkinDrive";

const App = () => (
  <div className="walkin-container">
    <Router>
      <Routes>
        <Route path="/walkindrives/*" element={<WalkinDrive />} />
      </Routes>
    </Router>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
