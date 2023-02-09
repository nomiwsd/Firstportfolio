import React from 'react'
import {FaGreaterThan,FaGithub,FaWhatsapp} from 'react-icons/fa'
import {MdOutlineEmail} from 'react-icons/md'
import './Footer.css'
function Footer() {
  return (
    <div className="container-fluid p-0 m-0">
    <div className='footersect py-5 px-3 px-lg-5'>
      <div className="row m-0 p-0">
        <div className="col-lg-3 col-12">
            <h4 className='footerhead text-start'>Lets Talk About </h4>
            <p className='text-start'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div className="col-lg-2 col-12 linkss">
          <h4 className='footerhead text-start'>Links</h4>
            <ul className='Footerlinks  text-start p-0'>
                <li><FaGreaterThan className='arrowsign'/> 
                <a href='#Landingsect'>Home</a>
                </li>
                <li><FaGreaterThan className='arrowsign'/> 
                <a href='#Aboutsect'>About</a>
                </li>
                <li><FaGreaterThan className='arrowsign'/> 
                <a href='#Skillssect'>Skills</a>
                </li>
                <li><FaGreaterThan className='arrowsign'/>
                <a href='#Projectssect'>Projects</a></li>
                <li><FaGreaterThan className='arrowsign'/>
                <a href='#Contactsect'>Contact</a></li>
            </ul>
        </div>
        <div className="col-lg-3 col-12">
          <h4 className='footerhead text-start'>Services</h4>
        <ul className='Footerlinks  text-start p-0'>
                <li><FaGreaterThan className='arrowsign'/> Web Design</li>
                <li><FaGreaterThan className='arrowsign'/> Web Application</li>
                <li><FaGreaterThan className='arrowsign'/> Responsive Design</li>
                <li><FaGreaterThan className='arrowsign'/> Website Maintenance</li>
                <li><FaGreaterThan className='arrowsign'/> 24/7 Support</li>
            </ul>
        </div>
        <div className="col-lg-4 col-12 ">
          <h4 className='text-start'>Have a Questions?</h4>
        <ul className='Footerlinks   text-start p-0'>
                <li><MdOutlineEmail  className='socialicons mx-0 mx-lg-1'/>  nomimalik8051@gmail.com</li>
                <li><FaGithub className='socialicons'/>     https://github.com/nomiwsd</li>
                <li><FaWhatsapp className='socialicons'/>  +923187680511</li>
            </ul>
        </div>
      </div>
      <hr className='w-100 border-2'/>
      <p className='text-center '>Copyright ©2023 All rights reserved | This template is made by NomiDev</p>
    </div>
    </div>
  )
}

export default Footer
