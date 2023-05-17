import React, { useState } from "react";
import classes from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/auth/login", { email, password });
      localStorage.setItem("authToken", data.token);
      setTimeout(() => {
        navigate("/");
      }, 1800);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 4500);
    }
  };
  
  console.log(error);
  return (
    <div className={classes.form}>
      <div className={classes.main}>
        <div className={classes.loginBox}>
          <p>
            Don't have an account? <Link to="/auth/register">Sign up!</Link>
          </p>

          <h1>Login to your account</h1>
          <p>Piease Login Your account,Thank you</p>
          <form onSubmit={loginHandler} className={classes.formInput}>
            
            <div>
              <input
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                required=""
                value={password}
                name="password"
                type="password"
                placeholder="6-strong character"
              />
              <label>Password</label>
            </div>
            <div className={classes.forgotPassword}>
              <Link to="/register">
                <button>Forgot Password?</button>
              </Link>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              type="submit"
              className={classes.loginBtn}
            >
              Login
            </motion.button>
          </form>
        </div>
        <div className={classes.emptyPlace}></div>
      </div>
    </div>
  );
};

export default Form;