import React, { useState, useEffect } from "react";
import classes from "./styles.module.scss";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  useEffect(() => {
    if (isEmailValid && isPasswordValid) {
      setIsFormValid(true);
    }
  }, [isEmailValid, isPasswordValid]);
  const emailHandler = (event) => {
    setEmail(event.target.value);
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailRegex.test(String(email).toLowerCase())) {
      setIsEmailValid(true);
    }
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (passwordRegex.test(String(password).toLowerCase())) {
      setIsPasswordValid(true);
    }
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.emptyBox}></div>
        <div className={classes.loginBox}>
          <h1>Register here</h1>
          <h3>Please enter your credentias to register</h3>
          <div className={classes.formInput}>
            <div>
              <input
                onChange={(e) => emailHandler(e)}
                required=""
                value={email}
                name="email"
                type="text"
                placeholder="john@ gmail.com"
              />
              <label>Email</label>
            </div>
            <div>
              <input
                onChange={(e) => passwordHandler(e)}
                required=""
                value={password}
                name="password"
                type="password"
                placeholder="6-strong character"
              />
              <label>Password</label>
            </div>
            <Link to="/resetpassword">Forgot Password?</Link>
            <button disabled={!isFormValid} type="submit">
              Login
            </button>
          </div>
          <p>
            Do you have account? <Link to="/auth/login">Sign up!</Link>
          </p>
          {/* <error>
            {!isFormValid &&
              `Check ${!isEmailValid ? "email" : ""}${
                !isPasswordValid
                  ? `${
                      !isEmailValid && !isPasswordValid ? "\u00A0and\u00A0" : ""
                    }password`
                  : ""
              }${
                !isEmailValid && !isPasswordValid
                  ? "\u00A0fields"
                  : "\u00A0field"
              }`}
          </error> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
