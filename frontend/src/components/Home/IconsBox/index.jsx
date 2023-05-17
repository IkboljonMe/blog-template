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
      <motion.div whileHover={"hover"} variants={icon}>
        <IoLogoJavascript
          className={classes.iconSize}
          color="#FFFF00
"
        />
      </motion.div>
      <motion.div whileHover={"hover"} variants={icon}>
        <SiPython className={classes.iconSize} color="#04D5FF" />
      </motion.div>

      <motion.div whileHover={"hover"} variants={iconNode}>
        <FaNode className={classes.iconSize} color="#00ED64" />
      </motion.div>
      <motion.div whileHover={"hover"} variants={icon}>
        <SiTypescript className={classes.tsIcon} color="#2D79C7" />
      </motion.div>
    </div>
  );
}

export default IconsBox;
