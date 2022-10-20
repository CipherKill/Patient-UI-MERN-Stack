
import axios from 'axios'

const ADD_PATIENT_URL='http://localhost:3001/api/patients';

const addPatient=async (data)=>{
    const result=await axios.post(ADD_PATIENT_URL,data);
    return result;
};

const controller={
    addPatient
};

export default controller;