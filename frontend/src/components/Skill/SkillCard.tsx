import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import classes from "./styles.module.scss";
import { fadeIn } from "../../utils/motion";
import { Link } from "react-router-dom";
import { DevelopmentData } from "../../constants/index.types";
import { HiExternalLink } from "react-icons/hi";
interface SkillCardProps {
  development: { name: string; data: DevelopmentData[] };
  index: number;
}
const SkillCard: React.FC<SkillCardProps> = ({ development, index }) => {
  const { name, data } = development;
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className={classes.cardWrapper}
      >
        <div className={classes.card}>
          <h3>{name}</h3>
          {data.map(({ name, icon, projects }) => (
            <div className={classes.skill}>
              <div className={classes.skillName}>
                <p>{name}</p>
                <img src={icon} alt="" />
              </div>
              <div className={classes.projects}>
                {projects.map(({ name, link }, index) => (
                  <Link key={index} to={link}>
                    <motion.div whileHover={{ scale: 1.2 }}>
                      {name}
                      <HiExternalLink />
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Tilt>
  );
};

export default SkillCard;
