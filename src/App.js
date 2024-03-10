// Home.js

import React from 'react';
import './App.css';
import img1 from './img1.jpg';
import img2 from './img2.jpg'
import CakeGame from './CakeGame';
function App() {
  return (
    <div className="home">
    
      <div className="message-container">
        <h2>Happy Womens day!</h2>
        <p className="love-message">
          Bit late, I was skeptical about this
        </p>
        <p className="virtual-message">
          I've created this virtual celebration just for you! Click the pink circle
        </p>
        <CakeGame/>
      </div>
      <div className="image-container">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
      </div>
     
    </div>
  );
}

export default App;
