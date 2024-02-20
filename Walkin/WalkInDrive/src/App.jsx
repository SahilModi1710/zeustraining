import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import WalkInDrives from "./WalkIn Module/WalkInDrives";
import { RouterProvider } from "react-router-dom";
import router from "./WalkIn Module/Router";

const App = () => (
  <div className="walkin-container">
    <RouterProvider router={router} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
