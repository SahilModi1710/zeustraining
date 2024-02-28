import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { useLoginStore, publishLoginEvent } from "../ReactStore/Store";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { userLogin, isUserLoggedIn, userDetails } = useLoginStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log("login button called ", email, " ", password, " ", rememberMe);

    const query = `
      query Login($email: String!, $password: String!) {
        Login(input: { email: $email, password: $password }) {
          id
          guid
          first_name
          last_name
          email
          profile_pic
        }
      }
    `;

    const variables = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/graphql",
        {
          query,
          variables,
        },
        {
          headers: {
            "x-api-key": "dummy-api-key",
          },
        }
      );

      const result = response.data.data.Login;

      if (result) {
        const userLoginDetails = {
          isUserLoggedIn: true,
          userDetails: result,
        };
        userLogin(userDetails);
        publishLoginEvent(userLoginDetails);
        navigateTo("/walkindrives");
      }
    } catch (error) {
      console.error("Error in handleLogin:", error.message);
    }
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
                {/* <Link to="/register" className={styles["create-text"]}> */}
                <a href="/register" className={styles["create-text"]}>
                  CREATE AN ACCOUNT
                </a>
                {/* </Link> */}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
