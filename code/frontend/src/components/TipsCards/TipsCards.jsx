import React, { useState, useEffect } from 'react';
import tips from './TipsCards.json';
// import './TipsCards.css'

const TipsCards = () => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [showTips, setShowTips] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTipIndex(prevIndex =>
        prevIndex === tips.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const handleClose = () => {
    setShowTips(false);
  };

  const tipsContainerStyle = {
    display: showTips ? 'flex' : 'none',
    position: 'fixed',
    top: '20px',
    right: '20px',
    flexDirection: 'column',
    alignItems: 'flex-end',
  };

  const tipsBoxStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    width: '100%',
    marginBottom: '10px',
  };

  const closeButtonStyle = {
    border: 'none',
    background: 'transparent',
    color: '#999',
    fontSize: '18px',
    cursor: 'pointer',
    marginLeft: 'auto',
  };

  return (
    <div className="tips-container" style={tipsContainerStyle}>
      {tips.length > 0 && (
        <div className="tips-box" style={tipsBoxStyle}>
          <span>{tips[currentTipIndex].tip}</span>
          <button className="close-button" onClick={handleClose} style={closeButtonStyle}>✕</button>
        </div>
      )}
    </div>
  );
};

export default TipsCards;
