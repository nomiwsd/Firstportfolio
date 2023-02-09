import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination,Autoplay  } from "swiper";

import './Projects.css'
function Projects() {
  return (
    <div className='projects pb-5' id='ProjectsSect'>
      <div className='projectsect'>
        <div className='container  d-flex'>
          <div className="row">
            <div className="col-lg-8 col-12 py-5 text-white">

              <h2 className='text-start'>Have a project on your mind.</h2>
              <p className='text-start'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly.</p>
              <div className='d-flex justify-content-start'> <button className='hirebtn p-2'>Contact Me</button>
              </div>
            </div>
            <img src="idea2.jpg" className="col-lg-4 col-12" alt="" /> 
          </div>

           </div>
      </div>
      <div class="col-md-12 heading-section text-center text-white py-5">
        <span class="subheading text-center">Accomplishments</span>
        <h2 class="mb-4 Mainheading">My Projects</h2>
        <p className='intro'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
      </div>
      <Swiper
        speed={600}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay ]}
        className="mySwiper2 projectswiper my-5"
      >
        <SwiperSlide className='sliderswiper col-md-10 projectimg shadow d-flex justify-content-center align-items-center' style={{backgroundImage:`url('Stablefunf.jpg')`,
      backgroundSize:'cover'}}>
        <div class="overlay">
        <div class="overlaytext text-center p-4"><a href="https://finalstablefundsite.netlify.app/">Stable Fund</a></div>
       </div>  
          
        
        </SwiperSlide>
        <SwiperSlide className='sliderswiper col-md-10 projectimg shadow d-flex justify-content-center align-items-center' style={{backgroundImage:`url('WHE.jpg')`,
      backgroundSize:'cover'}}>
        <div class="overlay">
        <div class="overlaytext text-center p-4"><a href="https://whefinalsite.netlify.app/">WHE NFT</a></div>
       </div>  
          
        
        </SwiperSlide>
        <SwiperSlide className='sliderswiper col-md-10 projectimg shadow d-flex justify-content-center align-items-center' style={{backgroundImage:`url('Posduck.jpg')`,
      backgroundSize:'cover'}}>
        <div class="overlay">
        <div class="overlaytext text-center p-4"><a href="https://finalposduck.netlify.app/">POS Duck</a></div>
       </div>  
          
        
        </SwiperSlide>
      
      </Swiper>
     
    </div>
  )
}

export default Projects
