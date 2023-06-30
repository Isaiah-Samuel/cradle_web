import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LowerNav.css';
import DropdownButton from '../Components/DropdownButton';

function LowerNav() {
  return (
    <div className='div-nav'>
      <nav className="low-navbar">
        <div className="navbar-logo">
          <Link to="/"><img src={require("../assets/logo.png")} alt="Your Logo" /></Link>
        </div>
        <div className="navbar-links">
          <Link to="/admission">Admissions</Link>
          <Link to="/schools">Schools</Link>
          <Link to="/about">About</Link>
          <Link to="/contactus">Contact Us</Link>
          <DropdownButton/>

        </div>
      </nav>
    </div>
  );
}

export default LowerNav;
