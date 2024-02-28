import React, { useState } from "react";
import styles from "./style.module.css";

const JobDetails = ({ jobDetails }) => {
  const [showJobDesc, setShowJobDesc] = useState(false);

  const openJob = () => {
    setShowJobDesc(!showJobDesc);
  };

  const splitPoints = (text) => {
    return text.split(". ").map((point, index) => (
      <React.Fragment key={index}>
        <br />- {point.trim()}
      </React.Fragment>
    ));
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
          <p className={styles.content}>{jobDetails.package}</p>
          <div className={styles.linee}></div>
          <span className={styles["card-heading"]}>Role Description :</span>
          <p className={styles.content}>
            {splitPoints(jobDetails.job_description)}
          </p>
          <div className={styles.linee}></div>
          <span className={styles["card-heading"]}>Requirements :</span>
          <p className={styles.content}>
            {splitPoints(jobDetails.job_requirements)}
          </p>
        </div>
      )}
    </>
  );
};

export default JobDetails;
