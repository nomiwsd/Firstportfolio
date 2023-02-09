import React, { useState} from 'react'
import './Header.css'
function Header() {
    // change nav color when scrolling
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 40) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
  return (
  <div className={color ? 'header header-bg' : 'header'}>
  <nav className='navbar navbar-expand-lg ftco-navbar-light scrolled awake p-0'>
    <div className='col-2'>
      <p className='logo'>LOGO</p>
          {/* <img src="Logo.png" width="80px" height="80px" className='logoimg' alt='logo' /> */}
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse  col-10 justify-content-end" id="navbarSupportedContent">
      <ul className="nav-menu navbar-nav list-unstyled ">
          <li className='nav-item'>
              <a href='#Landingsect'className='nav-link'><span>Home</span></a>
          </li>
          <li className='nav-item'>
              <a href='#Aboutsect' className='nav-link'><span>About</span></a>
          </li>
          <li className='nav-item'>
              <a href='#Skillssect' className='nav-link'><span>Skills</span></a>
          </li>
          <li className='nav-item'>
              <a href='#ServiceSect' className='nav-link'><span>Services</span></a>
          </li>
          <li className='nav-item' >
              <a href='#ProjectsSect' className='nav-link'><span>Projects</span></a>
          </li>
          <li className='nav-item'>
              <a href='#Contactsect' className='nav-link'><span>Contact</span></a>
          </li>
      </ul>
      </div>
  </nav>
  {/* <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}
</div>
 
  )
}

export default Header