import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./styles.module.scss";
import { motion } from "framer-motion";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
const navbarLinks = ["Home", "Blog", "Portfolio", "Projects"];

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav className={classes.navbar}>
        <Link to="/">
          <motion.p whileHover={{ scale: 1.05 }}>Ikboljon's Blog</motion.p>
        </Link>
        <ul>
          {navbarLinks.map((link, index) => (
            <motion.li whileHover={{ scale: 1.05 }}>
              <Link key={index} to={"/" + link.toLowerCase()}>
                {link}
              </Link>
            </motion.li>
          ))}
        </ul>
        <menu>
          {menu ? (
            <i
              onClick={() => {
                setMenu(!menu);
              }}
            >
              <HiMenu size="25" />
            </i>
          ) : (
            <i>
              <IoClose
                size="25"
                onClick={() => {
                  setMenu(!menu);
                }}
              />
            </i>
          )}
        </menu>
        {!menu && (
          <section className={classes.menuSection}>
            <div></div>
            {navbarLinks.map((link, index) => (
              <p>
                <Link to={"/" + link.toLowerCase()}>{link}</Link>
              </p>
            ))}
          </section>
        )}
      </nav>
    </>
  );
};

export default Navbar;
