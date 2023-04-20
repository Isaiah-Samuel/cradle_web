import React from 'react';
import '../styles/LowerNav.css';

function LowerNav() {
  return (
    <div className='div-nav'>
    <nav className="low-navbar">
      <div className="navbar-logo">
        <a href="/"><img src={require("../assets/logo.png")} alt="Your Logo"/></a>
      </div>
      <div className="navbar-links">
        <a href="/">Admissions</a>
        <a href="/">Schools</a>
        <a href="/">About</a>
        <a href="/">Contact Us</a>
      </div>
    </nav>
    </div>
  );
}

export default LowerNav;
