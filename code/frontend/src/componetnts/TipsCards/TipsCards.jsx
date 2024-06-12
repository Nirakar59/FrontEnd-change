import React from 'react';
import { useState } from 'react';

const TipsCards = ({ data, onDecrease }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  const handleClose = () => {
    onDecrease(currentCardIndex);
    setCurrentCardIndex(0);
  };

  return (
    <div className="cards-container">
      {data.length > 0 && (
        <div className="card">
          <span>{data[currentCardIndex]}</span>
          <button className="close-button" onClick={handleClose}>✕</button>
        </div>
      )}
      {data.length > 1 && (
        <div className="navigation">
          <button className="prev-button" onClick={handlePrev}>Previous</button>
          <button className="next-button" onClick={handleNext}>Next</button>
        </div>
      )}
    </div>
  );
};

export default TipsCards;
