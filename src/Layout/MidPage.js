import React from "react";
import Text from "../Components/T_text";
// import SlideCards from "../Components/SliderCards";
import Carousel from "../Components/Carousell";
import Cards from "../Components/cards";

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
    fontSize: "64px",
    pfontSize: "34px",
    textAlign: "center",
    marginBottom: "3%",
    paddingTop: "3%",
    paddingBottom: "30px",
  };

  const msg2 = {
    text: "The Teaching Staff",
    ptext: (
      <p>
        High professional and well-trained teachers with years of experience
      </p>
    ),
    color: "#ffff",
    pcolor: "white",
    fontSize: "6  4px",
    pfontSize: "34px",
    textAlign: "center",
    marginBottom: "3%",
    paddingTop: "3%",
    paddingBottom: "30px",
    marginTop:'10%',
  };

  return (
    <div className="middle" style={{ background: "#05022B",height: 'fitContent', padding:'auto',  position:'relative'}}>
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

      <Carousel/> 

      <Text
          text={msg2.text}
          ptext={msg2.ptext}
          color={msg2.color}
          pcolor={msg2.pcolor} 
          fontSize={msg2.fontSize}
          pfontSize={msg2.pfontSize}
          textAlign={msg2.textAlign}
          marginTop={msg2.marginTop}
          marginBottom={msg2.marginBottom}
          paddingTop={msg2.paddingTop}
          paddingBottom={msg2.marginBottom}
          // color:pcolor,fontSize:pfontSize,alignSelf : palignText, pwidth
        />
     
    {/* <Cards zindex='10' background={cardinfo.bg} name='Michelle Andrade' subject='English, Spanish'/> */}

    <Cards/>
      
    </div>
  );
}

export default MidPage;
