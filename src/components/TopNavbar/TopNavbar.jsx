import "./TopNavbar.css";
import React from "react";

import haleetech from "../../assets/Helletech.png";
import Avatar from "../Avatar/Avatar";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <nav className="topnavbar-container">
      <Link to="/dashboard" className="topnavbar-logo-container">
        <img src={haleetech} alt="haleetech-logo" width="250px" height="60px" />
      </Link>
      <Avatar />
    </nav>
  );
};

export default TopNavbar;
