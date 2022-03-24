import React from 'react';
import Slider from "react-slick";

import { Card } from './card';

import '../scss/_slider.scss';
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

export const SlickSlider = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      
    return(
        <div className='container'>
        <h2> Slick Slider </h2>
        <Slider {...settings} className="justify-content-center">
         <Card
            topBadge="Open"
            eventName="Delhi Events 2022"
            description="A small description"
            importance="Important"
            image="https://images.unsplash.com/photo-1609670289875-590e8ec05c88?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYXl1biUyMHRvbWJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
          />
          <Card
            topBadge="Restrictions"
            eventName="Top Places to visit in Maldives"
            description="A small description"
            importance="Important"
            image="https://i.pinimg.com/originals/69/a9/03/69a903b2cf045051155a02242419d38e.jpg"
          />
          <Card
            topBadge="Covid Travel updates"
            eventName="Option without description goes here"
            importance="2 mins read"
            image="https://media.gettyimages.com/photos/illuminated-saint-nicholas-church-against-clear-sky-at-dusk-picture-id556947553?s=612x612"
          />
          <Card
            topBadge="Open"
            eventName="Delhi Events 2022"
            description="A small description"
            importance="2 mins read"
            image="https://static.wixstatic.com/media/nsplsh_626f79585a667170777055~mv2_d_5379_3585_s_4_2.jpg/v1/fill/w_602,h_480,al_c,q_80,usm_0.66_1.00_0.01/Image%20by%20Simon%20Matzinger.webp"
          />
        </Slider>
      </div>
    )
}
