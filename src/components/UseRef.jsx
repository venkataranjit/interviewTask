import React, { useRef } from "react";

const UseRef = () => {
  const title = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title.current.value);
  };

  return (
    <div>
      <h2>Use Ref</h2>
      <form onSubmit={submitHandler}>
        <input type="text" ref={title} />
        <button type="submit">Submit</button>
      </form>
      input: {title.current.value}
    </div>
  );
};

export default UseRef;
