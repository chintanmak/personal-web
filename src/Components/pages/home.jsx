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

      </div>
    </>
  )
}
