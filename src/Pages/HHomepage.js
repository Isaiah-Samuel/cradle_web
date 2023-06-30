import React from 'react';
import '../styles/HHomepage.css';
import IndividualIntervalsExample from '../Components/carousells';
import DropdownButton from '../Components/DropdownButton';

export default function HHomepage() {
  return (
    <div>
        {/* ------------navbar--------------------- */}
      <nav className="navvbar">
        <div className="left-navbar-logo">
          <a href="/">
            <img src={require("../assets/logo.png")} alt="Your Logo" />
          </a>
        </div>

        {/* ---------------- right navbars-------------------- */}
        <div className="right-navbars">
          {/* ------------upper div----------- */}
          <div className="contain-float-right">
                <a href="/admission">COMMUNITY</a>
                <a href="/schools">ATHLETICS</a>
                <a href="/about">CALENDAR</a>
                <a href="/contactus">EMPLOYMENT</a>
          </div>

          {/* -------------lower nav--------------- */}
          <div className="lower-contain-nav">
            <a href="/admission">ADMISSIONS</a>
            <a className="slash" href="/admission">
              /
            </a>
            <a href="/schools">SCHOOLS</a>
            <a className="slash">/</a>
            {/* <a className="current" href="/admission">
              CURRENT STUDENTS
            </a> */}
            {/* <a className="slash" href="/admission">
              /
            </a> */}
            <a href="/about">ABOUT</a>
            <a className="slash" href="/admission">
              /
            </a>
            <a href="/contactus">CONTACT US</a>
            <DropdownButton />
          </div>
        </div>
      </nav>
{/* --------------------------------------------------------- */}
      <div className='carousel-cards'>
        <IndividualIntervalsExample/>
    </div>
    </div>
  );
}
