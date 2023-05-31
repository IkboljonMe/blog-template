import classes from "./styles.module.scss";
import clsx from "clsx";
import React from "react";
interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modal: React.FC<ModalProps> = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div
      className={clsx({
        [classes.modal]: true,
        [classes.isModalOpen]: isModalOpen,
      })}
    >
      <p>Modal</p>
      <button onClick={() => setIsModalOpen(false)}>CLOSE</button>
    </div>
  );
};

export default Modal;
