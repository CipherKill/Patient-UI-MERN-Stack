
import {AiFillRightCircle,AiFillLeftCircle} from 'react-icons/ai'
import PatientCard from './PatientCard'
import controller from './PatientController'
import {useEffect,useState} from 'react'
import Spinner from '../Loadings/Spinner';

function PatientMatrix() {

  const [patientData,setPatientData]=useState([]);
  const [pageNumber,setPageNumber]=useState(1);
  const [pageLimit,setPageLimit]=useState(0);
  const [isLoading,setLoading]=useState(true);

  useEffect(()=>{
    controller.getPatientForPage(1).then(data=>{
      setPatientData(data);
      setLoading(false);
    });
    controller.getPageLimit().then(data=>setPageLimit(data));
  },[])
  
  useEffect(()=>{
    controller.getPatientForPage(pageNumber).then(data=>setPatientData(data));
  },[pageNumber]);
  

  const goPreviousPage=()=>{
    fade(0)
    setTimeout(()=>setPageNumber(pageNumber-1),100);
    setTimeout(()=>fade(1),500);
  };
  const goNextPage=()=>{
    fade(0)
    setTimeout(()=>setPageNumber(pageNumber+1),100);
    setTimeout(()=>fade(1),500);
  }

  const fade=(mode)=>{
    const matrixArea=document.querySelector('.patient-data-area');
    matrixArea.style.opacity=mode;
  }

  if(isLoading){
    return <Spinner/>
  }
  else{
    return (
      <>
      <div className="carousal-container">
        <div className='main-area'>
          {(pageNumber>1)&&<span className='left-arrow' onClick={goPreviousPage}><AiFillLeftCircle/></span>}
          <div className='patient-data-area'>
              {patientData.map(data=>(
                  <PatientCard name={data.name} patientId={data.patientId} key={data._id}/>
              ))}
          </div>
          {(pageNumber<pageLimit)&&<span className='right-arrow' onClick={goNextPage}><AiFillRightCircle/></span>}
        </div>
      </div>
      </>
    )
  }
}

export default PatientMatrix