import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

 
  return (
    <section className="menu">
      <div className="logo">
        <span><a href="#" className='animate__zoomOutDown'>R</a>omaric Tolofon</span>
      </div>


      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li onClick={() => setMenuOpen(false)}><a href="#header">Home</a></li>
        <li onClick={() => setMenuOpen(false)}><a href="#about">About</a></li>
        <li onClick={() => setMenuOpen(false)}><a href="#contact">Contact</a></li>
      </ul>
    </section>
  );
};

export default Navbar;



