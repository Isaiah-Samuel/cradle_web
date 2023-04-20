import React from "react";
import Text from "../Components/T_text";
import Cards from "../Components/SliderCards";
// import Carousel from "../Components/Carousel";
function MidPage() {
  const msg = {
    text: "What we offer",
    ptext: (
      <p>
        We Offer quality education for your child, with our high-skill and
        qualified teachers
      </p>
    ),
    color: "#ffff",
    pcolor: "white",
    fontSize: "74px",
    pfontSize: "34px",
    textAlign: "center",
    marginBottom: "3%",
    paddingTop: "3%",
    paddingBottom: "30px",
  };
  return (
    <div className="middle" style={{ background: "#05022B",height: '100vh', padding:'auto'}}>
      <Text
        text={msg.text}
        ptext={msg.ptext}
        color={msg.color}
        pcolor={msg.pcolor}
        fontSize={msg.fontSize}
        pfontSize={msg.pfontSize}
        textAlign={msg.textAlign}
        marginTop={msg.marginTop}
        marginBottom={msg.marginBottom}
        paddingTop={msg.paddingTop}
        paddingBottom={msg.marginBottom}
        // color:pcolor,fontSize:pfontSize,alignSelf : palignText, pwidth
      />

      {/* <Carousel/> */}
      <Cards />
    </div>
  );
}

export default MidPage;
