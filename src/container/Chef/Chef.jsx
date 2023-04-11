import React from 'react'
import './chef.css';
import { images } from '../../constants';
import { Subheading } from '../../components';
import './chef.css';


const Chef = () => {
  return (
    <div className='app__background app__wrapper section__padding' id='chef'>
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.chef} alt='chef img'/>
      </div>

      <div className='app__wrapper_info'>
        <Subheading title="Chef`s Word" />
        <h1 className='headtext__cormorant'>What we believe in</h1>
        
        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt="quote" />
            <p className='p__opensans'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, corporis?
            </p>
          </div>
          <p className='p__opensans'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Animi aliquam soluta accusantium praesentium at reiciendis 
            maiores iusto fugit non? Pariatur quibusdam sapiente iste 
            architecto est accusantium unde assumenda quam.
          </p>
        </div>
      
        <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className='p__opensans'>
            Chef & Founder
          </p>
          <img src={images.sign} alt="sign" />
        </div>

      </div>
    </div>
  )
}

export default Chef