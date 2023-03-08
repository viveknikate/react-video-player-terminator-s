import { Image } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/robot1.jpg';
import img2 from '../assets/robot2.jpg';
import img3 from '../assets/robot3.jpg';
import img4 from '../assets/robot4.jpg';
import img5 from '../assets/robot5.jpg';

const Home = () => {
  return (
    <Carousel
      infiniteLoop
      autoPlay
      showStatus={false}      
      interval={1000}
    >
      <div>
        <Image src={img1} h={550}/>
        <p className='legend' style={{fontSize:'15px'}}>Terminator-1</p>
      </div>
      <div>
        <Image src={img2} h={550}/>
        <p className='legend' style={{fontSize:'15px'}}>Terminator-2</p>
      </div>
      <div>
        <Image src={img3} h={550}/>
        <p className='legend' style={{fontSize:'15px'}}>Terminator-3</p>
      </div>
      <div>
        <Image src={img4} h={550}/>
        <p className='legend' style={{fontSize:'15px'}}>Terminator-4</p>
      </div>
      <div>
        <Image src={img5}  h={550}/>
        <p className='legend' style={{fontSize:'15px'}}>Terminator-5</p>
      </div>
    </Carousel>
  )
}

export default Home
