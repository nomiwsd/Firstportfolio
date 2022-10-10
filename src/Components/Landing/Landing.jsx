import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Autoplay } from "swiper";

import "./Landing.css"
function Landing() {
    
  return (
    <Swiper
        // style={{
        //   "--swiper-navigation-color": "#fff",
        //   "--swiper-pagination-color": "#fff",
        // }}
        speed={600}
        parallax={true}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        modules={[Parallax,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide style={{
            backgroundImage: `url("Bg1 (2).jpg")`,
            backgroundSize:'cover'
        }}>
            <div className='slidertext'>
          <div className="title">
            Hello! This is Nomi
          </div>
          <div className="subtitle">
            Creative UI/UX Designer & Developer
          </div>
          <div className=" d-flex justify-content-start">
        <button className='hirebtn p-2 mx-3'>Hire Me</button>
        <button className='hirebtn p-2'>Download CV</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{
             backgroundImage: `url("Bg1 (5).jpg")`,
             backgroundSize:'cover'
        }}>
            <div className='slidertext2'>
          <div className="title" >
           We Design & Build Brands
          </div>
          <div className="subtitle">
          Hi, I am Nomi This is my favorite work.
          </div>
          <div className=" d-flex justify-content-start">
        <button className='hirebtn p-2 mx-3'>Hire Me</button>
        <button className='hirebtn p-2'>Download CV</button>
          </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
  )
}

export default Landing
