import React from 'react';
import './styles.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SliderOne from './../../assets/images/slider1.jpg';
import SliderTwo from './../../assets/images/slider2.jpg';
import SliderThree from './../../assets/images/slider3.jpg';

const Slider = () => {
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
    >
      <div>
        <img src={SliderOne} alt="Slider 1" />
        <p className="slider-text slider-text-1">Агентування суден</p>
      </div>
      <div>
        <img src={SliderTwo} alt="Slider 2" />
        <p className="slider-text slider-text-2">Технічне обслуговування</p>
      </div>
      <div>
        <img src={SliderThree} alt="Slider 3" />
        <p className="slider-text slider-text-3">Митне оформлення</p>
      </div>
    </Carousel>
  );
};

export default Slider;
