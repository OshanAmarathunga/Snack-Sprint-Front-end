import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { topMeel } from './TopMeel';
import CarousalItem from './CarousalItem';
const settings={
    dots:true,
    infinite:true,
    speed:500,
    slidesToShow:3,
    slidesToScroll:3,
    autoplay:true,
    autoplaySped:2000,
    arrows:true
};
const MultiitemCarousel = () => {
  return (
    <div>
        <Slider {...settings}>
            {topMeel.map((item)=>
            <CarousalItem image={item.image} title={item.title}/>
            )}
        </Slider>
    </div> 55:31
  )
}

export default MultiitemCarousel