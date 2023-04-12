import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import classes from "./styles.module.scss";
import { fadeIn } from "../../utils/motion";
import { Service } from "../../constants/index.types";

interface ServiceCardProps {
  service: Service;
  index: number;
}
const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const { title, icon } = service;

  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", +index * 0.5, 0.75)}
        className={classes.cardWrapper}
      >
        <div className={classes.card}>
          <img src={icon} alt="web-development" />
          <h3>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;
