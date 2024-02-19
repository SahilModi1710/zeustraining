import React from "react";
import styles from "./style.module.css";

const Header = () => {
  return (
    <>
      <div className={styles["header-container"]}>
        <div className={styles["lms-logo"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="121"
            height="36"
            viewBox="0 0 121 36"
          >
            <image
              id="LMS-logo"
              width="121"
              height="36"
              xlinkHref="data:image/png;base64,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"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Header;