import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import WalkInDrives from "./WalkInModule/WalkInDrives";
import { RouterProvider } from "react-router-dom";
import router from "./WalkInModule/Router";

const App = () => (
  <div className="walkin-container">
    <RouterProvider router={router} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
