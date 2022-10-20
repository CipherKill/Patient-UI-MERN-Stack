import './Aboutus.css'

import {Container} from 'react-bootstrap'
import BottomNavbar from '../../components/BottomNavbar/BottomNavbar'
import NavContext from '../..//context/NavContext/navContext'
import {useContext, useEffect} from 'react'
import BottomButtonBar from '../../components/BottomButtonBar/BottomButtonBar'

function Aboutus() {

  const {changePageNameTo}=useContext(NavContext);
  const PAGE_NAME="About";

  useEffect(()=>{changePageNameTo(PAGE_NAME)});

  return (
    <Container fluid>
      <Container className='about-area'>
        <h1>ABOUT</h1>
        <p className='caption'>&#40;RWD the one and only&#41;</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste at distinctio maiores laboriosam quo nisi non eaque! Magni impedit tempore consectetur repellendus corrupti officia, saepe necessitatibus cumque illum, enim tempora.</p>
        <p>Cufasodfji alskdjf lriutow iuoiudfs awelrkewjr aosdifu qpweori asldkfjoiu roiqur qowieru.</p>
        <div className='bottom-nav-buttons'>
          <BottomButtonBar active='1'/>
        </div>
      </Container>

      <div className='bottom-navbar'>
        <BottomNavbar active='1'/>
      </div>

    </Container>
  )
}

export default Aboutus