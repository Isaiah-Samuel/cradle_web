import React from "react";
import "../styles/MidNav.css";

export default function MidNav(props) {
  const { msg1, msg2 } = props;
  return (
    <div className="mid-nav">
      <div className="mid-div-nav">
        <nav className="mid-low-navbar">
          <div className="mid-navbar-logo">
            <a href="/">
              <img src={require("../assets/logo.png")} alt="Your Logo" />
            </a>
          </div>
          <div className="mid-navbar-links">
            <a href="/">Admissions</a>
            <a href="/">Schools</a>
            <a href="/">About</a>
            <a href="/">Contact Us</a>
          </div>
        </nav>

        <div style={{ textAlign:'center',margin:'auto',color:'white' }} className="textop">
          <h1>sammy</h1>
          <h3>kjhgkjl</h3>
          <h1 style={{ color: "white" }}>{msg1}</h1>
          <h3 style={{ color: "white" }}>{msg2}</h3>
        </div>
      </div>
    </div>
  );
}
