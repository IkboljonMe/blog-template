import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import classes from "./styles.module.scss";
import { BsGithub, BsYoutube, BsTelegram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { motion } from "framer-motion";

const Main = () => {
  const [isRotating, setIsRotating] = useState(false);
  return (
    <div className={classes.wrapper}>
      <Navbar />
      <section>
        <section className={classes.imageContainer}>
          <motion.img
            whileHover={{ scale: 1.04 }}
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
              <motion.i whileHover={{ scale: 1.1 }}>
                <Link to="https://www.linkedin.com/in/ikboljonme/">
                  <BsLinkedin size="24" />
                </Link>
              </motion.i>
              <motion.i whileHover={{ scale: 1.1 }}>
                <Link to="">
                  <BsGithub size="24" />
                </Link>
              </motion.i>
              <motion.i whileHover={{ scale: 1.1 }}>
                <Link to="">
                  <BsTelegram size="24" />
                </Link>
              </motion.i>
              <motion.i whileHover={{ scale: 1.1 }}>
                <Link to="/">
                  <BsYoutube size="24" />
                </Link>
              </motion.i>
            </div>
          </div>
        </section>
        <section className={classes.buttonsContainer}>
          <p> Computers are fast. Developers keep them slow</p>
          <div>
            <Link to="/blog">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className={classes.blog}
              >
                Read blog
              </motion.button>
            </Link>
            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className={classes.portfolio}
              >
                Portfolio
              </motion.button>
            </Link>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default Main;
