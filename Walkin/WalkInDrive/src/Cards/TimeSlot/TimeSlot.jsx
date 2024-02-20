import React, { useState } from "react";
import styles from "./style.module.css"; // Import the module CSS file

const TimeSlot = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className={styles["time-slot"]}>
      <span className={styles.title}>Time Slots & Preferences</span>

      <span className={styles.heading}>Select a Time Slot :</span>

      <div className={styles["input-group2"]}>
        <div className={styles["radio-container"]}>
          <input
            type="radio"
            name="slot1"
            id="slot1"
            defaultChecked
            className={styles["radio-group"]}
          />
          <label htmlFor="slot1" className={styles["radio-text"]}>
            9:00 AM to 11:00 AM
          </label>
        </div>
        <div className={styles["radio-container"]}>
          <input
            type="radio"
            name="slot1"
            id="slot2"
            className={styles["radio-group"]}
          />
          <label htmlFor="slot2" className={styles["radio-text"]}>
            1:00 PM to 3:00 PM
          </label>
        </div>
      </div>

      <div className={styles.linee}></div>

      <span className={styles.heading}>Select Your Preference :</span>
      <div className={styles["input-group"]}>
        <div className={styles["radio-container"]}>
          <input
            type="checkbox"
            name="role1"
            id="role1"
            defaultChecked
            className={styles["radio-group"]}
          />
          <label htmlFor="role1" className={styles["radio-text"]}>
            Instructional Designer
          </label>
        </div>
        <div className={styles["radio-container"]}>
          <input
            type="checkbox"
            name="role2"
            id="role2"
            className={styles["radio-group"]}
          />
          <label htmlFor="role2" className={styles["radio-text"]}>
            Software Engineer
          </label>
        </div>
        <div className={styles["radio-container"]}>
          <input
            type="checkbox"
            name="role3"
            id="role3"
            defaultChecked
            className={styles["radio-group"]}
          />
          <label htmlFor="role3" className={styles["radio-text"]}>
            Software Quality Engineer
          </label>
        </div>
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
