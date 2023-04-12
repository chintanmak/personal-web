import React from 'react';
import '../Components/scss/_navbar.scss';
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className='navbar_container'>
        <div className='navbar_logo'>
        <h2>Chintan.<span>Mak</span></h2>
        </div>
        <div className='navbar_menu'>
          <a href="">Home</a>
          <a href="">Services</a>
          <a href="">Work</a>
          <a href="">Resume</a>
          <a href="">Testimonials</a>
          <a href="">Blog</a>
          <a href="">Contact</a>
        </div>
      </div>

      <Outlet />
    </>
    
  )
}
