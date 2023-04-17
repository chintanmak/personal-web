import React from 'react';
import '../scss/_home.scss';
import pic from '../assets/ChintanMakwana.png';
import pic2 from '../assets/pic4.jpg';
import pic3 from '../assets/pic5.jpg';

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

import murakamiss from '../assets/murakamiclone.vercel.app.jpeg';

export default function Home() {
  return (
    <>
      <div className='header_container'>
        <div className='header_img'>
          <img src={pic} />
        </div>
        <div className='header_title'>
          <h1>Hello I'm Chintan.</h1>
          <h2>A React Developer</h2>
          <button>DOWNLOAD RESUME</button>
        </div>
      </div>

      <div className='aboutme_container'> 
        <div className='aboutme_header'>
          <h2>About Me</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <button>HIRE ME</button>
        </div>
        <div className='aboutme_img'>
          <img src={pic} />
        </div>
      </div>

      <div className='skill_container'>
        <div className='skill_title'>
          <h2>My Skills</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className='skillset_content'>
          <div className='skillset'>
            <p>Developer</p>
            <progress value="80" max="100"></progress>
          </div>
          <div className='skillset'>
            <p>Web Design</p>
            <progress value="75" max="100"> 32% </progress>
          </div>
          <div className='skillset'>
            <p>Cordignator</p>
            <progress value="89" max="100"> 32% </progress>
          </div>
          <div className='skillset'>
            <p>Laravel</p>
            <progress value="90" max="100"> 32% </progress>
          </div>
        </div>
      </div>

      <div className='service_container'>
      <div className='service_title'>
        <h2>Our Services</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>

      <div className='services_section'>
  
        <div className='services_box'>
          <div className='service_row1'>
          <img src={bulb} />
          </div>
          <div className='service_row2'>
            <h2>App Development</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className='service_row3'>
            <img src={circle6} />
          </div>
        </div>

      </div>
    </div>

    <div className='latestwork_container'>
      <div className='latestwork_title'>
        <h2>Latest Work</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>

      <div className='latestwork_section'>
        <div className='work_box'>
          <img src={murakamiss} />
        </div>
        <div className='work_box'>
          <img src={murakamiss} />
        </div>
      </div>
      <button>LOAD MORE</button>
    </div>

    <div className='resume_container'>
      <div className='resume_title'>
        <h1>Our Resume</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>
    </div>
    </>
  )
}
