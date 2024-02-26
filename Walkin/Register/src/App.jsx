import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "../src/Modules/RegistrationModule/Registration";
import { createRoot } from "react-dom/client";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register/*" element={<Registration />} />
      </Routes>
    </Router>
  );
};

const rootElement = document.getElementById("app");
createRoot(rootElement).render(<App />);
