import React from "react";
import LowerNav from "./LowerNav";
import UpperNav from "./UpperNav";
import Text from "../Components/T_text";
import "../styles/PageTop.css";
function PageTop() {

  const msg = {
    text:"Welcome To Cradle School",
    ptext:<p>We are a thriving educational community of pupils and students whose parents and guardians have made a decision for their children/wards to study here for specific reasons: well-trained staff,intensive   curriculum and a stimulating learning environment.</p>,
    color:"#0B0746",
    pcolor:"#0B0746",
    fontSize:"74px",
    pfontSize:"34px",
    textAlign:"center",
    marginTop:'5%',
    paddingTop:'5%',
    paddingBottom:'3%',
    marginBottom:'3%'
  }

  return (
    <>
      <UpperNav />
      <div className="f-body">
        <LowerNav />

        <div className="pics">
          <div className="left-pane">
            <img src={require("../assets/l1.png")} alt="pic here" />
            <img src={require("../assets/l2.png")} alt="pic here" />
          </div>

          {/* Middle Pane */}
          <div className="mid-pane">
            <div className="mid-top">
              <img src={require("../assets/md01.png")} alt="pic here" />
              <img src={require("../assets/md02.png")} alt="pic here" />
            </div>

            <div className="mid-mid">
              <img src={require("../assets/Cradle_logo.png")} alt="pic here" />
            </div>

            <div className="mid-bottom">
              <img src={require("../assets/md03.png")} alt="pic here" />
              <img src={require("../assets/md04.png")} alt="pic here" />
            </div>
          </div>

          {/* right pane */}
          <div className="right-pane">
            <img src={require("../assets/r1.png")} alt="pic here" />
            <img src={require("../assets/r2.png")} alt="pic here" />
          </div>
        </div>

        <Text
          text={msg.text}
          ptext={msg.ptext}
          color={msg.color}
          pcolor={msg.pcolor}
          fontSize={msg.fontSize}
          pfontSize={msg.pfontSize}
          textAlign={msg.textAlign}
          marginTop= {msg.marginTop}
          paddingTop = {msg.paddingTop}
          paddingBottom = {msg.paddingBottom}
          marginBottom= {msg.marginBottom}
          // color:pcolor,fontSize:pfontSize,alignSelf : palignText, pwidth
        />
      </div>
    </>
  );
}

export default PageTop;
