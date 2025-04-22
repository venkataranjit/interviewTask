import React, { memo, useState } from "react";

const ReactMemo = () => {
  const [value, setValue] = useState(0);
  console.log("parent component re-rendered");
  return (
    <div>
      <h2>React Memo</h2>
      <button onClick={() => setValue(value + 1)}>Add</button>

      {value}
      <Child name="ranjit" />
    </div>
  );
};

export default ReactMemo;

const Child = memo(function Child(props) {
  console.log("child component re-rendered");
  return (
    <>
      <h2>Child Component</h2>
      {props.name}
    </>
  );
});
