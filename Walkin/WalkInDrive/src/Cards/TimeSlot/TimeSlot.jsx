import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { useDriveStore } from "../../ReactStore/Store";

const TimeSlot = ({ driveDetails }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { applyDrive, setApplyDrive } = useDriveStore();

  useEffect(() => {
    setApplyDrive({});
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleTimeSlotChange = (e) => {
    const selectedTimeSlot = e.target.value;
    setApplyDrive({ ...applyDrive, timeSlot: selectedTimeSlot });
  };

  const handleJobRoleChange = (e) => {
    const selectedJobRole = e.target.value;
    const isChecked = e.target.checked;

    let updatedJobRoles = applyDrive.jobRoles || [];

    if (isChecked) {
      if (!updatedJobRoles.includes(selectedJobRole)) {
        updatedJobRoles = [...updatedJobRoles, selectedJobRole];
      }
    } else {
      updatedJobRoles = updatedJobRoles.filter(
        (role) => role !== selectedJobRole
      );
    }

    setApplyDrive({ ...applyDrive, jobRoles: updatedJobRoles });
  };

  console.log(applyDrive);

  return (
    <div className={styles["time-slot"]}>
      <span className={styles.title}>Time Slots & Preferences</span>

      <span className={styles.heading}>Select a Time Slot :</span>

      <div className={styles["input-group2"]}>
        {driveDetails.timeSlots.map((timeSlot, index) => {
          return (
            <div className={styles["radio-container"]} key={index}>
              <input
                type="radio"
                name="timeSlot"
                id={`timeSlot${index}`}
                value={timeSlot.id}
                className={styles["radio-group"]}
                onChange={handleTimeSlotChange}
              />
              <label
                htmlFor={`timeSlot${index}`}
                className={styles["radio-text"]}
              >
                {timeSlot.time_slot}
              </label>
            </div>
          );
        })}
      </div>

      <div className={styles.linee}></div>

      <span className={styles.heading}>Select Your Preference :</span>
      <div className={styles["input-group"]}>
        {driveDetails.jobRoles.map((jobrole, index) => {
          return (
            <div className={styles["radio-container"]} key={index}>
              <input
                type="checkbox"
                name="jobRole"
                id={`jobRole${index}`}
                value={jobrole.id}
                className={styles["radio-group"]}
                onChange={handleJobRoleChange}
              />
              <label
                htmlFor={`jobRole${index}`}
                className={styles["radio-text"]}
              >
                {jobrole.job_title}
              </label>
            </div>
          );
        })}
      </div>

      <div className={styles.linee}></div>

      <div className={styles["upload-resume"]}>
        <label htmlFor="resume" className={styles["upload-label"]}>
          <img src="../../../assets/upload-green.svg" alt="" />
          <input
            type="file"
            name="resume"
            id="resume"
            className={styles["file"]}
            onChange={handleFileChange}
          />
          <span>
            {selectedFile ? selectedFile.name : "Upload Updated Resume"}
          </span>
        </label>
      </div>
    </div>
  );
};

export default TimeSlot;
