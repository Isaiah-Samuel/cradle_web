import React from "react";
import "../styles/MidNav.css";
import DropdownButton from "./DropdownButton";

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
            <a href="/admission">Admissions</a>
            <a href="/schools">Schools</a>
            <a href="/about">About</a>
            <a href="/contactus">Contact Us</a>
            <DropdownButton/>
            {/* <a href="/"><button style={{backgroundColor:'#464590'}}>Sign In</button></a> */}
          </div>
        </nav>

        <div style={{ textAlign:'center',margin:'auto',color:'white' }} className="textop">
         
          <h1 style={{ color: "white"}}>{msg1}</h1>
          <h3 style={{ color: "white", marginTop:'3%'  }}>{msg2}</h3>
        </div>
      </div>
    </div>
  );
}
