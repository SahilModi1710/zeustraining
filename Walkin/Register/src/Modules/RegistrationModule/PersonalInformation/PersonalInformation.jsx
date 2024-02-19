import React from "react";
import styles from "./style.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const PersonalInformation = ({ review }) => {
  const navigateTo = useNavigate();

  const handleNext = (e) => {
    navigateTo("/qualification");
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
              disabled={review}
              className={styles["input-element"]}
              style={review ? { border: "none" } : {}}
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
              disabled={review}
              className={styles["input-element"]}
              style={review ? { border: "none" } : {}}
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
              />
              <input
                type="text"
                placeholder="9876543210"
                name="phone"
                id="phone"
                disabled={review}
                className={styles["input-element"]}
                style={review ? { border: "none" } : {}}
              />
            </div>
          </div>

          <div className={styles["upload-resume"]}>
            <img src="../../../assets/upload-green.svg" alt="" />
            <input
              type="file"
              name="resume"
              id="resume"
              className={styles["input-file"]}
            />
            <span className={styles["resume-text"]}>Upload Resume</span>
          </div>

          <div className={styles["input-group"]}>
            <label htmlFor="portfolio" className={styles["input-label"]}>
              Enter Portfolio URL (if any)
            </label>
            <input
              type="portfolio"
              placeholder="www.myportfolio.in"
              name="portfolio"
              id="portfolio"
              disabled={review}
              className={styles["input-element"]}
              style={review ? { border: "none" } : {}}
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
                defaultChecked
                disabled={review}
                className={`${styles["input-element"]} ${styles["checkbox-group"]}`}
                style={review ? { border: "none" } : {}}
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
                disabled={review}
                className={`${styles["input-element"]} ${styles["checkbox-group"]}`}
                style={review ? { border: "none" } : {}}
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
                defaultChecked
                disabled={review}
                className={`${styles["input-element"]} ${styles["checkbox-group"]}`}
                style={review ? { border: "none" } : {}}
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
              type="referral"
              placeholder=""
              name="referral"
              id="referral"
              disabled={review}
              className={styles["input-element"]}
              style={review ? { border: "none" } : {}}
            />
          </div>

          <div className="checkbox-container">
            <input
              type="checkbox"
              name="job-mail"
              id="job-mail"
              defaultChecked
              disabled={review}
              className={`${styles["input-element"]} ${styles["checkbox-group"]}`}
              style={review ? { border: "none" } : {}}
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
            <img
              src="../../../assets/users.png"
              alt="profile pic"
              className={styles["profile-img"]}
            />

            <span className={styles["profile-text"]}>
              UPLOAD DISPLAY PICTURE
            </span>
            <span className={styles["img-size"]}>Max. image size: 5 MB</span>
          </div>
        </div>
      </div>

      {/* <div className={styles["next-section"]}>
        <button className={styles["btn"]}>NEXT</button>
      </div> */}

      {!review && <Button btnName={"NEXT"} onClick={handleNext} />}
    </>
  );
};

export default PersonalInformation;
