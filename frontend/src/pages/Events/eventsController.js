
import axios from 'axios'

const API_URL='http://localhost:3001/api/mailing';

const addMail=async (data)=>{
    try{
        const result=await axios.post(`${API_URL}/add`,data);
        return result;
    }
    catch(err){
        console.log(err);
    }

};

const controller={
    addMail
};

export default controller;