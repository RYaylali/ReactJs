import React from "react";
import logo from "../assets/amblem.jfif";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <img src={logo} alt="" />
        <div className="mainLink">
          <Link to="/">Anasayfa</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">Hakkımızda</Link>
          <Link to="/contact">İletişim</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
