import './PatientMatrix.css'

import UserPlaceholder from '../../assets/placeholder-user.jpg'
import {useNavigate} from 'react-router-dom'

function PatientCard({name,patientId}) {

  const navigate=useNavigate();

  const handleClick=()=>{
    navigate(`/ourpatients/edit/${patientId}`);
  }

  return (
    <div className='card-container' onClick={handleClick}>
      <img src={UserPlaceholder} alt='placeholder' className='patient-image'/>
      <p className="patient-name">{name}</p>
    </div>
  )
}

export default PatientCard