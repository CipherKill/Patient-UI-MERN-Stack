import axios from 'axios'

const API_URL='http://localhost:3001/api/patients'

const generateHeader=(token)=>({headers:{Authorization:`Bearer ${token}`}});

const getPatientDetails=async (patientId,token)=>{
    const response=await axios.get(`${API_URL}/${patientId}`,generateHeader(token));
    return response.data[0];
}

const updatePatient=async (data,token)=>{
    const response=await axios.put(`${API_URL}/${data.patientId}`,data,generateHeader(token));
    return response;
}

const deletePatient=async (patientId,token)=>{
    const response=await axios.delete(`${API_URL}/${patientId}`,generateHeader(token));
    return response;
}

//misc functions
const checkName=(name)=>{
    const PATTERN=/^[A-Z][A-Za-z ]{3,20}$/;
    return PATTERN.test(name);
};

const checkDescription=(desc)=>{
    const PATTERN=/^[A-Za-z0-9 .,]+$/;
    return PATTERN.test(desc)
};

const checkInputs=(name,desc)=>{
    const check1=checkName(name);
    const check2=checkDescription(desc);
    if((check1&&check2)===true){
        return true;
    }
    else{
        return false;
    }
}

const controller={
    getPatientDetails,
    updatePatient,
    checkInputs,
    deletePatient
};

export default controller;