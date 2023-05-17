import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./styles.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import TextField from "./TextField";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const registerHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 8000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      localStorage.setItem("authToken", data.token);

      setTimeout(() => {
        navigate("/");
      }, 1800);
    } catch (error) {
      setError(error.response.data.error);

      setTimeout(() => {
        setError("");
      }, 6000);
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.emptyBox}></div>
        <div className={classes.loginBox}>
          <h1>Register here</h1>
          <h3>Please enter your credentias to register</h3>
          <form onSubmit={registerHandler} className={classes.formInput}>
            <TextField
              type="text"
              placeholder="Username"
              label="Username"
              onChange={setUsername}
            />
            <TextField
              type="email"
              placeholder="Email"
              label="Email"
              onChange={setEmail}
            />
            <TextField
              type="password"
              placeholder="Password"
              label="Password"
              onChange={setPassword}
            />
            <TextField
              type="password"
              placeholder="Confirm Password"
              label="Confirm Password"
              onChange={setConfirmPassword}
            />
            <Link to="/resetpassword">Forgot Password?</Link>
            <button type="submit">Submit</button>
          </form>
          <p>
            Do you have account? <Link to="/auth/login">Sign up!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
