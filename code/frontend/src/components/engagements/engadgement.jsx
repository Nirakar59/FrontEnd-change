import React, { useState, useEffect } from "react";
import "./engadgement.css";

const BreathingExercise = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const startExercise = () => {
    setTimer(0);
    setTimeout(() => {
      setTimeout(() => {
        setTimeout(() => {}, 4000); // Exhale for 4 seconds
      }, 7000); // Hold for 7 seconds
    }, 3000); // Inhale for 3 seconds
  };

  // Calculate size and color based on timer
  const calculateCircle = () => {
    let size = 150;
    let color = "#90ee90"; // Default color for inhale

    if (timer >= 3 && timer < 10) {
      // Hold phase
      size = 100; // Decrease size during hold
      color = "#ffcccb"; // Light pink for hold
    } else if (timer >= 10 && timer < 14) {
      // Exhale phase
      size = 50; // Decrease size during exhale
      color = "#add8e6"; // Light blue for exhale
    }

    return {
      width: size,
      height: size,
      backgroundColor: color,
    };
  };

  return (
    <div className="breathing-exercise">
      <h2>Breathing Exercise</h2>
      <div className="breathing-container">
        <div className="circle" style={calculateCircle()}></div>
        <div className="timer">{timer}s</div>
      </div>
      <button onClick={startExercise}>Start Exercise</button>
    </div>
  );
};

export default BreathingExercise;
