import React from "react";
import { Link } from "react-router-dom";
import classes from "./styles.module.scss";
import imgMe from "../../../assets/ikboljonme.png";
import SocialLinks from "./SocialLinks";
import Navigations from "./Navigations";

const Sidebar = () => {
  return (
    <div className={classes.wrapper}>
      <div>
        <img src={imgMe} alt="" />
      </div>
      <Link className={classes.link}>
        <h2>Ikboljon Abdurasulov</h2>
        <SocialLinks />
        <Navigations />
      </Link>
    </div>
  );
};

export default Sidebar;
