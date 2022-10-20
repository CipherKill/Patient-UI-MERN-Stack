import '../EditPatient/EditPatient.css'

import {Link, useNavigate} from 'react-router-dom'
import controller from './AddController'
import {Form,Container,Button} from 'react-bootstrap'
import {useState,useEffect,useContext} from 'react'
import NavContext from '../../context/NavContext/navContext'
import { toast } from 'react-toastify';
import {AiOutlineHome} from 'react-icons/ai'
import AccessContext from '../../context/PrivateAccess/AccessContext'

function EditPatient() {

    const {changePageNameTo}=useContext(NavContext);
    // const {grantAccess}=useContext(AccessContext);
    const grantAccess=true;
    const navigate=useNavigate();
    const PAGE_NAME='add patient';

    const [formData,setFormData]=useState({
        patientId:'',
        name:'',
        desc:''
    })

    useEffect(()=>{
        changePageNameTo(PAGE_NAME);
    },[changePageNameTo]);
    
    const handleChange=(e)=>{
        setFormData((prevData)=>(
            {
                ...prevData,
                [e.target.name]:e.target.value
            }
        ));
    };

    const handleReset=()=>{
        setFormData(prevData=>(
            {
                patientId:'',
                name:'',
                desc:''
            }
        ));
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        controller.addPatient(formData)
            .then(result=>{
                toast.success('Added patient!');
                navigate('/');
            })
            .catch(err=>{
                toast.error('Could not add patient');
            })
    }


  return (
    <Container className='edit-container'>
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='patientName'>
                <Form.Label>Patient ID</Form.Label>
                    <Form.Control type='number' className={!grantAccess&&'no-edit'} name='patientId' value={formData.patientId}  onChange={handleChange} disabled={(!grantAccess)?true:false} required/>    
            </Form.Group>
            <Form.Group className='mb-3' controlId='patientName'>
                <Form.Label>Patient Name</Form.Label>
                    <Form.Control type='text' className={!grantAccess&&'no-edit'} maxLength={20} name='name' value={formData.name}  onChange={handleChange} disabled={(!grantAccess)?true:false} required/>    
            </Form.Group>
            <Form.Group className='mb-3' controlId='description'>
                <Form.Label>Description</Form.Label>
                    <Form.Control as='textarea' className={!grantAccess&&'no-edit'}rows={3} name='desc' value={formData.desc} onChange={handleChange} disabled={(!grantAccess)?true:false} required/>
            </Form.Group>
            <Button variant='' type='reset' className='text-light clear-btn' onClick={handleReset} disabled={(!grantAccess)?true:false} >Clear</Button>
            <Button variant='light' type='submit' className='text-primary submit-btn' disabled={(!grantAccess)?true:false} >Submit</Button>
        </Form>
        <Link to='/' className='gohome-btn'><AiOutlineHome/></Link>
    </Container>
  )
}

export default EditPatient