import React from 'react';
import '../scss/_myblogweb.scss';

import pic1 from '../assets/myblogweb-home.jpeg';
import pic2 from '../assets/myblogweb-signup.jpeg';
import pic3 from '../assets/myblogweb-admin.jpeg';
import pic4 from '../assets/myblogweb-newpost.jpeg';
import pic5 from '../assets/myblogweb-bloglist.jpeg';
import pic6 from '../assets/myblogweb-allaccount.jpeg';
import Footer from '../footer';


export default function Myblogweb() {
  return (
        <>
            <div className='myblogweb_container'>
                <img src={pic1} />
                <img src={pic2} />
                <img src={pic3} />
                <img src={pic4} />
                <img src={pic5} />
                <img src={pic6} />

            </div>  

            <Footer />
        </>
    )
}
