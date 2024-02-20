import React, { useState } from "react";
import styles from "./style.module.css";

const Prerequisites = () => {
  const [showPrerequisites, setShowPrerequisites] = useState(false);

  const openJob = () => {
    setShowPrerequisites(!showPrerequisites);
  };

  return (
    <>
      <div
        className={styles["education-section"]}
        style={{ marginBottom: showPrerequisites ? "0px" : "16px" }}
      >
        <span className={styles.heading}>
          Pre-requisites & Application Process
        </span>
        {showPrerequisites ? (
          <img
            src="../../../assets/icons/list-up.svg"
            alt="up-icon"
            onClick={openJob}
            className={styles["heading-img"]}
          />
        ) : (
          <img
            className={styles["extra-img"]}
            onClick={openJob}
            src="../../../assets/icons/list-down.svg"
            alt="down-icon"
          />
        )}
      </div>

      {showPrerequisites && (
        <div className={styles["pre-requisite"]}>
          <span className={styles["card-heading"]}>General Instructions :</span>

          <p className={styles.content}>
            - We have a two–year indemnity for permanent candidates. We will
            provide training to the selected candidates. <br />- Candidates who
            have appeared for any test held by Zeus Learning in the past 12
            months will not be allowed to appear for this recruitment test.
          </p>

          <div className={styles.linee}></div>

          <span className={styles["card-heading"]}>
            Instructions for the Exam :
          </span>

          <p className={styles.content}>
            - Candidates are requested to log in half an hour prior to the exam
            start time as they would need to capture their image using a web
            camera. By taking this test, you are permitting the examination
            system to capture your video for invigilation purposes.
            <br />
            - Candidates would not be able to appear for the exam if the web
            camera attached to their system is not functional. <br />- The web
            camera of your system must be enabled and must remain switched on
            throughout the examination. In the event of non-receipt of a webcam,
            your examination will be considered null and void. <br />
            - Candidate’s audio and video will be recorded during the
            examination and will also be monitored by a live proctor. The
            proctor may terminate your exam in case he/she observes any
            malpractice during the exam. <br />- Candidates are advised to use
            their own Laptop/PC with a stable internet connection (min 1 Mbps)
            during the exam. <br />- Candidates cannot use an iOS system/device
            for this exam.
          </p>

          <div className={styles.linee}></div>
          <span className={styles["card-heading"]}>
            Minimum System Requirements :
          </span>

          <p className={styles.content}>
            - Personal Laptop or Desktop computer in working condition with good
            quality camera (you can use Windows 7 and above). <br />
            - The latest version of Google Chrome Browser only. <br />
            - Please note that Internet speed should be minimum 1 Mbps. <br />-
            Do not use a MacBook or iPad for the proctored exam.
          </p>
          <div className={styles.linee}></div>

          <span className={styles["card-heading"]}>Process :</span>

          <p className={styles.content}>
            - Every round is an elimination round. Candidates need to clear all
            rounds to get selected.
            <br />
            <br />
            Round I : 4th August, 2018
            <br />
            Aptitude Test : 25 Questions <br />
            <br />
            Round II (Interview) : 4th August, 2018.
          </p>
        </div>
      )}
    </>
  );
};

export default Prerequisites;
