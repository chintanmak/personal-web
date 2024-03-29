import React from 'react';
import '../scss/_home.scss';
import pcguy from '../assets/pcguy.jpeg';
import pic from '../assets/ChintanMakwana.png';
import pic2 from '../assets/pic6.jpeg';
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

import education from '../assets/education.png';
import experience from '../assets/experience.png';

import location from '../assets/location.png';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png';


import murakamiss from '../assets/murakamiclone.vercel.app.jpeg';
import teamwayss from '../assets/teamway-chintanmak.vercel.app.jpeg';

import resume from '../assets/Chintan_Makwana_Resume.pdf';
import Footer from '../footer';

export default function Home() {
  return (
    <>
      <div className='header_container'>
        <div className='header_img'>
          <img src={pcguy} />
        </div>
        <div className='header_title'>
          <h1>Hello I'm Chintan.</h1>
          <h2>A React Developer</h2>
          <a href={resume}><button> DOWNLOAD RESUME</button></a>
        </div>
      </div>

      <div className='aboutme_container'> 
        <div className='aboutme_header'>
          <h2>About Me</h2>
          <p>Experienced Associate Software Developer with a demonstrated history of working in the IT industry. Skilled in HTML, CSS, SCSS, Javascript, Reactjs, Mongodb. Strong engineering professional with a Master's degree focused in Computer Science from MIT World Peace University.</p>
          <button>HIRE ME</button>
        </div>
        <div className='aboutme_img'>
          <img src={pic} />
        </div>
      </div>

      <div className='skill_container'>
        <div className='skill_title'>
          <h2>My Skills</h2>
          {/* <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p> */}
        </div>
        <div className='skillset_content'>
          <div className='skillset'>
            <p>HTML</p>
            <progress value="90" max="100"></progress>
          </div>
          <div className='skillset'>
            <p>CSS / SCSS</p>
            <progress value="85" max="100"> 32% </progress>
          </div>
          <div className='skillset'>
            <p>Reactjs</p>
            <progress value="60" max="100"> 32% </progress>
          </div>
          <div className='skillset'>
            <p>Mongodb</p>
            <progress value="55" max="100"> 32% </progress>
          </div>
        </div>
      </div>

      {/* <div className='service_container'>
      <div className='service_title'>
        <h2>Our Services</h2>
       </div>

      <div className='services_section'>
  
        <div className='services_box'>
          <div className='service_row1'>
          <img src={bulb} />
          </div>
          <div className='service_row2'>
            <h2>App Development</h2>
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
            </div>
          <div className='service_row3'>
            <img src={circle6} />
          </div>
        </div>

      </div>
    </div> */}

    <div className='latestwork_container'>
      <div className='latestwork_title'>
        <h2>Latest Work</h2>
        {/* <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p> */}
      </div>

      <div className='latestwork_section'>
        <div className='work_box'>
          <a href='https://murakami-clone.vercel.app/'><img src={murakamiss} /></a>
        </div>
        <div className='work_box'>
          <a href='https://teamway-chintanmak.vercel.app/'><img src={teamwayss} /></a>
        </div>
      </div>
      <a href='/work'><button>LOAD MORE</button></a>
    </div>

    <div className='resume_container'>
      <div className='resume_title'>
        <h1>Our Resume</h1>
        {/* <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p> */}
      </div>

      <div className='resume_section'>
        
        <div className='education_section'>
        <div className='box_title'>
        <img src={education} />
        <h2>Education</h2>
        </div>
          <div className='education_box'>
            <p>March 2020-2022</p>
            <p><b>MSc Computer Science</b></p>
            <p>MIT World Peace University</p>
            <br />
            <p>Location: Pune</p>
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
          </div>
          <div className='education_box'>
            <p>March 2017-2020</p>
            <p><b>BSc Information Technology</b></p>
            <p>Nagindas Khandwala College</p>
            <br />
            <p>Location: Mumbai</p>
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
          </div>
        </div>

        <div className='experience_section'>
        <div className='box_title'>
        <img src={experience} />
        <h2>Experience</h2>
        </div>
          <div className='experience_box'>
            <p>Oct 2022 - Present</p>
            <p><b>Engineer</b></p>
            <p>Trejhara Solutions</p>
            <br />
           <p>Skills used: HTML, CSS, JS, REACTJS, JSON</p>
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
          </div>
          <div className='experience_box'>
            <p>Nov 2021 - jun 2022</p>
            <p><b>Software Developer Intern</b></p>
            <p>Hack-X Security</p>
            <br />
            <p>Skills used: HTML, CSS, SCSS, JS, REACTJS, MONGODB</p>
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
          </div>
        </div>
      </div>
    </div>

    <div className='contactme_container'>
      <div className='contactme_title'>
        <h1>Contact me</h1>
        {/* <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p> */}
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
          <button onClick={() => alert('Currently form is not working, contact through mail')}>
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
