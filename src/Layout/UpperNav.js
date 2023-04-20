import '../styles/UpperNav.css';
import React from 'react';

function UpperNav(){
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <span>ADMISSIONS ARE ONGOING! Register  your kids for the entrance exams</span>
      </div>
      <div className="navbar__right">
        <a href="/" className="nav-link">Portal</a>
        <h1>|</h1>
        <button>Register</button>
      </div>
    </nav>
  );
};

export default UpperNav;