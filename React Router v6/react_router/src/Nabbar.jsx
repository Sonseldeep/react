import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
const Nabbar = () => {
  return (
    <>
      {
        // note: if wer use <a href = "/"> </a> then our complete page will reload
        /* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul> */
        // to style in the Nav we use NavLink instead of Link
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "red" : "",
                };
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "red" : "",
                };
              }}
            >
              {" "}
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "red" : "",
                };
              }}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/post/mobile"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "red" : "",
                };
              }}
            >
              Post
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/post/mobile/1"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "red" : "",
                };
              }}
            >
              Post With Id
            </NavLink>
          </li>
        </ul>
      }
    </>
  );
};

export default Nabbar;
