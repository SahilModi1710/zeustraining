import React from "react";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";

const DriveCard = ({ driveDetails, drive }) => {
  const navigateTo = useNavigate();

  // console.log(driveDetails);
  const handleClick = () => {
    navigateTo(`/walkindrives/${driveDetails.guid}`);
  };

  return (
    <>
      <div className={styles["card-container"]}>
        <div className={styles.card}>
          <div className={styles.header}>
            <span className={styles.title}>{driveDetails.drive_title}</span>

            {drive && (
              <button
                className={styles.btn}
                onClick={() => {
                  navigateTo("/walkindrives/review");
                }}
              >
                APPLY
              </button>
            )}
          </div>
          <span className={styles["sub-title"]}>Date & Time:</span>
          <div className={styles["date-city"]}>
            <span className={styles.dates}>
              {driveDetails.start_date} to {driveDetails.start_date}{" "}
            </span>

            <div className={styles.city}>
              <img
                src="../../../assets/location_on_black_24dp.svg"
                alt="location icon"
              />
              <span>{driveDetails.location}</span>
            </div>
          </div>

          <div className={styles.linee}></div>

          <div className={styles.jobroles}>
            <span className={styles["sub-title"]}>Job Roles :</span>

            <div className={styles.roles}>
              <div className={styles["role-container"]}>
                {driveDetails.jobRoles.map((jobRole, index) => {
                  return (
                    <div className={styles.role} key={index}>
                      <img
                        src="../../../assets/Instructional Designer.svg"
                        alt="Instructional Designer.svg"
                      />
                      <span>{jobRole.job_title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {!drive && (
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
