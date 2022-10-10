import React from 'react'
import { FaSuitcase } from 'react-icons/fa';
import { MdOutlineLoyalty } from 'react-icons/md'
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
            <div class="text">
              <strong class="number" data-number="750">750</strong>
              <br />
              <span className='textcounter'>Project Complete</span>
            </div>
          </div>
          <div className="col-3 d-flex justify-content-center align-items-center gap-2 text-light">
            <div className='icondiv'><MdOutlineLoyalty className='fs-2 text-white' /></div>
            <div class="text">
              <strong class="number" data-number="568">568</strong>
              <br />
              <span className='textcounter'>Happy Clients</span>
            </div>
          </div>
          <div className="col-3 d-flex justify-content-center align-items-center gap-2 text-light">
            <div className='icondiv'><CgCoffee className='fs-2 text-white' /></div>
            <div class="text">
              <strong class="number" data-number="478">478</strong>
              <br />
              <span className='textcounter'>Cups of Coffee</span>
            </div>
          </div>
          <div className="col-3 d-flex justify-content-center align-items-center gap-2 text-light">
            <div className='icondiv'><AiOutlineCalendar className='fs-2 text-white' /></div>
            <div class="text">
              <strong class="number" data-number="5">5</strong>
              <br />
              <span className='textcounter'>Years of Experience</span>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-4">
            <img src="Bg1 (1).jpg" className='col-10'alt="wait for loading" />
          </div>
          <div className="col-8">

          </div>
        </div>
      </div>
    </div>
  )
}

export default About
