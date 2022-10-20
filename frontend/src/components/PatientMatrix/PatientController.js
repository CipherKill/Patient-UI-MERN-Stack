
import axios from 'axios'


const API_URL='http://localhost:3001/api/patients';
const ENTRIES_PER_PAGE=6;


const getAllPatients=async()=>{
    const response=await axios.get(API_URL);
    return response.data;
}

const getPageLimit=async()=>{
    const response=await axios.get(`${API_URL}/paging/getpagescount/${ENTRIES_PER_PAGE}`);
    return response.data;
}

const getPatientForPage=async(pageNumber)=>{
    const response=await axios.get(`${API_URL}/paging/page/${ENTRIES_PER_PAGE}/${pageNumber}`);
    return response.data;
}

const controller={
    getAllPatients,
    getPatientForPage,
    getPageLimit
};

export default controller;