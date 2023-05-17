import React from "react";
import { Link } from "react-router-dom";
import classes from "./styles.module.scss";
import SocialLinks from "./SocialLinks";
import Navigations from "./Navigations";

const Sidebar = () => {
  return (
    <div className={classes.wrapper}>
      <div>
        <img src="https://avatars.githubusercontent.com/ikboljonme" alt="" />
      </div>
      <Link>
        <h2>Ikboljon Abdurasulov</h2>
        <SocialLinks />
        <Navigations />
      </Link>
    </div>
  );
};

export default Sidebar;
