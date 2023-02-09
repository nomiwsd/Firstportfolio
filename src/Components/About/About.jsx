import React from 'react'
import { FaSuitcase, FaHeadphonesAlt } from 'react-icons/fa';
import { MdOutlineLoyalty, MdCardTravel, MdOndemandVideo, MdSportsSoccer } from 'react-icons/md'
import { CgCoffee } from 'react-icons/cg'
import { AiOutlineCalendar } from 'react-icons/ai'

import "./About.css"
function About() {
  return (
    <div className='countersection' id='Aboutsect'>
      <div className='container py-5'>
        <div className="row m-0 p-0">
          <div className="col-md-3 col-12 d-flex justify-content-center align-items-center text-light mb-3">
            <div className='icondiv col-4 col-md-6 col-lg-4'><FaSuitcase className='icons text-white' />
            </div>
            <div className="text col-8 col-md-6">
              <strong className="number" data-number="750">750</strong>
              <br />
              <span className='textcounter'>Project Complete</span>
            </div>
          </div>

          <div className="col-md-3 col-12 d-flex justify-content-center align-items-center text-light mb-3">
            <div className='icondiv col-4 col-md-6 col-lg-4'><MdOutlineLoyalty className='icons  text-white' />
            </div>
            <div className="text col-8 col-md-6 ">
              <strong className="number" data-number="750">568</strong>
              <br />
              <span className='textcounter'>Happy Clients</span>
            </div>
          </div>

          <div className="col-md-3 col-12 d-flex justify-content-center align-items-center text-light mb-3">
            <div className='icondiv col-4 col-md-6 col-lg-4'><CgCoffee className='icons  text-white' />
            </div>
            <div className="text col-8 col-md-6">
              <strong className="number" data-number="750">478</strong>
              <br />
              <span className='textcounter'>Cup of Coffees</span>
            </div>
          </div>

          <div className="col-md-3 col-12 d-flex justify-content-center align-items-center text-light mb-3">
            <div className='icondiv col-4 col-md-6 col-lg-4'><AiOutlineCalendar className='icons  text-white' />
            </div>
            <div className="text col-8 col-md-6">
              <strong className="number" data-number="750">20</strong>
              <br />
              <span className='textcounter'>Years of Experience</span>
            </div>
          </div>
          
        </div> 
        {/* Information Section */}
        <div className="row my-5 m-0 p-0">
          <div className="col-12 col-lg-5">
            <img src="Bg1 (6).jpg" className='col-12' alt="wait for loading" />
          </div>
          <div className="col-12 col-lg-7 py-5">
            <div className="row justify-content-start pb-3 text-white">
              <div className="col-md-12 heading-section">
                <span className="subheading text-start">My Intro</span>
                <h2 className="mb-4 text-start Mainheading">About Me</h2>
                <p className='intro'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <div className='row'>
                  <div className='col-12 d-flex p-0 row justify-content-end mx-1'>
                    <p className='mainhead col-12 col-md-4 m-0 d-flex justify-content-start p-0'>Name:</p>
                    <p className='subinfo col-12 col-md-8 d-flex justify-content-center justify-content-md-start p-0'>Muhammad Nouman</p>
                  </div>
                  <div className='col-12 d-flex p-0 row justify-content-end mx-1'>
                    <p className='mainhead col-12 col-md-4 m-0 d-flex justify-content-start p-0'>Date of Birth:</p>
                    <p className='subinfo col-12 col-md-8 d-flex justify-content-center justify-content-md-start p-0'>07 August 2000</p>
                  </div>
                  <div className='col-12 d-flex p-0 row justify-content-end mx-1'>
                    <p className='mainhead col-12 col-md-4 m-0 d-flex justify-content-start p-0'>Address:</p>
                    <p className='subinfo col-12 col-md-8 d-flex justify-content-center justify-content-md-start p-0'>Punjab,Pakistan</p>
                  </div>
                  <div className='col-12 d-flex p-0 row justify-content-end mx-1'>
                    <p className='mainhead col-12 col-md-4 m-0 d-flex justify-content-start p-0'>Zip Code:</p>
                    <p className='subinfo col-12 col-md-8 d-flex justify-content-center justify-content-md-start p-0'>042050</p>
                  </div>

                  <div className='col-12 d-flex p-0 row justify-content-end mx-1'>
                    <p className='mainhead col-12 col-md-4 m-0 d-flex justify-content-start p-0'>Email:</p>
                    <p className='subinfo col-12 col-md-8 d-flex justify-content-center justify-content-md-start p-0'>nomimalik8051@gmail.com</p>
                  </div>
                </div> 
              </div>
              <div className="my-3">
                <div className="my-interest d-lg-flex w-100 row">
                  <div className=" col-6 col-md-3 interest-wrap d-flex align-items-center mb-3">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <FaHeadphonesAlt className='fs-4' />
                    </div>
                    <div className="text ms-1 me-3 textdf">Music</div>
                  </div>
                  <div className=" col-6 col-md-3 interest-wrap d-flex align-items-center mb-3">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <MdCardTravel className='fs-4' />
                    </div>
                    <div className="text ms-1 me-3 textdf">Travel</div>
                  </div>
                  <div className=" col-6 col-md-3 interest-wrap d-flex align-items-center mb-3">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <MdOndemandVideo className='fs-4' />
                    </div>
                    <div className="text ms-1 me-3 textdf">Movie</div>
                  </div>
                  <div className=" col-6 col-md-3 interest-wrap d-flex align-items-center mb-3">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <MdSportsSoccer className='fs-4' />
                    </div>
                    <div className="text ms-1 me-3 textdf">Sports</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About
