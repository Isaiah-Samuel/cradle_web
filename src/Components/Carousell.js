import React from "react";
import SlideCards from "./SliderCards";
import Carousel from "react-bootstrap/Carousel";

import image1 from "../assets/card-img1.png";
import image2 from "../assets/cardImg1.png";
import image3 from "../assets/cardImg2.png";
import image4 from "../assets/cardImg3.png";

export default function Carousell() {
  return (
    <div>
      <Carousel>
        <Carousel.Item> 
          <SlideCards image={image1} />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <SlideCards rowreverse={true} image={image2} />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <SlideCards image={image3} />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <SlideCards image={image4} />
          <Carousel.Caption>
            {/* <h3>Fourth slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

