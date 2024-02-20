import React from "react";
import styles from "./style.module.css";

const Button = ({ btnName, onClick }) => {
  return (
    <div className={styles["btn-container"]}>
      <button className={styles.btn} onClick={onClick}>
        {btnName}
      </button>
    </div>
  );
};

export default Button;
