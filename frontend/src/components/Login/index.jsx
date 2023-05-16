import React, { useState, useEffect } from "react";
import classes from "./login.module.scss";
import { Link } from "react-router-dom";
const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Please fill in the space");
  const [passwordError, setPasswordError] = useState(
    "The password was entered incorrectly"
  );
  const [formValid, setFormValid] = useState(false);
  const [loginError, setLoginError] = useState(
    "Iltimos malumotlaringizni kiriting!!!"
  );

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(email).toLowerCase())) {
      setEmailError("You have entered an email error");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (!passwordRegex.test(String(password).toLowerCase())) {
      setPasswordError("parol raqam, belgi va harflardan iborat bolishi kerak");
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  return (
    <div className={classes.form}>
      <div className={classes.main}>
        <div className={classes.loginBox}>
          <p>
            Don't have an account? <Link to="/auth/register">Sign up!</Link>
          </p>
          {email && password && (
            <div style={{ color: "red" }}>{loginError}</div>
          )}
          <h1>Login to your account</h1>
          <p>Piease Login Your account,Thank you</p>
          <form className={classes.formInput}>
            {emailDirty && emailError && (
              <div style={{ color: "red" }}>{emailError}</div>
            )}

            <div>
              <input
                onChange={(e) => emailHandler(e)}
                onBlur={(e) => blurHandler(e)}
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
                onBlur={(e) => blurHandler(e)}
                required=""
                value={password}
                name="password"
                type="password"
                placeholder="6-strong character"
              />
              <label>Password</label>

              {passwordDirty && passwordError && (
                <div style={{ color: "red" }}>{passwordError}</div>
              )}
            </div>
            <div className={classes.forgotPassword}>
              <Link to="/register">
                <button>Forgot Password?</button>
              </Link>
            </div>
            <button
              disabled={!formValid}
              type="submit"
              className={classes.loginBtn}
            >
              Login
            </button>
          </form>
        </div>
        <div className={classes.emptyPlace}></div>
      </div>
    </div>
  );
};

export default Form;
