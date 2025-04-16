import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul className="navul">
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/radio">Radio</Link>
        </li>
        <li>
          <Link to="/checkbox">Check Box</Link>
        </li>
        <li>
          <Link to="/checkbox2">Check Box2</Link>
        </li>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
        <li>
          <Link to="/btntoggle">Button Toggle</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
