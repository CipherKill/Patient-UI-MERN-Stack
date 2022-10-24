import './EditPatient.css'

import {useParams,Link, useNavigate} from 'react-router-dom'
import controller from './EditController'
import {Form,Container,Button} from 'react-bootstrap'
import {useState,useEffect,useContext} from 'react'
import NavContext from '../../context/NavContext/navContext'
import { toast } from 'react-toastify';
import {AiOutlineHome} from 'react-icons/ai'
import AccessContext from '../../context/PrivateAccess/AccessContext'
import {RiDeleteBin5Line} from 'react-icons/ri'
import {BiArrowBack} from 'react-icons/bi'

function EditPatient() {

    const {changePageNameTo}=useContext(NavContext);
    const {getFromLocalStorage}=useContext(AccessContext);
    const navigate=useNavigate();
    const PAGE_NAME='Edit patient';
    const [grantAccess,setGrantAccess]=useState(false)

    const {id}=useParams();
    const [showHome,setShowHome]=useState(false);
    const [formData,setFormData]=useState({
        patientId:'',
        name:'',
        desc:''
    })

    useEffect(()=>{
        changePageNameTo(PAGE_NAME);
        controller.getPatientDetails(id,getFromLocalStorage('token')).then(data=>{
            setFormData(data);
            setGrantAccess(true);
        })
        .catch(err=>toast.warning('Something went wrong',{position:toast.POSITION.BOTTOM_RIGHT}));
    },[changePageNameTo,id,getFromLocalStorage]);
    
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
                ...prevData,
                name:'',
                desc:''
            }
        ));
        setShowHome(false);
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(controller.checkInputs(formData.name,formData.desc)&&grantAccess){
            controller.updatePatient(formData,getFromLocalStorage('token'))
                .then(response=>{
                    toast.success('Updated Successfully!',{position:toast.POSITION.BOTTOM_RIGHT});
                    setShowHome(true);
                    setTimeout(()=>navigate('/'),5000);//may need to remove this
                })
                .catch(err=>{
                    toast.error('Error Updating!',{position:toast.POSITION.BOTTOM_RIGHT});
                })
        }
        else{
            toast.error('Bad inputs! Check Again',{position:toast.POSITION.BOTTOM_RIGHT});
        }
    }

    const handleDelete=()=>{
        if(window.confirm('Are you sure you want to delete this patient?')){
            controller.deletePatient(id,getFromLocalStorage('token'))
                .then(result=>{
                    toast.success('Deleted Patient!',{position:toast.POSITION.BOTTOM_RIGHT})
                    navigate('/');
                })
                .catch(err=>{
                    toast.error('Could not delete patient!',{position:toast.POSITION.BOTTOM_RIGHT});
                })
        }
        else{
            console.log('cancelled')
        }
    }

    const handleBack=()=>navigate('/');

  return (
    <Container className='edit-container'>
        {(grantAccess)&&(<button className='back-btn' onClick={handleBack}><BiArrowBack/></button>)}
        {(grantAccess)&&(<button className='delete-btn' onClick={handleDelete}><RiDeleteBin5Line/></button>)}
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='patientName'>
                <Form.Label>Patient Name</Form.Label>
                    <Form.Control type='text' className={!grantAccess&&'no-edit'} maxLength={20} name='name' value={formData.name}  onChange={handleChange} disabled={(showHome||!grantAccess)?true:false} required/>    
            </Form.Group>
            <Form.Group className='mb-3' controlId='description'>
                <Form.Label>Description</Form.Label>
                    <Form.Control as='textarea' className={!grantAccess&&'no-edit'}rows={3} name='desc' value={formData.desc} onChange={handleChange} disabled={(showHome||!grantAccess)?true:false} required/>
            </Form.Group>
            <Button variant='' type='reset' className='text-light clear-btn' onClick={handleReset} disabled={(showHome||!grantAccess)?true:false} >Clear</Button>
            <Button variant='light' type='submit' className='text-primary submit-btn' disabled={(showHome||!grantAccess)?true:false} >Submit</Button>
        </Form>
        {(showHome||!grantAccess)&&(<Link to='/' className='gohome-btn'><AiOutlineHome/></Link>)}
    </Container>
  )
}

export default EditPatient