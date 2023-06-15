import React from "react";
import UpperNav from "../Layout/UpperNav";
import Footer from "../Layout/Footer";
import "../styles/Schools.css";

export default function Schools() {
  return (
    <div className="Schools">
      <UpperNav />

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
                <a href="/">Admissions</a>
                <a href="/">Schools</a>
                <a href="/">About</a>
                <a href="/">Contact Us</a>
              </div>
            </nav>
            <div className="requirement">
              <div className="t-school">
                <div className="h-school">
                    <h2>High School </h2>
                </div>
                <div className="m-school">
                    <h2>Montessori </h2>
                </div>
              </div>
              <div className="requirement-main">
                <h1>Cradle High School is an <br/> exceptional educational <br/>institution </h1>
              </div>
            </div>
            ``
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
