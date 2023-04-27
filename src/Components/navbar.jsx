import React from 'react';
import '../Components/scss/_navbar.scss';
import { Outlet, Link } from "react-router-dom";

import resume from './assets/Chintan_Makwana_Resume.pdf';

export default function Navbar() {
  return (
    <>
      <div className='navbar_container'>
        <div className='navbar_logo'>
        <a href="/"><h2>Chintan.<span>Mak</span></h2></a>
        </div>
        <div className='navbar_menu'>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/work">Work</a>
          <a href={resume}>Resume</a>
          <a href="/testimonial">Testimonials</a>
          <a href="/contact">Contact</a>
        </div>
      </div>

      <Outlet />
    </>
    
  )
}
