import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import PersonalInformation from "../RegistrationModule/PersonalInformation/PersonalInformation";
import Qualifications from "../RegistrationModule/Qualifications/Qualifications";
import Review from "../RegistrationModule/Review/Review";

const Registration = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<PersonalInformation />} />
          <Route path="/qualification" element={<Qualifications />} />
          <Route path="/review" element={<Review />} />
        </Route>
      </Routes>
    </>
  );
};

export default Registration;
