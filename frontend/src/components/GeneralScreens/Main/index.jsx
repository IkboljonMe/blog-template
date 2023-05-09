import React, { useState } from "react";
import Navbar from "../Navbar";
import classes from "./styles.module.scss";
import { BsGithub, BsYoutube, BsTelegram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import clsx from "clsx";

const Main = () => {
  const [isRotating, setIsRotating] = useState(false);
  return (
    <div className={classes.wrapper}>
      <Navbar />
      <section className={classes.imageContainer}>
        <img
          onClick={() => {
            setIsRotating(!isRotating);
          }}
          className={clsx(isRotating && classes.imgRotation)}
          src="https://avatars.githubusercontent.com/ikboljonme"
          alt=""
        />
        <div>
          <h1>Ikboljon Abdurasulov</h1>
          <p>Software Engineer</p>
          <div>
            <Link to="https://www.linkedin.com/in/ikboljonme/">
              <BsLinkedin size="3x" />
            </Link>
            <Link to="">
              <BsGithub size="3x" />
            </Link>
            <Link to="">
              <BsTelegram size="3x" />
            </Link>
            <Link to="/">
              <BsYoutube size="3x" />
            </Link>
          </div>
        </div>
      </section>
      <section className={classes.buttonsContainer}>
        <p> Yeey. It's IkboljonMe. Check my portfolio or thouths below</p>
        <div>
          <button className={classes.blog}>Read blog</button>
          <button className={classes.portfolio}>Portfolio</button>
        </div>
      </section>
    </div>
  );
};

export default Main;
