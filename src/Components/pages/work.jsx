import React from 'react';
import '../scss/_work.scss';

import murakamiss from '../assets/murakamiclone.vercel.app.jpeg';
import teamwayss from '../assets/teamway-chintanmak.vercel.app.jpeg';
import notess from '../assets/note-chintanmak.vercel.app.jpeg';
import neutrinoss from '../assets/neutrino.vercel.app.jpg';
import myblogwebss from '../assets/myblogweb-newpost.jpeg';
import konsultantss from '../assets/konsultantss.jpg';
import Footer from '../footer';


export default function Work() {
  return (
    <>
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
        <div className='work_box'>
          <a href='https://note-chintanmak.vercel.app/'><img src={notess} /></a>
        </div>
        <div className='work_box'>
          <a href='https://neutrino.vercel.app/'><img src={neutrinoss} /></a>
        </div>
        <div className='work_box'>
          <a href='https://konsultant.vercel.app/'><img src={konsultantss} /></a>
        </div>
        <div className='work_box'>
          <a href="/myblogweb"><img src={myblogwebss} /></a>
        </div>
      </div>
      
    </div>

    <Footer />
    </>
  )
}
