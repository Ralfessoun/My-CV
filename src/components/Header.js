import React from 'react';
import './Header.css';
import SignatureAnimation from './SignatureAnimation';

function Header() {
  return (
    <header className="header">
      <div className="logo"><SignatureAnimation/></div>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
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