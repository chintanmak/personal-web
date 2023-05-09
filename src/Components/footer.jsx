import React from 'react';
import './scss/_footer.scss';

import fb from './assets/facebook.png';
import insta from './assets/instagram.png';
import github from './assets/github.png';
import twitter from './assets/twitter.png';
import linkedin from './assets/linkedin.png';


export default function Footer() {
  return (
    <>
          <div className='footer_container'>
      <div className='copyright_section'>
        <p>Copyright © 2023, All rights Reserved,</p>
        <p>Created by ChintanMak</p>
      </div>

      <div className='social_links'>
      <a href='https://www.facebook.com/chintan.makwana.313/'><img src={fb} /></a>
      <a href='https://instagram.com/chintan.mak'><img src={insta} /></a>
      <a href='https://github.com/chintanmak'><img src={github} /></a>
      <a href='https://twitter.com/chintanMac'><img src={twitter} /></a>
      <a href='https://www.linkedin.com/in/chintan-makwana-5560b712b/'><img src={linkedin}/></a>
      </div>
    </div>
    </>
  )
}
