import React from "react";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";

const DriveCard = ({ driveDetails }) => {
  const navigateTo = useNavigate();

  const handleClick = () => {
    navigateTo("/drive");
  };

  return (
    <>
      <div className={styles["card-container"]}>
        <div className={styles.card}>
          <div className={styles.header}>
            <span className={styles.title}>Walk In for Designer Job Role</span>

            {driveDetails && (
              <button
                className={styles.btn}
                onClick={() => {
                  navigateTo("/review");
                }}
              >
                APPLY
              </button>
            )}
          </div>
          <span className={styles["sub-title"]}>Date & Time:</span>
          <div className={styles["date-city"]}>
            <span className={styles.dates}>10-Jul-2021 to 11-Jul-2021</span>

            <div className={styles.city}>
              <img
                src="../../../assets/location_on_black_24dp.svg"
                alt="location icon"
              />
              <span>Mumbai</span>
            </div>
          </div>

          <div className={styles.linee}></div>

          <div className={styles.jobroles}>
            <span className={styles["sub-title"]}>Job Roles :</span>

            <div className={styles.roles}>
              <div className={styles["role-container"]}>
                <div className={styles.role}>
                  <img
                    src="../../../assets/Instructional Designer.svg"
                    alt="Instructional Designer.svg"
                  />
                  <span>Instructional Designer</span>
                </div>
                <div className={styles.role}>
                  <img
                    src="../../../assets/Instructional Designer.svg"
                    alt="Instructional Designer.svg"
                  />
                  <span>Instructional Designer</span>
                </div>
                <div className={styles.role}>
                  <img
                    src="../../../assets/Instructional Designer.svg"
                    alt="Instructional Designer.svg"
                  />
                  <span>Instructional Designer</span>
                </div>
              </div>
            </div>
          </div>

          {!driveDetails && (
            <button
              className={styles.btn}
              style={{ margin: "10px auto 10px auto" }}
              onClick={handleClick}
            >
              VIEW MORE DETAILS
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default DriveCard;
