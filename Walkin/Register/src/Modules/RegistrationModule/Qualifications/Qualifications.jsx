import React, { useState } from "react";
import "./style.css";
import EducationalQualification from "./EducationalQualification";
import ProfessionalQualification from "./ProfessionalQualification";
import RegistrationHeader from "../../Header/RegistrationHeader";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Qualifications = ({ review }) => {
  const navigateTo = useNavigate();

  const handleNext = () => {
    navigateTo("/register/review");
  };
  const handlePrevious = () => {
    navigateTo("/register");
  };

  return (
    <>
      <div className="container">
        <EducationalQualification review={review} />
        <ProfessionalQualification review={review} />

        {!review && (
          <div className="btn-container">
            <Button btnName={"PREVIOUS"} onClick={handlePrevious} />
            <Button btnName={"NEXT"} onClick={handleNext} />
          </div>
        )}
      </div>
    </>
  );
};

export default Qualifications;
