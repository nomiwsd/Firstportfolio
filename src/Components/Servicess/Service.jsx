import React from 'react'
import { HiOutlineCube ,HiOutlineSearch } from 'react-icons/hi';
import {AiOutlineAppstore} from 'react-icons/ai';
import {MdOutlineWebAsset,MdOutlineBrandingWatermark} from 'react-icons/md';
import {FiPenTool} from 'react-icons/fi';
import {RiComputerLine} from 'react-icons/ri';
import './Service.css'
function Service() {  
  return (
    
    <div className='Servicessect' id='ServiceSect'>
    <div className='container'>
    <div class="col-md-12 heading-section text-center py-5">
<span class="subheading text-center" data-aos="fade-right"
            data-aos-duration="500">I am Great at</span>
<h2 class="mb-4 Mainheading" data-aos="fade-left"
            data-aos-duration="500">We do awesome services for our clients</h2>
<p className='intro' data-aos="fade-down"
            data-aos-duration="500">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
</div>
      <div className="row py-5">
      <div class="col-md-6 col-lg-3 cardservice">
<div class="media block-6 services d-block  rounded-lg shadow ftco-animate fadeInUp ftco-animated">
<div class="icon d-flex align-items-center justify-content-center"><HiOutlineCube className='fs-1' /></div>
<div class="media-body">
<h3 class="heading mb-3" data-aos="fade-right"
            data-aos-duration="500">Web Design</h3>
<p data-aos="fade-right"
            data-aos-duration="500">A small river named Duden flows by their place and supplies.</p>
</div>
</div>
</div>
<div class="col-md-6 col-lg-3 cardservice">
<div class="media block-6 services d-block  rounded-lg shadow ftco-animate fadeInUp ftco-animated">
<div class="icon d-flex align-items-center justify-content-center"><AiOutlineAppstore className='fs-1' /></div>
<div class="media-body">
<h3 class="heading mb-3" data-aos="fade-right"
            data-aos-duration="500">Web Application</h3>
<p data-aos="fade-right"
            data-aos-duration="500">A small river named Duden flows by their place and supplies.</p>
</div>
</div>
</div>
<div class="col-md-6 col-lg-3 cardservice">
<div class="media block-6 services d-block  rounded-lg shadow ftco-animate fadeInUp ftco-animated">
<div class="icon d-flex align-items-center justify-content-center"><MdOutlineWebAsset className='fs-1' /></div>
<div class="media-body">
<h3 class="heading mb-3" data-aos="fade-right"
            data-aos-duration="500">Web Development</h3>
<p data-aos="fade-right"
            data-aos-duration="500">A small river named Duden flows by their place and supplies.</p>
</div>
</div>
</div>
<div class="col-md-6 col-lg-3 cardservice">
<div class="media block-6 services d-block  rounded-lg shadow ftco-animate fadeInUp ftco-animated">
<div class="icon d-flex align-items-center justify-content-center"><MdOutlineBrandingWatermark className='fs-1' /></div>
<div class="media-body">
<h3 class="heading mb-3" data-aos="fade-right"
            data-aos-duration="500">Web Maintenance</h3>
<p data-aos="fade-right"
            data-aos-duration="500">A small river named Duden flows by their place and supplies.</p>
</div>
</div>
</div>
<div class="col-md-6 col-lg-3 cardservice">
<div class="media block-6 services d-block  rounded-lg shadow ftco-animate fadeInUp ftco-animated">
<div class="icon d-flex align-items-center justify-content-center"><RiComputerLine className='fs-1' /></div>
<div class="media-body">
<h3 class="heading mb-3" data-aos="fade-right"
            data-aos-duration="500">Responsive Design</h3>
<p data-aos="fade-right"
            data-aos-duration="500">A small river named Duden flows by their place and supplies.</p>
</div>
</div>
</div>
<div class="col-md-6 col-lg-3 cardservice">
<div class="media block-6 services d-block  rounded-lg shadow ftco-animate fadeInUp ftco-animated">
<div class="icon d-flex align-items-center justify-content-center"><FiPenTool className='fs-1' /></div>
<div class="media-body">
<h3 class="heading mb-3" data-aos="fade-right"
            data-aos-duration="500">Icon Design</h3>
<p data-aos="fade-right"
            data-aos-duration="500">A small river named Duden flows by their place and supplies.</p>
</div>
</div>
</div>
<div class="col-md-6 col-lg-3 cardservice">
<div class="media block-6 services d-block  rounded-lg shadow ftco-animate fadeInUp ftco-animated">
<div class="icon d-flex align-items-center justify-content-center"><FiPenTool className='fs-1' /></div>
<div class="media-body">
<h3 class="heading mb-3" data-aos="fade-right"
            data-aos-duration="500">Graphic Design</h3>
<p data-aos="fade-right"
            data-aos-duration="500">A small river named Duden flows by their place and supplies.</p>
</div>
</div>
</div>
<div class="col-md-6 col-lg-3 cardservice">
<div class="media block-6 services d-block  rounded-lg shadow ftco-animate fadeInUp ftco-animated">
<div class="icon d-flex align-items-center justify-content-center"><HiOutlineSearch className='fs-1 searchicon' /></div>
<div class="media-body">
<h3 class="heading mb-3" data-aos="fade-right"
            data-aos-duration="500">SEO</h3>
<p data-aos="fade-right"
            data-aos-duration="500">A small river named Duden flows by their place and supplies.</p>
</div>
</div>
</div>
      </div>
    </div>
    </div>
  )
}

export default Service
