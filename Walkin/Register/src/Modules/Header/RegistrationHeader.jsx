import React from "react";
import styles from "./style.module.css";

const RegistrationHeader = () => {
  return (
    <>
      <div className={styles["header-container"]}>
        <div className={styles["title-bar"]}>
          <div className={styles["back-arrow"]}>
            <svg
              id="back"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g id="Bounding_Boxes">
                <path
                  id="Path_1831"
                  data-name="Path 1831"
                  d="M0,0H24V24H0Z"
                  fill="none"
                />
              </g>
              <g id="Outline_1_">
                <path
                  id="Path_1832"
                  data-name="Path 1832"
                  d="M20,11H7.83l5.59-5.59L12,4,4,12l8,8,1.41-1.41L7.83,13H20Z"
                  fill="#3FD28B"
                />
              </g>
            </svg>
          </div>

          <span className={styles.title}>Create an account</span>

          <div className={styles.progress}>
            <button className={`${styles.cancel} ${styles.btn}`}>Cancel</button>

            <button className={`${styles.create} ${styles.btn}`} disabled>
              Create
            </button>
          </div>
        </div>

        <div className={styles.steps}>
          <div className={styles.first}>
            <div className={`${styles.cnt} ${styles.active}`}>1</div>
            <div className={styles.info}>Personal Informations</div>
          </div>

          <hr className={styles.linee} />

          <div className={styles.sec}>
            <div className={styles.cnt}>2</div>
            <div className={styles.info}>Qualifications</div>
          </div>

          <hr className={styles.linee} />

          <div className={styles.last}>
            <div className={styles.cnt}>3</div>
            <div className={styles.info}>Review and Proceed</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationHeader;
