import React, { useState } from "react";

const ToggleBtn = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <h2>Toggle Button</h2>
      <button onClick={toggleHandler}>{toggle ? "Off" : "On"}</button>
      <p>{toggle ? "Currently On" : "Currently Off"}</p>
    </>
  );
};

export default ToggleBtn;
