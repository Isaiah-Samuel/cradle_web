import React from "react";
import "../styles/bottomPage.css";
// import img from '../assets/r1.png';

export default function SideCard() {
  return (
    <div className="side-card">
      <div className="sd-left">
        <img src={require("../assets/r1.png")} alt="pic here" />
      </div>

      <div className="sd-right">
            <div className="sd-right-top">
                <p>2 min to read</p>
                <h6>News Headline ...</h6>
            </div>

            <div className='sd-right-bottom'>
                <div className="red-circle"></div>
                <div>
                    <h6>Author</h6>
                    <h6>01 Feb 2023</h6>
                </div>
            </div>
      </div>
    </div>
  );
}
