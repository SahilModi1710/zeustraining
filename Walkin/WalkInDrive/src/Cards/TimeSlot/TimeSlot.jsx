import React, { useState } from "react";
import styles from "./style.module.css"; // Import the module CSS file
// ... (previous imports)

const TimeSlot = ({ driveDetails }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedJobRoles, setSelectedJobRoles] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleTimeSlotChange = (e) => {
    setSelectedTimeSlot(e.target.value);
  };

  const handleJobRoleChange = (e) => {
    const selectedJobRoleId = e.target.value;

    setSelectedJobRoles((prevSelectedJobRoles) => {
      if (prevSelectedJobRoles.includes(selectedJobRoleId)) {
        return prevSelectedJobRoles.filter((id) => id !== selectedJobRoleId);
      } else {
        return [...prevSelectedJobRoles, selectedJobRoleId];
      }
    });
  };

  console.log(selectedJobRoles);
  console.log(selectedTimeSlot);

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
                value={timeSlot.time_slot}
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
                value={jobrole.job_title}
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
