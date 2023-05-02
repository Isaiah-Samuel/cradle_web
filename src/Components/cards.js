import React from "react";
import SingleCard from "./singleCard";
import img1 from "../assets/l1.png";
import img2 from "../assets/c1.png";
import img3 from "../assets/c2.png";
import img4 from "../assets/c3.png";
import img5 from "../assets/c4.png";
import img6 from "../assets/c5.png";
import img7 from "../assets/c6.png";
import img8 from "../assets/c4.png";
import img9 from "../assets/c3.png";

export default function Cards() {
  const prop = {
    img: [img1, img2, img3, img4, img5, img6, img7, img8, img9],
    title: [
      "Michelle Andrade",
      "Mrs Longe Sonia",
      "Kelly Masterson",
      "Michael Wong",
      "Confidence Odogwu",
      "Samuel Isaiah",
      "Mrs Owumi",
      "Mr Chris",
      "Mr Clement",
      "",
    ],
    text: [
      "English, Spanish",
      "Deputy Head Teacher",
      "French, English, Swedish",
      "Deputy Head Teacher",
      "Computer",
      "IT Expert",
      "Physics Teacher",
      "Chemistry Teacher",
      "Mathematics Teacher",
    ],
  };

  return (
    <div style={{marginLeft:'10vw',marginRight:'10vw',zIndex:1, marginBottom:0}}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SingleCard
          image={prop.img[4]}
          title={prop.title[0]}
          text={prop.text[0]}
        />
        <SingleCard
          image={prop.img[1]}
          title={prop.title[1]}
          text={prop.text[1]}
        />
        <SingleCard
          image={prop.img[2]}
          title={prop.title[2]}
          text={prop.text[2]}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginBottom:0 }}>
        <SingleCard
          image={prop.img[3]}
          title={prop.title[3]}
          text={prop.text[3]}
        />
        <SingleCard
          image={prop.img[4]}
          title={prop.title[4]}
          text={prop.text[4]}
        />
        <SingleCard
          image={prop.img[5]}
          title={prop.title[5]}
          text={prop.text[5]}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SingleCard
          image={prop.img[6]}
          title={prop.title[6]}
          text={prop.text[6]}
        />
        <SingleCard
          image={prop.img[7]}
          title={prop.title[7]}
          text={prop.text[7]}
        />
        <SingleCard
          image={prop.img[8]}
          title={prop.title[8]}
          text={prop.text[8]}
        />
      </div>
    </div>
  );
}
