import React from 'react'
import { FaSuitcase,FaHeadphonesAlt } from 'react-icons/fa';
import { MdOutlineLoyalty,MdCardTravel,MdOndemandVideo,MdSportsSoccer } from 'react-icons/md'
import { CgCoffee } from 'react-icons/cg'
import { AiOutlineCalendar } from 'react-icons/ai'

import "./About.css"
function About() {
  return (
    <div className='countersection'>
      <div className='container py-5'>
        <div className="row">
          <div className="col-3 d-flex justify-content-center align-items-center gap-2 text-light">
            <div className='icondiv'><FaSuitcase className='fs-2 text-white' /></div>
            <div className="text">
              <strong className="number" data-number="750">750</strong>
              <br />
              <span className='textcounter'>Project Complete</span>
            </div>
          </div>
          <div className="col-3 d-flex justify-content-center align-items-center gap-2 text-light">
            <div className='icondiv'><MdOutlineLoyalty className='fs-2 text-white' /></div>
            <div className="text">
              <strong className="number" data-number="568">568</strong>
              <br />
              <span className='textcounter'>Happy Clients</span>
            </div>
          </div>
          <div className="col-3 d-flex justify-content-center align-items-center gap-2 text-light">
            <div className='icondiv'><CgCoffee className='fs-2 text-white' /></div>
            <div className="text">
              <strong className="number" data-number="478">478</strong>
              <br />
              <span className='textcounter'>Cups of Coffee</span>
            </div>
          </div>
          <div className="col-3 d-flex justify-content-center align-items-center gap-2 text-light">
            <div className='icondiv'><AiOutlineCalendar className='fs-2 text-white' /></div>
            <div className="text">
              <strong className="number" data-number="5">5</strong>
              <br />
              <span className='textcounter'>Years of Experience</span>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-5">
            <img src="Bg1 (1).jpg" className='col-8' alt="wait for loading" />
          </div>
          <div className="col-7 py-5">
<div className="row justify-content-start pb-3">
<div className="col-md-12 heading-section">
<span className="subheading text-start">My Intro</span>
<h2 className="mb-4 text-start Mainheading">About Me</h2>
<p className='intro'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
<table>
  <tr>
    <th className='mainhead'>Name:</th>
    <td className='subinfo px-3'>Muhammad Nouman</td>
  </tr>
  <tr>
    <th className='mainhead'>Date of Birth:</th>
    <td className='subinfo px-3'>07 August 2000</td>
  </tr>
  <tr>
    <th className='mainhead'>Address:</th>
    <td className='subinfo px-3'>Punjab,Pakistan</td>
  </tr> 
  <tr>
    <th className='mainhead'>Zip Code:</th>
    <td className='subinfo px-3'>042050</td>
  </tr>
  
  <tr>
    <th className='mainhead'>Email:</th>
    <td className='subinfo px-3'>nomimalik8051@gmail.com</td>
  </tr>
</table>
</div>
<div className="col-md-12 my-3">
<div className="my-interest d-lg-flex w-100">
<div className="interest-wrap d-flex align-items-center">
<div className="icon d-flex align-items-center justify-content-center">
<FaHeadphonesAlt className='fs-4'/>
</div>
<div className="text ms-1 me-3 textdf">Music</div>
</div>
<div className="interest-wrap d-flex align-items-center">
<div className="icon d-flex align-items-center justify-content-center">
<MdCardTravel className='fs-4'/>
</div>
<div className="text ms-1 me-3 textdf">Travel</div>
</div>
<div className="interest-wrap d-flex align-items-center">
<div className="icon d-flex align-items-center justify-content-center">
<MdOndemandVideo className='fs-4'/>
</div>
<div className="text ms-1 me-3 textdf">Movie</div>
</div>
<div className="interest-wrap d-flex align-items-center">
<div className="icon d-flex align-items-center justify-content-center">
<MdSportsSoccer className='fs-4'/>
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
