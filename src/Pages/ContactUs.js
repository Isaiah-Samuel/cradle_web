import React from "react";
import MidNav from "../Components/MidNav";
import "../styles/ContactUs.css";
import Footer from '../Layout/Footer'
import Form from "../Components/Form";

export default function ContactUs() {
  const info = {
    msg1: "We Want To Hear From You",
    msg2: " Send us a message, give us a call, or come visit us to experience our exceptional service",
  };
  return (
    <div className="contact-us">
      <MidNav msg1={info.msg1} msg2={info.msg2} />
      <div className="Form-area">
      <Form/>
      
      </div>
      <div className="foooter">
      <Footer/>
      </div>
    
    </div>
  );
}
