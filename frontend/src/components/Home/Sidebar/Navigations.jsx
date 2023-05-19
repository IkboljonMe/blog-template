import React from "react";
import { Link } from "react-router-dom";
import { CgBriefcase } from "react-icons/cg";
import { FiHome, FiMessageCircle, FiUser } from "react-icons/fi";
import { TbTools } from "react-icons/tb";
import classes from "./styles.module.scss";
const Navigations = () => {
  return (
    <ul className={classes.ul_links}>
      <li>
        <Link to="/">
          <span>
            <FiHome className={classes.iconss} />
            Home
          </span>
        </Link>
      </li>
      <li>
        <Link to="/">
          <span>
            <FiUser className={classes.iconss} />
            About us
          </span>
        </Link>
      </li>
      <li>
        <Link to="/">
          <span>
            <TbTools className={classes.iconss} />
            Skills
          </span>
        </Link>
      </li>
      <li>
        <Link to="/">
          <span>
            <CgBriefcase className={classes.iconss} />
            Portfolio
          </span>
        </Link>
      </li>
      <li>
        <Link to="/">
          <span>
            <FiMessageCircle className={classes.iconss} />
            Contact
          </span>
        </Link>
      </li>
      <br />
      <br />
      <li>
        <Link style={{ color: "blue" }} to="/">
          ikboljon@gmail.com
        </Link>
      </li>
    </ul>
  );
};

export default Navigations;
