import React, { useRef, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);
  console.log(timerRef);
  const start = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 100);
    }
  };
  const pause = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  const reset = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTime(0);
  };
  return (
    <>
      <h2>Timer</h2>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
      <h5>{time}</h5>
    </>
  );
};

export default Timer;
