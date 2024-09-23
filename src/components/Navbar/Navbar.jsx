import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="menu">
      <div className="logo">
        <span><a href="#" className='animate__zoomOutDown'>R</a>omaric Tolofon</span>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li onClick={() => setMenuOpen(false)}><a href="#">Home</a></li>
        <li onClick={() => setMenuOpen(false)}><a href="#">About</a></li>
        <li onClick={() => setMenuOpen(false)}><a href="#">Contact</a></li>
      </ul>
    </section>
  );
};

export default Navbar;



