import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RegistrationHeader from "./Modules/Header/RegistrationHeader";
import PersonalInformation from "./Modules/RegistrationModule/PersonalInformation/PersonalInformation";
import Qualifications from "./Modules/RegistrationModule/Qualifications/Qualifications";
import Review from "./Modules/RegistrationModule/Review/Review";
import { RouterProvider } from "react-router-dom";
import router from "./Modules/Header/Router";

const App = () => (
  <div className="registration">
    <RegistrationHeader />
    <RouterProvider router={router} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
