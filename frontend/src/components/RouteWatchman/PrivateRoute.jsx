import {Navigate,Outlet} from 'react-router-dom'
import AccessContext from '../../context/PrivateAccess/AccessContext'
import {useContext} from 'react'
import {toast} from 'react-toastify'

function PrivateRoute(){
    const {getFromLocalStorage}=useContext(AccessContext);

    if(getFromLocalStorage('token')){
        return <Outlet/>
    }
    else{
        toast.warning('You need admin permissions to do this.',{position:toast.POSITION.BOTTOM_RIGHT})
        return <Navigate to='/'/>
    }
}

export default PrivateRoute;