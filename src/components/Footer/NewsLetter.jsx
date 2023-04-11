import React from 'react'
import Subheading from '../Subheading/Subheading';
import './newsLetter.css';

const NewsLetter = () => {

  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <Subheading title="Newsletter"/>
        <h1 className='headtext__cormorant'>Subscribe To Our NewsLetter</h1>
        <p className='p__opensans'>And newer miss Latest Updates</p>
      </div>
      <div className='app__newsletter-input flex__center'>
        <input type='email' placeholder='Enter your Email Address'/>
        <button className='custom__button' type=''>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter