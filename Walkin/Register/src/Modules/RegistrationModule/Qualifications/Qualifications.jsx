import React, { useState } from "react";
import "./style.css";
import EducationalQualification from "./EducationalQualification";
import ProfessionalQualification from "./ProfessionalQualification";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Qualifications = ({ review }) => {
  const navigateTo = useNavigate();

  const handleNext = (e) => {
    navigateTo("/review");
  };
  const handlePrevious = (e) => {
    navigateTo("/");
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
