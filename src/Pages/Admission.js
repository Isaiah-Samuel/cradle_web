import React from "react";
// import UpperNav from "../Layout/UpperNav";
import Footer from "../Layout/Footer";
// import UNavContainer from "../Components/UNavContainer";
// import LowerNav from "../Layout/LowerNav";
import DropdownButton from "../Components/DropdownButton";
import "../styles/admission.css";

export default function Admission() {
  return (
    <div className="admission">
    <div className="topest">
      <div className="top-contain">
        <div className="top-inner-top-contain">
          <nav className="low-navbar">
            <div className="navbar-logo">
              <a href="/">
                <img src={require("../assets/logo.png")} alt="Your Logo" />
              </a>
            </div>
            <div className="navbar-links">
              <a href="/admission">Admissions</a>
              <a href="/schools">Schools</a>
              <a href="/about">About</a>
              <a href="/contactus">Contact Us</a>
              <DropdownButton/>
              {/* <a href="http://cradlehighportal.etslportal.com/admin"><button style={{backgroundColor:'#464590', borderRadius:'3px'}}>Sign In</button></a> */}
            </div>
          </nav>
          {/* <LowerNav/> */}
          <div className="adm-text">
            <h1>Cradle High Admission Requirement </h1>
          </div>
          <div className="requirements">
           <ol>
              <li><p>Purchase the school form</p></li>
              <li><p>Send the evidence of payment to required email</p></li>
              <li><p>Fill the form and submit</p></li>
              <li><p>Sit for the school entrance examination</p></li>
              <li><p>Result will be sent to parent if child is successful</p></li>
              <li><p>Email admission letter, statement of fees, list of requirements and code of conduct to parents</p></li>
              <li><p>Pay school fees by date stated in the letter</p></li>
              <li><p>Send evidence of payment to the required email</p></li>
              <li><p>Give the students books uniform and other required items</p></li>
              <li><p>Assign the students to a class</p></li>
            </ol>

          </div>

          ``
          
        </div>
      </div></div>
      <Footer/>
    </div>
  );
}
