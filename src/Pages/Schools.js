import React, { useState } from "react";
import Footer from "../Layout/Footer";
import "../styles/Schools.css";
import HighSchool from "../Components/HighSchool";
import Montessori from "../Components/Montessori";
import DropdownButton from "../Components/DropdownButton";

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

  // -------------un comment this----------------

  // const handleClickMontessori = () => {
  //   setShowHighSchool(false);
  //   setShowMontessori(true);
  //   setIsHighSchoolClicked(false);
  //   setIsMontessoriClicked(true);
  // };

  return (
    <div className="Schools">
      {/* <UpperNav /> */}

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
                {/* <a href="/"><button style={{backgroundColor:'#464590'}}>Sign In</button></a> */}
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
                // -------------------- disabled montessori----------------
                // --------uncomment to enable-----------------

                  className={`m-school ${isMontessoriClicked ? "active" : ""}`}
                  // onClick={handleClickMontessori}
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
