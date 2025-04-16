import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount((prev) => prev + 1);
  };
  const dec = () => {
    count !== 0 && setCount((prev) => prev - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <h2>Counter</h2>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <h5>{count}</h5>
    </>
  );
};

export default Counter;
