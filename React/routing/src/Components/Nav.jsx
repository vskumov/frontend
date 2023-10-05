import React from "react";
import { NavLink } from "react-router-dom";
import "../style.css";

function Nav() {
  return (
    <ul className="nav-list container">
      <li className="nav-item">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Products
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Blog
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;

// NavLink
