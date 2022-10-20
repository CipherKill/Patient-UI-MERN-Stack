import './Admin.css'

import { Container } from "react-bootstrap"
import {useNavigate} from 'react-router-dom'
import {useState,useContext} from 'react'
import AccessContext from '../../context/PrivateAccess/AccessContext';
import { toast } from 'react-toastify';


function Admin() {

    const {checkKeyValid}=useContext(AccessContext);
    const [keyData,setKeyData]=useState('');
    const navigate=useNavigate()

    const handleChange=(e)=>setKeyData(e.target.value)

    //double click problem(just confirm this)
    const handleSubmit=(e)=>{
        e.preventDefault();
        checkKeyValid(keyData)
            .then(access=>{
                if(access){
                    toast.success('Admin access granted.')
                    navigate('/');
                }
                else{toast.error('Incorrect key!')}
            })
            .catch(err=>{
                toast.error('Internal Error! Contact administrator');
            })

    }

  return (
    <Container className='d-flex flex-column justify-content-center adjust-height admin-container'>
        <div className='admin-form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='key'>Enter key here:</label>
                <input type='password' maxLength={10} className='text-box' onChange={handleChange}/>
                <input type='submit' value='Insert Key' className='insert-button'/>
            </form>
        </div>
    </Container>
  )
}

export default Admin