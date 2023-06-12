import classes from "./styles.module.scss";
import clsx from "clsx";
import React from "react";
import { FaTimes } from "react-icons/fa";
import react  from "../../../assets/hero1.png";
import {HiArrowTopRightOnSquare} from 'react-icons/hi2'
import { HiCode } from "react-icons/hi";

interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modals: React.FC<ModalProps> = ({ isModalOpen, setIsModalOpen },modal) => {
  return (
    <div
      className={clsx({
        [classes.modal]: true,
        [classes.isModalOpen]: isModalOpen,
      })}
    >
        <button className={classes.closeBtn} onClick={() => setIsModalOpen(false)}>
          <FaTimes className={classes.timesIcon} size={25} />
        </button>
      <div className={classes.imgItems}>
        <img src={react} alt="react" />
        <div className={classes.information}>
          <h1>React</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut,
            eveniet? Ad aliquam soluta excepturi veniam atque aperiam molestiae
            asperiores expedita.
          </p>
          <h2>Project Stack</h2>
          <ul>
            <li>React</li>
            <li>Redux+Saga+Toolkit</li>
            <li>HTML/CSS</li>
          </ul>
          <ul>
            <li>PHP</li>
            <li>PostgreSQL</li>
          </ul>
          <div className={classes.btns}>
          <button className={classes.viewProject}>View Project <HiArrowTopRightOnSquare className={classes.viewP} size={26}/> </button>
          <button className={classes.viewProject}>Code <HiCode className={classes.viewP} size={26}/> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
