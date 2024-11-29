import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/planets">Planetas</Link></p>
      </ul>
    </nav>
  );
};

export default Navbar;