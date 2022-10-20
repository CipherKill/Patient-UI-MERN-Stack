
import {createContext, useState} from 'react'

const NavContext=createContext();

export const NavProvider=({children})=>{
    const [pageName,setPageName]=useState('');

    const changePageNameTo=(name)=>{
        setPageName(name);
    };

    return <NavContext.Provider value={
        {
            pageName,
            changePageNameTo
        }
    }>{children}</NavContext.Provider>
};

export default NavContext;