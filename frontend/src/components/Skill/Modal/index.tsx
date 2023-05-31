import React, { useState } from 'react';

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={openModal}>Open Modal</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{title}Salom</h2>
            <p>{content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;

