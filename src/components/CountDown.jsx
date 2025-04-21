import React, { useEffect, useState } from "react";

const Timer = ({ time, setTime }) => {
  useEffect(() => {
    if (time > 0) {
      const remainingTime = setInterval(() => {
        setTime(time - 1);
      }, 1000);

      return () => clearInterval(remainingTime);
    }
  }, [time]);

  return <>{time > 0 ? <h6>Remaining Time is {time}</h6> : <h6>TimeUp</h6>}</>;
};

const CountDown = () => {
  const [time, setTime] = useState(0);
  return (
    <>
      <h2>Countdown</h2>
      <input type="number" onChange={(e) => setTime(e.target.value)} />
      <Timer time={time} setTime={setTime} />
    </>
  );
};

export default CountDown;
