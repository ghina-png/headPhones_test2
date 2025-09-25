import React, { useState, useEffect } from 'react';
import "./components/App.css"
const Timer = ({ duration }) => {
  const [time, setTime] = useState(172800000);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => (prev > 0 ? prev - 1000 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (milliseconds) => {
    if (milliseconds <= 0) return "انتهى الوقت!";

    const total_seconds = Math.floor(milliseconds / 1000);
    const total_minutes = Math.floor(total_seconds / 60);
    const total_hours = Math.floor(total_minutes / 60);
    const days = Math.floor(total_hours / 24);

    const seconds = total_seconds % 60;
    const minutes = total_minutes % 60;
    const hours = total_hours % 24;

    return` ${days}: ${hours}: ${minutes}: ${seconds}`;
  };

  return (
    <div className='tim f-f'>
      <p>{formatTime(time)}</p>
    </div>
  );
};

export default Timer;