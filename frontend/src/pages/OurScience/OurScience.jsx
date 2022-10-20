import './OurScience.css'

import {useEffect,useContext} from 'react'
import NavContext from '../../context/NavContext/navContext'
import {Carousel,Container} from 'react-bootstrap'

import carousel1 from '../../assets/ScienceImages/carousel1.jpg' 
import carousel2 from '../../assets/ScienceImages/carousel2.jpg' 
import carousel3 from '../../assets/ScienceImages/carousel3.jpg' 
import carousel4 from '../../assets/ScienceImages/carousel4.jpg' 

function OurScience() {

  const {changePageNameTo}=useContext(NavContext);
  const PAGE_TITLE='Our Science';
  const carouselLimit=[
    {image:carousel1,heading:"Man and Machine",caption:"Our man and machine culture would make you brave to do dangerous things."},
    {image:carousel2,heading:"Best Doctors",caption:"Doctors that has hands that work like magic."},
    {image:carousel3,heading:"Unlimited Facilities",caption:"All the machines, instruments and tools are here."},
    {image:carousel4,heading:"The Best Staff",caption:"There is always someone to take care for you."}
  ];

  useEffect(()=>changePageNameTo(PAGE_TITLE));

  return (
    <Container className='mt-5 mt-md-5'>
    <Carousel fade>
      {carouselLimit.map((data,id)=>(
        <Carousel.Item key={id}>
          <img className='d-block w-100' src={data.image} alt='hospital'/>
          <Carousel.Caption className='caption-container'>
          <h3>{data.heading}</h3>
          <p>{data.caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </Container>
  )
}

export default OurScience