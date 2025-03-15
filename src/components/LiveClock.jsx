import React, { useState, useEffect } from "react";
import "./LiveClock.css";

const LiveClock = () => {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);
  const [is24Hour, setIs24Hour] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (date) => {
    return is24Hour
      ? date.toLocaleTimeString("en-GB") 
      : date.toLocaleTimeString("en-US"); 
  };

  const formattedDate = time.toLocaleDateString();
  const formattedTime = formatTime(time);

  return (
    <div className="clock-container">
      <div className="clock-box animate-glow">
        <div className="clock-date">{formattedDate}</div>
        <div className="clock-time">{formattedTime}</div>
      </div>
      <div className="button-container">
        <button onClick={() => setIsRunning(true)} disabled={isRunning} className={`clock-button ${isRunning ? 'disabled' : ''}`}>
          Start
        </button>
        <button onClick={() => setIsRunning(false)} disabled={!isRunning} className={`clock-button ${!isRunning ? 'disabled' : ''}`}>
          Stop
        </button>
        <button onClick={() => setIs24Hour(!is24Hour)} className="clock-button">
          {is24Hour ? "12-Hour" : "24-Hour"} Mode
        </button>
      </div>
    </div>
  );
};

export default LiveClock;
