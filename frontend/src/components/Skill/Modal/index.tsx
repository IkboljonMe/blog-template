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
      <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={()=>setIsModalOpen(false)}>Close</span>
            <h2>Salom</h2>
            <p>Lorem</p>
          </div>
        </div>
    </div>
  );
};

export default Modal;
