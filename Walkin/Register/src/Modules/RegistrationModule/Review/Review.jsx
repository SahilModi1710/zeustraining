import React, { useState } from "react";
import PersonalInformation from "../PersonalInformation/PersonalInformation";
import Qualifications from "../Qualifications/Qualifications";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
// import RegistrationHeader from "../../Header/RegistrationHeader";
import "./style.css";

const Review = () => {
  const navigatTo = useNavigate();

  const [isReview, setIsReview] = useState(true);
  console.log(isReview);
  const handleEdit = () => {
    setIsReview(false);
  };

  const handlePrevious = () => {
    navigatTo("/register/qualification");
  };

  return (
    <>
      {/* <RegistrationHeader /> */}
      <div className="personal-information">
        <div className="title">Personal Information</div>
        <div className="edit">
          <button className="btn" onClick={handleEdit}>
            Edit
          </button>
        </div>
      </div>
      <PersonalInformation review={isReview} />
      <div className="personal-information">
        <div className="title">Qualifications</div>
        <div className="edit">
          <button className="btn" onClick={handleEdit}>
            Edit
          </button>
        </div>
      </div>
      <Qualifications review={isReview} />
      <Button btnName={"PREVIOUS"} onClick={handlePrevious} />
    </>
  );
};

export default Review;
