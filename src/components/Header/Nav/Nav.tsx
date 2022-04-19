import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav: React.FC<Record<string, unknown>> = () => {
  return (
    <div className="navContainer">
      <div className="navContent">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "rgb(255, 85, 0)" : "rgb(48, 44, 136)",
          })}
        >
          HOME
        </NavLink>
        <NavLink
          to="/category"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "rgb(255, 85, 0)" : "rgb(48, 44, 136)",
          })}
        >
          CATEGORY
        </NavLink>
        <NavLink
          to="/cart"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "rgb(255, 85, 0)" : "rgb(48, 44, 136)",
          })}
        >
          CART
        </NavLink>
        <NavLink
          to="/other"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "rgb(255, 85, 0)" : "rgb(48, 44, 136)",
          })}
        >
          OTHER
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
