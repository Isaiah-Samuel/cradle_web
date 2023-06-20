import React, { useState } from "react";
import UpperNav from "../Layout/UpperNav";
import Footer from "../Layout/Footer";
import "../styles/Schools.css";
import HighSchool from "../Components/HighSchool";
import Montessori from "../Components/Montessori";

export default function Schools() {
  const [showHighSchool, setShowHighSchool] = useState(true);
  const [showMontessori, setShowMontessori] = useState(false);
  const [isHighSchoolClicked, setIsHighSchoolClicked] = useState(true);
  const [isMontessoriClicked, setIsMontessoriClicked] = useState(false);

  const handleClickHighSchool = () => {
    setShowHighSchool(true);
    setShowMontessori(false);
    setIsHighSchoolClicked(true);
    setIsMontessoriClicked(false);
  };

  const handleClickMontessori = () => {
    setShowHighSchool(false);
    setShowMontessori(true);
    setIsHighSchoolClicked(false);
    setIsMontessoriClicked(true);
  };

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
                <div
                  className={`h-school ${isHighSchoolClicked ? "active" : ""}`}
                  onClick={handleClickHighSchool}
                >
                  <h2>High School</h2>
                </div>
                <div
                  className={`m-school ${isMontessoriClicked ? "active" : ""}`}
                  onClick={handleClickMontessori}
                >
                  <h2>Montessori</h2>
                </div>
              </div>
              {/* ------------------------------------------------div0 */}
              {showHighSchool && <HighSchool />}
              {showMontessori && <Montessori />}
              {/* ------------------------------end last div------- */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
