import React from 'react';
import Slider from 'react-slick';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    swipe: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="https://picsum.photos/600/400?random=1" alt="carousel image 1" />
      </div>
      <div>
        <img src="https://picsum.photos/600/400?random=2" alt="carousel image 2" />
      </div>
      <div>
        <img src="https://picsum.photos/600/400?random=3" alt="carousel image 3" />
      </div>
      <div>
        <img src="https://picsum.photos/600/400?random=4" alt="carousel image 4" />
      </div>
      <div>
        <img src="https://picsum.photos/600/400?random=5" alt="carousel image 5" />
      </div>
    </Slider>
  );
};

export default Carousel;
