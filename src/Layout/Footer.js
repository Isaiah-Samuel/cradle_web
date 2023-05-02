import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div
      style={{
        color: "white",
        backgroundColor: "#05022B",
        alignItems: "center",
        display: "flex",
        height: "65vh",
      }}
    >
      <div className="f-lft">
        <div style={{ width: "40%", height: "40%" }}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={require("../assets/Cradle_logo.png")}
            alt="pic here"
          />
        </div>{" "}
        <p>
          The Cradle Schools has emerged to be the most sought-after educational
          institution, raising scholars to be champions in the 21st century;
          thus, employing quality educational systems, strategies, and
          methodologies that will support and influence their lives beyond the
          four walls of the school.
        </p>
      </div>
      {/* ------------------------------------------------ */}
      <div className="f-mid">
        <h3>Contact Information</h3>
        <br />
        <p>
          <b>Address:</b>
          <br /> Plot 37871, Godwin Abbey Way (The Limit Road), Off Ugbor
          Village Road, Benin-City, Edo State
        </p>
        <p>
          <b>Phone:</b> <br />
          High School - +234 806-748-1587 Montessori - +234 818-420-2517
        </p>
        <p>
          <b>Email:</b>
          <br /> enquiry@thecradleschool.ng
        </p>
      </div>
      {/* -------------------------------------------------------- */}
      <div className="f-rght">
        <div className="socials">
        <div style={{width:'70%',height:'auto'}}><img
            style={{ width: "100%", height: "100%" }}
            src={require("../assets/in.png")}
            alt="pic here"
          /></div>


          <div style={{width:'70%',height:'auto'}}><img
            style={{ width: "100%", height: "100%" }}
            src={require("../assets/fb.png")}
            alt="pic here"
          /></div>

            <div style={{width:'70%',height:'auto'}}><img
            style={{ width: "100%", height: "100%" }}
            src={require("../assets/twt.png")}
            alt="pic here"/></div>
        </div>
      </div>
    </div>
  );
}
