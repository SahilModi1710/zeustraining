import React, { useState } from "react";
import styles from "./style.module.css";

const JobDetails = ({ jobDetails }) => {
  const [showJobDesc, setShowJobDesc] = useState(false);

  const openJob = () => {
    setShowJobDesc(!showJobDesc);
  };

  return (
    <>
      <div
        className={styles["education-section"]}
        style={{ marginBottom: showJobDesc ? "0px" : "16px" }}
      >
        <span className={styles.heading}>{jobDetails.job_title}</span>
        {showJobDesc ? (
          <img
            src="../../../assets/icons/list-up.svg"
            alt="../../../assets/expand-green.svg"
            onClick={openJob}
            className={styles["heading-img"]}
          />
        ) : (
          <img
            className={styles["extra-img"]}
            onClick={openJob}
            src="../../../assets/icons/list-down.svg"
            alt=""
          />
        )}
      </div>

      {showJobDesc && (
        <div className={styles["pre-requisite"]}>
          <span className={styles["card-heading"]}>
            Gross Compensation Package :
          </span>
          <p className={styles.content}>Rs. 5,00,000 lpa</p>
          <div className={styles.linee}></div>
          <span className={styles["card-heading"]}>Role Description :</span>
          <p className={styles.content}>
            - Generate highly interactive and innovative instructional
            strategies for e-learning solutions <br />
            - Develop course structure and learning specifications addressing
            the requirements of the target audience <br />
            - Construct appropriate testing strategies to ensure learners'
            understanding and performance <br />
            - Address usability issues <br />
            - Keep abreast of new trends in e-learning <br />
            - Ensure that the instructional strategies are as per global
            standards <br />
            - Prepare instructional design checklists and guidelines <br />-
            Check for quality assurance
          </p>
          <div className={styles.linee}></div>
          <span className={styles["card-heading"]}>Requirements :</span>
          <p className={styles.content}>
            - Experience in creating instructional plans and course maps. <br />
            - Experience in the use of media like graphics, illustrations,
            photographs, audio, video, animations, and simulations in
            instruction <br />
            - Awareness of different instructional design models and familiarity
            with instructional and learning theories <br />- Awareness of latest
            trends in e-learning and instructional design <br />
            - Strong client consulting/interfacing skills. <br />
            - Ability to guide clients to focus on specific objectives and
            teaching points <br />- Strong meeting facilitation, presentation
            and interpersonal skills <br />- A thorough understanding of the web
            as an instructional medium <br />- Postgraduate degree in Education,
            Instructional Design, Mass Communication, or Journalism
          </p>
        </div>
      )}
    </>
  );
};

export default JobDetails;
