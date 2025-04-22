import React, { useState } from "react";
import CounterContext from "../hooks/CounterContext";

const ParentCounterContext = ({ children }) => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    setCount(count - 1);
  };
  return (
    <>
      <CounterContext.Provider value={{ count, inc, dec }}>
        {children}
      </CounterContext.Provider>
    </>
  );
};

export default ParentCounterContext;
