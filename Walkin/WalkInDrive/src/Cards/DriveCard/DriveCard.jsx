import React from "react";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { useDriveStore } from "../../ReactStore/Store";
import axios from "axios";
import { useUserStore } from "../../ReactStore/UserStore";

const DriveCard = ({ driveDetails, drive }) => {
  const navigateTo = useNavigate();
  const { applyDrive } = useDriveStore();

  const { userDetails } = useUserStore();

  const timeSlot = parseInt(applyDrive.timeSlot);
  const jobRoles = applyDrive.jobRoles?.map((role) => parseInt(role));

  const mutation = `
    mutation ApplyToDrive($input: applicationInput!) {
      ApplyToDrive(input: $input)
    }
  `;

  const handleApply = async () => {
    if (!timeSlot || !jobRoles) {
      alert("select time slot or job role ");
      return;
    }

    const variables = {
      input: {
        user_id: userDetails.id,
        updated_resume: "abc.pdf",
        time_slot: timeSlot,
        jobRoles: jobRoles,
        walkin_drive_id: driveDetails.id,
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/graphql",
        {
          query: mutation,
          variables,
        },
        {
          headers: {
            "x-api-key": "dummy-api-key",
          },
        }
      );

      // console.log(response.data);
      navigateTo("/walkindrives/review");
    } catch (error) {
      console.error("Error in handleApply:", error.message);
    }
  };

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
              <button className={styles.btn} onClick={handleApply}>
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
