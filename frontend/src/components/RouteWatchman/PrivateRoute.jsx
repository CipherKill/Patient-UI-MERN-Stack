import {Navigate,Outlet} from 'react-router-dom'
import AccessContext from '../../context/PrivateAccess/AccessContext'
import {useContext} from 'react'
import {toast} from 'react-toastify'

function PrivateRoute(){
    const {grantAccess}=useContext(AccessContext);
    const authState=grantAccess;

    if(authState===true){
        return <Outlet/>
    }
    else{
        toast.warning('You need admin permissions to do this.',{position:toast.POSITION.BOTTOM_RIGHT})
        return <Navigate to='/'/>
    }
}

export default PrivateRoute;