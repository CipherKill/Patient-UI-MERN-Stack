import './Admin.css'

import { Container } from "react-bootstrap"
import {useNavigate} from 'react-router-dom'
import {useState,useContext,useEffect} from 'react'
import AccessContext from '../../context/PrivateAccess/AccessContext';
import { toast } from 'react-toastify';
import NavContext from '../../context/NavContext/navContext';

function Admin() {

    const {doLogin,deleteStorage}=useContext(AccessContext);
    const {changePageNameTo}=useContext(NavContext);
    const [formData,setFormData]=useState(
        {
            username:'',
            password:''
        }
    );
    const navigate=useNavigate()

    useEffect(()=>changePageNameTo('Admin Login'))

    const handleChange=(e)=>{
        setFormData(prevData=>(
            {
                ...prevData,
                [e.target.name]:e.target.value
            }
        ));
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        doLogin(formData)
            .then(result=>{
                if(result){
                    toast.success('Access Granted!',{position:toast.POSITION.BOTTOM_RIGHT});
                }
                else{
                    toast.error('Access Denied!',{position:toast.POSITION.BOTTOM_RIGHT});
                }
                navigate('/');
            })
            .catch(err=>{
                toast.error('Access Denied!',{position:toast.POSITION.BOTTOM_RIGHT});
                navigate('/');
            })
    }

    const removeAccess=()=>{
        deleteStorage()
        toast.warning('Removed admin access!',{position:toast.POSITION.BOTTOM_RIGHT});
        navigate('/');
    };

  return (
    <Container className='d-flex flex-column justify-content-center adjust-height admin-container'>
        <div className='admin-form'>
            <form onSubmit={handleSubmit}>
                <div className='username-block mb-3'>
                    <label htmlFor='key'>Username:</label>
                    <input type='text' maxLength={10} className='text-box' name='username' value={formData.username} onChange={handleChange}/>
                </div>
                <div className='password-block'>
                    <label htmlFor='key'>&nbsp;Password:</label>
                    <input type='password' maxLength={10} className='text-box' name='password' value={formData.password} onChange={handleChange}/>
                </div>
                <input type='submit' value='Insert Key' className='insert-button'/>
                <button className='' onClick={removeAccess}>Remove Access</button>
            </form>
        </div>
    </Container>
  )
}

export default Admin