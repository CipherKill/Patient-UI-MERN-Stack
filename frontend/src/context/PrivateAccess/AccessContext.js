
import {createContext,useState} from 'react'
import axios from 'axios'

const AccessContext=createContext();

export const AccessProvider=({children})=>{
    const [grantAccess,setGrantAccess]=useState(false);
    const API_URL='http://localhost:3001/api/admin/checkpassword';

    const checkKeyValid=async (key)=>{
        try{
            let result=await axios.post(API_URL,{key});
            if(result.data===1){
                setGrantAccess(true);
                return true;
            }
            else{
                setGrantAccess(false);
            }
            return false;
        }
        catch(err){
            setGrantAccess(false);
        }
    }

    return <AccessContext.Provider value={
        {
            checkKeyValid,
            grantAccess
        }
    }>{children}</AccessContext.Provider>
};

export default AccessContext;