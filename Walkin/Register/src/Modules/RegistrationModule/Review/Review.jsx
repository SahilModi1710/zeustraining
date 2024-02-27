import React, { useState } from "react";
import PersonalInformation from "../PersonalInformation/PersonalInformation";
import Qualifications from "../Qualifications/Qualifications";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

import "./style.css";
import { useRegisterStore } from "../../../ReactStore/Store";
import useQualificationStore from "../../../ReactStore/QualificationsStore";
import axios from "axios";

const Review = () => {
  const navigatTo = useNavigate();

  const jobRoleMap = {
    "Instructional Designer": 1,
    "Software Engineer": 2,
    "Software Quality Engineer": 3,
  };

  const techMap = {
    Java: 1,
    Python: 2,
    Javascript: 3,
    React: 4,
    SQL: 5,
  };

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    resumeFile,
    portfolioUrl,
    profilePicFile,
    countryCode,
    jobRoles,
  } = useRegisterStore();

  const {
    percentage,
    year,
    qualification,
    stream,
    college,
    otherCollege,
    location,
    isFresher,
    experienceYear,
    currentCtc,
    expectedCtc,
    noticePeriod,
    noticeEndDate,
    noticeDuration,
    appliedTest,
    appliedRole,
    expertiseTechnology,
    familiarTechnology,
  } = useQualificationStore();

  const jobRolesIds = jobRoles.map((role) => jobRoleMap[role]);

  const experitseTechnologiesIds = expertiseTechnology.map(
    (tech) => techMap[tech]
  );

  const familiarTechnologiesIds = familiarTechnology.map(
    (tech) => techMap[tech]
  );

  const createUserRequest = {
    info: {
      fieldName: "CreateUser",
    },
    arguments: {
      input: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_no: countryCode + phoneNumber + "",
        resume: resumeFile?.name,
        portfolio_url: portfolioUrl,
        profile_pic: profilePicFile?.name,
        jobRoles: jobRolesIds,
        password: "pass123",
        educationalQualifications: {
          aggregate_percentage: percentage,
          passing_year: year,
          degree: qualification,
          stream: stream,
          college: college === "Others" ? otherCollege : college,
          college_city: location,
        },
        professionalQualifications: {
          experienced_qualification: {
            experience_year: isFresher ? "0" : experienceYear,
            current_ctc: isFresher ? "0" : currentCtc,
            expected_ctc: isFresher ? "0" : expectedCtc,
            expertiseTechnologies: isFresher
              ? []
              : [...experitseTechnologiesIds],
            notice_period: noticePeriod,
            notice_period_end: noticeEndDate,
            notice_period_duration: noticeDuration,
          },
          applicant_type: isFresher ? "fresher" : "experience",
          familiarTechnologies: familiarTechnologiesIds,
          applied_test: appliedTest,
          applied_test_role: appliedRole,
        },
      },
    },
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/dev/api/handle_graphql",
        createUserRequest
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error in fetchData:", error.message);
    }
  };

  const [isReview, setIsReview] = useState(true);
  const handleEdit = () => {
    setIsReview(false);
  };

  const handlePrevious = () => {
    navigatTo("/register/qualification");
  };

  return (
    <>
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

      <button onClick={handleRegister}>register</button>
    </>
  );
};

export default Review;
