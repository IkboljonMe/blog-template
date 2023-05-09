import React from "react";
import { Link } from "react-router-dom";
import classes from "./styles.module.scss";
const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <p>Ikboljon's Blog</p>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/talks">Talks</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
