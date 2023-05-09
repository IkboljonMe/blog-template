import React from "react";
import { Link } from "react-router-dom";
import classes from "./styles.module.scss";
import { motion } from "framer-motion";
const navbarLinks = ["Home", "Blog", "Portfolio", "Talks"];
const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <Link to="/">
        <motion.p whileHover={{ scale: 1.05 }}>Ikboljon's Blog</motion.p>
      </Link>
      <ul>
        {navbarLinks.map((link, index) => (
          <motion.li whileHover={{ scale: 1.05 }}>
            <Link key={index} to={link.toLowerCase}>
              {link}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
