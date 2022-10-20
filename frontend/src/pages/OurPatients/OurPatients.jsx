import './OurPatients.css'

import {Container,Row,Col} from 'react-bootstrap'
import PatientMatrix from '../../components/PatientMatrix/PatientMatrix'
import {useContext, useEffect} from 'react'
import NavContext from '../../context/NavContext/navContext'

function OurPatients() {

  const {changePageNameTo}=useContext(NavContext);
  const PAGE_NAME='Our Patients';

  useEffect(()=>{changePageNameTo(PAGE_NAME)});

  return (
    <Container fluid className='p-md-5'>
      <Row className='flex-row-reverse'>
        <Col sm={12} md={8} className='home-image'></Col>
        <Col sm={12} md={4} className='paging-background-container'><PatientMatrix/></Col>
      </Row>
    </Container>
  )
}

export default OurPatients