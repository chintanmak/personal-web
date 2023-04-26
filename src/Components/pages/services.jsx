import React from 'react';
import '../scss/_services.scss';

import bulb from '../assets/bulb.png';
import webdevelopment from '../assets/webdevelopment.png';
import responsive from '../assets/responsive.png';
import design from '../assets/design.png';
import customization from '../assets/customization.png';
import support from '../assets/support.png';

import circle1 from '../assets/circle1.png';
import circle2 from '../assets/circle2.png';
import circle3 from '../assets/circle3.png';
import circle4 from '../assets/circle4.png';
import circle5 from '../assets/circle5.png';
import circle6 from '../assets/circle6.png';
import Footer from '../footer';

export default function Services() {
  return (
    <>
            <div className='service_container'>
      <div className='service_title'>
        <h2>Our Services</h2>
        {/* <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p> */}
      </div>

      <div className='services_section'>
  
        <div className='services_box'>
          <div className='service_row1'>
          <img src={bulb} />
          </div>
          <div className='service_row2'>
            <h2>App Development</h2>
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
          </div>
          <div className='service_row3'>
            <img src={circle1} />
          </div>
        </div>

        <div className='services_box'>
          <div className='service_row1'>
          <img src={webdevelopment} />
          </div>
          <div className='service_row2'>
            <h2>Web Development</h2>
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
          </div>
          <div className='service_row3'>
            <img src={circle2} />
          </div>
        </div>

        <div className='services_box'>
          <div className='service_row1'>
          <img src={responsive} />
          </div>
          <div className='service_row2'>
            <h2>Responsive Design</h2>
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
          </div>
          <div className='service_row3'>
            <img src={circle3} />
          </div>
        </div>

        <div className='services_box'>
          <div className='service_row1'>
          <img src={design} />
          </div>
          <div className='service_row2'>
            <h2>Designs & Interfaces</h2>
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
          </div>
          <div className='service_row3'>
            <img src={circle4} />
          </div>
        </div>

        <div className='services_box'>
          <div className='service_row1'>
          <img src={customization} />
          </div>
          <div className='service_row2'>
            <h2>Highly Customizable</h2>
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
          </div>
          <div className='service_row3'>
            <img src={circle5} />
          </div>
        </div>

        <div className='services_box'>
          <div className='service_row1'>
          <img src={support} />
          </div>
          <div className='service_row2'>
            <h2>Dedicated Support</h2>
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
          </div>
          <div className='service_row3'>
            <img src={circle6} />
          </div>
        </div>

      </div>
    </div>

    <Footer />
    </>
  )
}
