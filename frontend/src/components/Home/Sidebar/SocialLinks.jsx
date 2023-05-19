import React from "react";
import classes from "./styles.module.scss";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
} from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
const SocialLinks = () => {
  return (
    <ul className={classes.social_icons}>
      <motion.li whileHover={{ scale: 1.1, backgroundColor: "#7A6BFFFF" }}>
        <Link to={"/"} target="_blank">
          <FaFacebookF size={20} />
        </Link>
      </motion.li>
      <motion.li whileHover={{ scale: 1.1, backgroundColor: "#7A6BFFFF" }}>
        <Link to={"/"} target="_blank">
          <FiGithub size={20} />
        </Link>
      </motion.li>
      <motion.li whileHover={{ scale: 1.1, backgroundColor: "#7A6BFFFF" }}>
        <Link to={"/"} target="_blank">
          <FaInstagram size={20} />
        </Link>
      </motion.li>
      <motion.li whileHover={{ scale: 1.1, backgroundColor: "#7A6BFFFF" }}>
        <Link to={"/"} target="_blank">
          <FaLinkedinIn size={20} />
        </Link>
      </motion.li>
      <motion.li whileHover={{ scale: 1.1, backgroundColor: "#7A6BFFFF" }}>
        <Link to={"/"} target="_blank">
          <FaSkype size={20} />
        </Link>
      </motion.li>
    </ul>
  );
};

export default SocialLinks;
