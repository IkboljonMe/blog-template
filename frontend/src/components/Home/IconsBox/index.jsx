import { FaNode } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
import classes from "./styles.module.scss";
import { icon, iconNode } from "../../../utils/motions";

function IconsBox() {
  return (
    <div className={classes.iconContainer}>
      <div className={classes.iconContainers}>
      <motion.div whileHover={"hover"} variants={icon} className={classes.margin}>
        <IoLogoJavascript
          className={classes.iconSize}
          color="#FFFF00
"
        />
      </motion.div>
      <motion.div whileHover={"hover"} variants={icon} className={classes.margin}>
        <SiPython className={classes.iconSize} color="#04D5FF" />
      </motion.div>

      <motion.div whileHover={"hover"} variants={iconNode} className={classes.margin}>
        <FaNode className={classes.iconSize} color="#00ED64" />
      </motion.div>
      <motion.div whileHover={"hover"} variants={icon} className={classes.margin}>
        <SiTypescript className={classes.tsIcon} color="#2D79C7" />
      </motion.div>
      </div>
    </div>
  );
}

export default IconsBox;
