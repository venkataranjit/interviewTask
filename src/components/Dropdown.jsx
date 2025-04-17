import React, { useState } from "react";

const menu = {
  background: "rgb(153, 153, 153)",
  padding: "5px",
  display: "inline-block",
  width: "200px",
  margin: "0px",
  cursor: "pointer",
};
const span = {
  float: "right",
};
export default function Dropdown() {
  const [show, setShow] = useState(false);
  return (
    <>
      <h2>Dropdown</h2>
      <p style={menu} onClick={() => setShow((prev) => !prev)}>
        Menu <span style={span}>{show ? "\u25BC" : "\u25B2"}</span>
      </p>
      {show && (
        <ul
          style={{
            listStyleType: "none",
            padding: "5px",
            background: "#ccc",
            width: "200px",
            margin: "0px",
          }}
        >
          <li>One</li>
          <li>One</li>
          <li>One</li>
          <li>One</li>
        </ul>
      )}
    </>
  );
}
