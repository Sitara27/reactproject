import React, { useState } from 'react';
import { FaSearch, FaCartArrowDown, FaBars } from "react-icons/fa";
import './Header.css';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="container-fluid" id='navbar'>
        <NavLink className="navlinks">
          <div className="logo">
            EduLearns
          </div>

          <div className={`links ${menuOpen ? 'open' : ''}`}>
            <Link to='/' onClick={toggleMenu}>Home</Link>
            <Link to='about' onClick={toggleMenu}>About</Link>
            <Link to='blog' onClick={toggleMenu}>Blog</Link>
            <Link to='contact' onClick={toggleMenu}>Contact</Link>
          </div>

          <div className="sideLink">
            <p><FaSearch /></p>
            <p><FaCartArrowDown /></p>
            <button>Subscribe</button>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            <FaBars />
          </div>
        </NavLink >
      </div>
    </>
  );
};

export default Header;
