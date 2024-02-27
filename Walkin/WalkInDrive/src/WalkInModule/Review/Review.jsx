import React from "react";
import styles from "./style.module.css";
import { useDriveStore } from "../../ReactStore/Store";

const Review = () => {
  const { applyDrive } = useDriveStore();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.correct}>
          <img src="../../../assets/check_correct.webp" alt="" />
        </div>

        <div className={styles["info-card"]}>
          <span className={styles.title}>
            Congratulations ! You have successfully applied for the walk-in
            opportunity
          </span>

          <div className={styles.linee}></div>

          <span className={styles.heading}>Date & Time of Walk-In :</span>

          <p className={styles.para}>
            03rd July 2021
            <br />
            {applyDrive.timeSlot}
          </p>

          <div className={styles.linee}></div>

          <span className={styles.heading}>Venue of Walk-In :</span>

          <p className={styles.para}>
            Zeus Systems Pvt. Ltd.
            <br />
            1402, 14th Floor, Tower B, Peninsula Business Park. Ganpatrao Kadam
            Marg
            <br /> Lower Parel (W)
            <br />
            Mumbai - 400 013
            <br /> Phone: +91-22-66600000
          </p>

          <div className={styles.linee}></div>

          <span className={styles.heading}>THINGS TO REMEMBER :</span>

          <p className={styles.para}>
            - Please report 30 MINUTES prior to your reporting time.
            <br /> - Download your Hall Ticket from below and carry it with you
            during your Walk-In.
          </p>

          <div className={styles.linee}></div>

          <span className={styles.btn} style={{ margin: "14px auto 5px auto" }}>
            DOWNLOAD HALL TICKET
          </span>
        </div>
      </div>
    </>
  );
};

export default Review;
