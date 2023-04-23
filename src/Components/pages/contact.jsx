import React from 'react';
import '../scss/_contact.scss';

import location from '../assets/location.png';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png';
import Footer from '../footer';


export default function Contact() {
  return (
    <>
        <div className='contactme_container'>
      <div className='contactme_title'>
        <h1>Contact me</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>

      <div className='contactform_section'>
      <div className='row1'>
        <div className='formrow1'>
          <input type='text' placeholder='Full Name'/>
          <input type='text' placeholder='Email' />
         <input type='text' placeholder='Subject' />
        </div>
        <div className='formrow2'>
          <textarea type='text' placeholder='Your Message' />
        </div>
        <div className='formrow3'>
          <button>
            Send me
          </button>
        </div>
      </div>
      <div className='row2'>
       <div className='address_section'>
          <img src={location} />
          <p>shantinagar, mira road(e), <br />Thane-401107</p>
       </div>
       <div className='address_section'>
          <img src={phone} />
          <p>+91 9699421928</p>
       </div>
       <div className='address_section'>
          <img src={mail} />
          <p>chintanmakwana2011@gmail.com</p>
       </div>
      </div>
      </div>
    </div>

    <Footer />

    </>
  )
}
