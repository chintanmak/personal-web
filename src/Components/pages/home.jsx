import React from 'react';
import '../scss/_home.scss';
import pic from '../assets/ChintanMakwana.png'
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
    </>
  )
}
