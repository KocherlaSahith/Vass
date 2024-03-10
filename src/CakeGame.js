// CakeGame.js

import React, { useState } from 'react';
import './CakeGame.css';

function CakeGame() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className={`cake-container ${isModalOpen ? 'cut' : ''}`} onClick={openModal}>
        <div className="cake"></div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Happy womens day!</h2>
            <p>To the best!</p>
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CakeGame;
