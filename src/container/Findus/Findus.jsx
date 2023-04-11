import React from 'react'
import './findus.css';
import { images } from '../../constants';
import { Subheading } from '../../components';



const Findus = () => {

  return (
    <div className='app__background app__wrapper section__padding' id='contact'>
      <div className='app__wrapper_info'>
        <Subheading title="Contact"/>
        <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>Find Us</h1>
        <div className='app__wrapper-contnet'>
          <p className='p__opensans'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Omnis nostrum ipsum alias saepe illum expedita iusto a modi
          </p>
          <p className='p__cormorant' style={{ color: '#DCCA87', margin: '2rem 0' }}>
            Opening Hours
          </p>
          <p className='p__opensans'>
            Mon - Fri: 10:00 am - 02:00 am
            
          </p>
          <p className='p__opensans'>
            Sat - Sun: 10:00 am - 03:00 am
          </p>
        </div>
        <button className='custom__button' style={{ marginTop: '2rem' }}>Visit Us</button>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.findus} alt="" />
      </div>
    </div>
  )
}

export default Findus