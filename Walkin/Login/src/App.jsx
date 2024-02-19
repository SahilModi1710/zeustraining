import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Login from "./Module/Login";

const App = () => (
  <div className="container">
    <Login />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
