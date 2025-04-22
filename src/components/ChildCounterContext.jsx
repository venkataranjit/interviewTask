import React, { useContext } from "react";
import CounterContext from "../hooks/CounterContext";

const ChildCounterContext = () => {
  const { count, inc, dec } = useContext(CounterContext);
  return (
    <div>
      {count}
      <button onClick={dec}>Dec</button>
      <button onClick={inc}>Inc</button>
    </div>
  );
};

export default ChildCounterContext;
