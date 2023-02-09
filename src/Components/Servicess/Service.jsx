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
<span class="subheading text-center">I am Great at</span>
<h2 class="mb-4 Mainheading">We do awesome services for our clients</h2>
<p className='intro'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
</div>
      <div className="row py-5">
      <div class="col-md-6 col-lg-3 cardservice">
<div class="media block-6 services d-block  rounded-lg shadow ftco-animate fadeInUp ftco-animated">
<div class="icon d-flex align-items-center justify-content-center"><HiOutlineCube className='fs-1' /></div>
<div class="media-body">
<h3 class="heading mb-3">Web Design</h3>
<p>A small river named Duden flows by their place and supplies.</p>
</div>
</div>
</div>
<div class="col-md-6 col-lg-3 cardservice">
<div class="media block-6 services d-block  rounded-lg shadow ftco-animate fadeInUp ftco-animated">
<div class="icon d-flex align-items-center justify-content-center"><AiOutlineAppstore className='fs-1' /></div>
<div class="media-body">
<h3 class="heading mb-3">Web Application</h3>
<p>A small river named Duden flows by their place and supplies.</p>
</div>
</div>
</div>
<div class="col-md-6 col-lg-3 cardservice">
<div class="media block-6 services d-block  rounded-lg shadow ftco-animate fadeInUp ftco-animated">
<div class="icon d-flex align-items-center justify-content-center"><MdOutlineWebAsset className='fs-1' /></div>
<div class="media-body">
<h3 class="heading mb-3">Web Development</h3>
<p>A small river named Duden flows by their place and supplies.</p>
</div>
</div>
</div>
<div class="col-md-6 col-lg-3 cardservice">
<div class="media block-6 services d-block  rounded-lg shadow ftco-animate fadeInUp ftco-animated">
<div class="icon d-flex align-items-center justify-content-center"><MdOutlineBrandingWatermark className='fs-1' /></div>
<div class="media-body">
<h3 class="heading mb-3">Banner Design</h3>
<p>A small river named Duden flows by their place and supplies.</p>
</div>
</div>
</div>
<div class="col-md-6 col-lg-3 cardservice">
<div class="media block-6 services d-block  rounded-lg shadow ftco-animate fadeInUp ftco-animated">
<div class="icon d-flex align-items-center justify-content-center"><RiComputerLine className='fs-1' /></div>
<div class="media-body">
<h3 class="heading mb-3">Branding</h3>
<p>A small river named Duden flows by their place and supplies.</p>
</div>
</div>
</div>
<div class="col-md-6 col-lg-3 cardservice">
<div class="media block-6 services d-block  rounded-lg shadow ftco-animate fadeInUp ftco-animated">
<div class="icon d-flex align-items-center justify-content-center"><FiPenTool className='fs-1' /></div>
<div class="media-body">
<h3 class="heading mb-3">Icon Design</h3>
<p>A small river named Duden flows by their place and supplies.</p>
</div>
</div>
</div>
<div class="col-md-6 col-lg-3 cardservice">
<div class="media block-6 services d-block  rounded-lg shadow ftco-animate fadeInUp ftco-animated">
<div class="icon d-flex align-items-center justify-content-center"><FiPenTool className='fs-1' /></div>
<div class="media-body">
<h3 class="heading mb-3">Graphic Design</h3>
<p>A small river named Duden flows by their place and supplies.</p>
</div>
</div>
</div>
<div class="col-md-6 col-lg-3 cardservice">
<div class="media block-6 services d-block  rounded-lg shadow ftco-animate fadeInUp ftco-animated">
<div class="icon d-flex align-items-center justify-content-center"><HiOutlineSearch className='fs-1 searchicon' /></div>
<div class="media-body">
<h3 class="heading mb-3">SEO</h3>
<p>A small river named Duden flows by their place and supplies.</p>
</div>
</div>
</div>
      </div>
    </div>
    </div>
  )
}

export default Service
