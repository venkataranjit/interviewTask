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
        <li>
          <Link to="/fetchapi">Fetch Api</Link>
        </li>
        <li>
          <Link to="/dropdown">Dropdown</Link>
        </li>
        <li>
          <Link to="/tabs">Tabs</Link>
        </li>
        <li>
          <Link to="/modal">Modal</Link>
        </li>
        <li>
          <Link to="/slider">Slider</Link>
        </li>
        <li>
          <Link to="/starrating">Star Rating</Link>
        </li>
        <li>
          <Link to="/multistep">Multi Step</Link>
        </li>
        <li>
          <Link to="/virtuallist">Virtualized List</Link>
        </li>
        <li>
          <Link to="/tododragable">Dragabble Todo List</Link>
        </li>
        <li>
          <Link to="/countdown">CountDown</Link>
        </li>
        <li>
          <Link to="/cusomehook">Custom Hook</Link>
        </li>
        <li>
          <Link to="/timer">Timer</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/formik">Formik</Link>
        </li>
        <li>
          <Link to="/useref">useRef</Link>
        </li>
        <li>
          <Link to="/reactmemo">React Memo</Link>
        </li>
        <li>
          <Link to="/usecontext">Use Context</Link>
        </li>
        <li>
          <Link to="/sample">Sample Page</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
