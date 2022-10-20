import './Events.css'

import {Container,Form,Button,Modal} from 'react-bootstrap'
import {useState,useEffect,useContext} from 'react'
import NavContext from '../../context/NavContext/navContext'
import {useNavigate} from 'react-router-dom'
import controller from './eventsController'

function Events() {

  const [formData,setFormData]=useState({
    username:'',
    email:'',
    contact:''
  });
  const [showModal,setShowModal]=useState(false);

  const {changePageNameTo}=useContext(NavContext);
  const PAGE_NAME='Events';
  const navigate=useNavigate();

  useEffect(()=>{changePageNameTo(PAGE_NAME)})

  const handleChange=(e)=>{
    setFormData(prevState=>({
      ...prevState,
      [e.target.name]:e.target.value
    }));
  };

  const handlerReset=()=>{
    setFormData({
      username:'',
      email:'',
      contact:''
    });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    controller.addMail(formData).then(data=>setShowModal(true));
  };

  const handleClose=()=>{
    setShowModal(false);
    navigate('/');
  };
  
  return (
    <Container className='event-container'>
      <h3 className='mb-3'>Submit your details to get event updates</h3>
      <Form className='form-container' onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='username'>
          <Form.Label>Username</Form.Label>
          <Form.Control type='text' className='textbox-style' name='username' onChange={handleChange} value={formData.username} required/>
        </Form.Group>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' className='textbox-style' name='email' onChange={handleChange} value={formData.email} required/>
        </Form.Group>
        <Form.Group className='mb-3' controlId='contact'>
          <Form.Label>Contact Number</Form.Label>
          <Form.Control type='tel' className='textbox-style' name='contact' onChange={handleChange} value={formData.contact} required/>
        </Form.Group>
        <Button variant='' type='reset' className='button text-light clear-btn' onClick={handlerReset}>Clear</Button>
        <Button variant='light' type='submit' className='button text-primary submit-btn'>Submit</Button>
      </Form>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Awesome!</Modal.Title>
        </Modal.Header>
        <Modal.Body>We'll let you know about upcoming events using your email.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
    </Modal>
    </Container>
  )
}

export default Events