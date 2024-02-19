import React from "react";
import styles from "./style.module.css";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login button called ");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.title}>Log in</div>
        </div>
        <div className={styles.body}>
          <form action="" onSubmit={handleLogin}>
            <div className={styles["input-group"]}>
              <input type="email" placeholder="Email ID*" />
              <a href="#">FORGOT EMAIL ID?</a>
            </div>

            <div className={styles["input-group"]}>
              <input type="email" placeholder="Password*" />
              <a href="#">FORGOT PASSWORD?</a>
            </div>

            <div className={styles["checkbox-group"]}>
              <div className={styles.inner}>
                <input type="checkbox" className={styles["check-box"]} />
                <p className={styles.remember}>Remember Me</p>
              </div>
            </div>

            <div className={styles["button-group"]}>
              <button className={styles.btn}>Log In</button>
            </div>

            <div className={styles["last-section"]}>
              <p className={styles["not-registered"]}>Not registered yet?</p>
              <p className={styles["not-registered"]}>
                <a href="" className={styles["create-text"]}>
                  CREATE AN ACCOUNT
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
