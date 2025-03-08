import React from 'react';
import './Header.css';
import logo from '../assets/animated-logo.gif';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav">
        <a href="#about">About</a>
        <span className="separator"> | </span>
        <a href="#skills">Skills</a>
        <span className="separator"> | </span>
        <a href="#experience">Experience</a>
        <span className="separator"> | </span>
        <a href="#contact">Contact</a>
      </nav>
      <div className="social">
        <a href="https://github.com/Ralfessoun" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/ralfy/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </header>
  );
}

export default Header;