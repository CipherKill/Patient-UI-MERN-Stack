import './ButtonNav.css'

import {Link} from 'react-router-dom'
import {Container} from 'react-bootstrap'

function ButtonNav() {
  return (
      <div className='button-nav-div'>
    <Container className='button-nav-container'>
        <Link to='/' className='buttons'>Home</Link>
        <Link to='/about' className='buttons'>About</Link>
        <Link to='/ourpatients' className='buttons'>Our Patients</Link>        
        <Link to='/ourscience' className='buttons'>Our Science</Link>
        <Link to='/events' className='buttons'>Events</Link>
    </Container>
      </div>
  )
}

export default ButtonNav