import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="mainNav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/aboutUs">AboutUs</NavLink>
      <NavLink to="/history">History</NavLink>
    </nav>
  );
}
