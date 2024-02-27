import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useRegisterStore } from "../../../ReactStore/Store";

const PersonalInformation = ({ review }) => {
  const navigateTo = useNavigate();

  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    resumeFile,
    setResumeFile,
    portfolioUrl,
    setPortfolioUrl,
    referral,
    setReferral,
    jobMail,
    setJobMail,
    profilePicFile,
    setProfilePicFile,
    countryCode,
    setCountryCode,
    jobRoles,
    setJobRoles,
  } = useRegisterStore();

  const handleJobRoleChange = (role) => {
    if (jobRoles.includes(role)) {
      setJobRoles(jobRoles.filter((selectedRole) => selectedRole !== role));
    } else {
      setJobRoles([...jobRoles, role]);
    }
  };

  const handleNext = () => {
    navigateTo("/register/qualification");
  };

  return (
    <>
      <div className={styles["personal-info"]}>
        <div className={styles["left-input"]}>
          <div className={styles["input-group"]}>
            <div className={styles["firsLabel"]}>
              <label htmlFor="firstname" className={styles["input-label"]}>
                First Name*
              </label>
            </div>
            <input
              type="text"
              placeholder="John"
              name="firstname"
              id="firstname"
              value={firstName}
              disabled={review}
              className={styles["input-element"]}
              style={review ? { border: "none" } : {}}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>

          <div className={styles["input-group"]}>
            <label htmlFor="lastname" className={styles["input-label"]}>
              Last Name*
            </label>
            <input
              type="text"
              placeholder="Watson"
              name="lastname"
              id="lastname"
              value={lastName}
              disabled={review}
              className={styles["input-element"]}
              style={review ? { border: "none" } : {}}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>

          <div className={styles["input-group"]}>
            <label htmlFor="email" className={styles["input-label"]}>
              Email*
            </label>
            <input
              type="email"
              placeholder="Johnwatson@example.com"
              name="email"
              id="email"
              disabled={review}
              className={styles["input-element"]}
              style={review ? { border: "none" } : {}}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles["input-group"]}>
            <label htmlFor="phone" className={styles["input-label"]}>
              Phone Number*
            </label>
            <div>
              <span className={styles["symbolPlus"]}>+</span>
              <input
                type="text"
                placeholder="91"
                name="countrycode"
                id="countrycode"
                disabled={review}
                className={`${styles["input-element"]} ${styles["country-code"]}`}
                style={review ? { border: "none" } : {}}
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
              />

              <input
                type="text"
                placeholder="9876543210"
                name="phone"
                id="phone"
                disabled={review}
                className={styles["input-element"]}
                style={review ? { border: "none" } : {}}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>

          <div className={styles["upload-resume"]}>
            <label htmlFor="resume" className={styles["upload-label"]}>
              <img src="../../../assets/upload-green.svg" alt="" />
              <span className={styles["resume-text"]}>Upload Resume</span>
            </label>
            <input
              type="file"
              name="resume"
              id="resume"
              className={styles["input-file"]}
              onChange={(e) => {
                const file = e.target.files[0];
                setResumeFile(file);
              }}
            />
            {resumeFile && (
              <div className={styles["file-name"]}>{resumeFile.name}</div>
            )}
          </div>

          <div className={styles["input-group"]}>
            <label htmlFor="portfolio" className={styles["input-label"]}>
              Enter Portfolio URL (if any)
            </label>
            <input
              type="text"
              placeholder="www.myportfolio.in"
              name="portfolio"
              id="portfolio"
              disabled={review}
              className={styles["input-element"]}
              style={review ? { border: "none" } : {}}
              value={portfolioUrl}
              onChange={(e) => setPortfolioUrl(e.target.value)}
            />
          </div>

          <div className={styles["input-group"]}>
            <label htmlFor="jobRoles" className={styles["input-label"]}>
              Preferred Job Roles*
            </label>
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="role1"
                id="role1"
                checked={jobRoles.includes("Instructional Designer")}
                disabled={review}
                className={`${styles["input-element"]} ${styles["checkbox-group"]}`}
                style={review ? { border: "none" } : {}}
                onChange={() => handleJobRoleChange("Instructional Designer")}
              />
              <label
                htmlFor="role1"
                className={`${styles["input-label"]} ${styles["checkbox-label"]}`}
              >
                Instructional Designer
              </label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="role2"
                id="role2"
                checked={jobRoles.includes("Software Engineer")}
                disabled={review}
                className={`${styles["input-element"]} ${styles["checkbox-group"]}`}
                style={review ? { border: "none" } : {}}
                onChange={() => handleJobRoleChange("Software Engineer")}
              />
              <label
                htmlFor="role2"
                className={`${styles["input-label"]} ${styles["checkbox-label"]}`}
              >
                Software Engineer
              </label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="role3"
                id="role3"
                checked={jobRoles.includes("Software Quality Engineer")}
                disabled={review}
                className={`${styles["input-element"]} ${styles["checkbox-group"]}`}
                style={review ? { border: "none" } : {}}
                onChange={() =>
                  handleJobRoleChange("Software Quality Engineer")
                }
              />
              <label
                htmlFor="role3"
                className={`${styles["input-label"]} ${styles["checkbox-label"]}`}
              >
                Software Quality Engineer
              </label>
            </div>
          </div>

          <div className={styles["input-group"]}>
            <label htmlFor="referral" className={styles["input-label"]}>
              If You Are Registering Via A Referral, Please Mention Full Name Of
              The Employee Who Referred You
            </label>
            <input
              type="text"
              placeholder=""
              name="referral"
              id="referral"
              disabled={review}
              className={styles["input-element"]}
              style={review ? { border: "none" } : {}}
              value={referral}
              onChange={(e) => setReferral(e.target.value)}
            />
          </div>

          <div className="checkbox-container">
            <input
              type="checkbox"
              name="job-mail"
              id="job-mail"
              checked={jobMail}
              disabled={review}
              className={`${styles["input-element"]} ${styles["checkbox-group"]}`}
              style={review ? { border: "none" } : {}}
              onChange={() => setJobMail(!jobMail)}
            />
            <label
              htmlFor="job-mail"
              className={`${styles["input-label"]} ${styles["checkbox-label"]}`}
            >
              Send me job related updates via mail
            </label>
          </div>
        </div>

        <div className={styles["right-input"]}>
          <div className={styles["upload-profile"]}>
            <label htmlFor="profile-pic" className={styles["profile-label"]}>
              <img
                src="../../../assets/users.png"
                alt="profile pic"
                className={styles["profile-img"]}
              />
              <span className={styles["profile-text"]}>
                UPLOAD DISPLAY PICTURE
              </span>
            </label>
            <input
              type="file"
              name="profile-pic"
              id="profile-pic"
              disabled={review}
              className={styles["input-file"]}
              onChange={(e) => {
                const file = e.target.files[0];

                setProfilePicFile(file);
              }}
            />
            {profilePicFile && (
              <div className={styles["file-name"]}>{profilePicFile.name}</div>
            )}
            <span className={styles["img-size"]}>Max. image size: 5 MB</span>
          </div>
        </div>
      </div>

      {!review && <Button btnName={"NEXT"} onClick={handleNext} />}
    </>
  );
};

export default PersonalInformation;
