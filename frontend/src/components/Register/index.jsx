import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./styles.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";

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
  console.log(error);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.emptyBox}></div>
        <div className={classes.loginBox}>
          <h1>Register here</h1>
          <h3>Please enter your credentias to register</h3>
          <form onSubmit={registerHandler} className={classes.formInput}>
            <div>
              <input
                onChange={(e) => setUsername(e.target.value)}
                required=""
                value={username}
                name="username"
                type="text"
                placeholder="john@ gmail.com"
              />
              <label>Username</label>
            </div>
            <div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                required=""
                value={email}
                name="email"
                type="email"
                placeholder="john@ gmail.com"
              />
              <label>Email</label>
            </div>
            <div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                required=""
                value={password}
                name="password"
                type="password"
                placeholder="6-strong character"
              />
              <label>Password</label>
            </div>
            <div>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                required=""
                value={confirmpassword}
                name="password"
                type="password"
                placeholder="6-strong character"
              />
              <label>Confirm Password</label>
            </div>
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
