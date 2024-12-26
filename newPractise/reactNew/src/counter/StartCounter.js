import React, { useEffect, useState, useRef } from "react";

export const StartCounter = () => {
  const [val, setVal] = useState(0);
  const [paus, setPause] = useState(false);
  const useref = useRef(null);

  const startTimer = () => {
   if(!paus){
    useref.current = setInterval(() => {
        setVal((v) => v + 1);
      }, 1000);
   }
  };

  useEffect(() => {
    startTimer();
    return ()=> clearInterval(useref.current);
  }, []);

  const handleStartAndStop = () => {
    if (!paus) {
      clearInterval(useref.current); // Stop the timer if it's running
    } else {
      startTimer(); // Start the timer if it's paused
    }
    setPause((a) => !a); // Toggle the pause state
  };

  const handleReset = () => {
    clearInterval(useref.current);
    setPause(true);
    setVal(0);
  };

  return (
    <div>
      <h1>StartCounter</h1>
      <p>{val}</p>
      <button onClick={handleStartAndStop}>{paus ? "start" : "stop"}</button>
      <button onClick={handleReset}>resset</button>
    </div>
  );
};
