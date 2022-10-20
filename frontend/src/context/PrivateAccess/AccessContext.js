
import {createContext} from 'react'
import axios from 'axios'

const AccessContext=createContext();

export const AccessProvider=({children})=>{
    const API_URL='http://localhost:3001/api/admin/login';

    const doLogin=async (data)=>{
        const result=await axios.post(API_URL,data);
        sendToLocalStorage('token',result.data.token);
        if(result) return true;
        else return false;
    }

    const sendToLocalStorage=(label,data)=>localStorage.setItem(label, data);

    const getFromLocalStorage=(label)=>localStorage.getItem(label);

    const deleteStorage=()=>localStorage.clear();

    return <AccessContext.Provider value={
        {
            doLogin,
            getFromLocalStorage,
            deleteStorage
        }
    }>{children}</AccessContext.Provider>
};

export default AccessContext;