import React from 'react';
import {useRef, useEffect, useState  } from 'react';
import { motion } from 'framer-motion';

import images from "./images";
import "../scss/_framerSlider.scss";

export const FramerSlider = () =>{
   const[width, setWidth] = useState(0);
   const carousel = useRef();
   
   useEffect(() =>{
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
   }, []);

    return(
      <div className='container my-5'>
         <h2 className='mb-3'> Framer motion Slider </h2>   
         <motion.div ref={carousel} className='carousel'>
            <motion.div drag="x" dragConstraints={{ right:0, left: -width }} className='inner-carousel'>
               {images.map(image => {
                  return(
                  <motion.div className='item' key={image}>
                     <img src={image} alt=""/>
                  </motion.div>
                  );
               })}
            </motion.div>
         </motion.div>
      </div>
    ); 
}


