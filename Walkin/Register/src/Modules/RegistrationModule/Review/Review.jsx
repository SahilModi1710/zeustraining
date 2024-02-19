import React, { useState } from "react";
import PersonalInformation from "../PersonalInformation/PersonalInformation";
import Qualifications from "../Qualifications/Qualifications";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const navigatTo = useNavigate();

  const [isReview, setIsReview] = useState(true);
  console.log(isReview);
  const handleEdit = () => {
    setIsReview(false);
  };

  const handlePrevious = () => {
    navigatTo("/qualification");
  };

  return (
    <>
      <button onClick={handleEdit}>edit </button>
      <PersonalInformation review={isReview} />
      <Qualifications review={isReview} />
      <Button btnName={"PREVIOUS"} onClick={handlePrevious} />
    </>
  );
};

export default Review;
