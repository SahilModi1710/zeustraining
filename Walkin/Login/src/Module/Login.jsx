import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { useLoginStore } from "../ReactStore/Store";

const Login = () => {
  const { userLogin, isUserLoggedIn, userDetails } = useLoginStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  useEffect(() => {
    console.log("isUserLoggedIn:", isUserLoggedIn);
    console.log("userDetails:", userDetails);
  }, [isUserLoggedIn, userDetails]);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login button called ", email, " ", password, " ", rememberMe);

    const authRequest = {
      email: email,
      password: password,
      rememberMe: rememberMe,
    };

    userLogin(authRequest);
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
              <input
                type="email"
                placeholder="Email ID*"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <a href="#">FORGOT EMAIL ID?</a>
            </div>

            <div className={styles["input-group"]}>
              <input
                type="password"
                placeholder="Password*"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <a href="#">FORGOT PASSWORD?</a>
            </div>

            <div className={styles["checkbox-group"]}>
              <div className={styles.inner}>
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className={styles["check-box"]}
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label htmlFor="remember" className={styles.remember}>
                  Remember Me
                </label>
              </div>
            </div>

            <div className={styles["button-group"]}>
              <button type="submit" className={styles.btn}>
                Log In
              </button>
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
