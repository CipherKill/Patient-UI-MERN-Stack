import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header/Header'
import OurPatients from './pages/OurPatients/OurPatients'
import OurScience from './pages/OurScience/OurScience'
import Events from './pages/Events/Events'
import Aboutus from './pages/Aboutus/Aboutus'
import {NavProvider} from './context/NavContext/navContext'
import EditPatient from './pages/EditPatient/EditPatient';
import PrivateRoute from './components/RouteWatchman/PrivateRoute';
import {AccessProvider} from './context/PrivateAccess/AccessContext'
import Admin from './pages/Admin/Admin';
import { ToastContainer } from 'react-toastify';
import AddPatients from './pages/AddPatients/AddPatients';
import ButtonNav from './components/ButtonNavs/ButtonNav';
import UnknownPage from './pages/UnknownPage';

function App() {
  return (
    <AccessProvider>
    <NavProvider>
      <BrowserRouter>
        <div className='primary-background'>
          <Header/>
          <Routes>
              <Route path='/' element={<OurPatients/>}/>
              <Route path='/ourpatients' element={<OurPatients/>}/>
              <Route path='/ourscience' element={<OurScience/>}/>
              <Route path='/events' element={<Events/>}/>
              <Route path='/about' element={<Aboutus/>}/>
              <Route path='/admin/door' element={<Admin/>}/>
              <Route path='/*' element={<UnknownPage/>}/>
              <Route path='/ourpatients/edit/:id' element={<PrivateRoute/>}>
                <Route path='/ourpatients/edit/:id' element={<EditPatient/>}/>
              </Route>
              <Route path='/addpatients' element={<PrivateRoute/>}>
                <Route path='/addpatients' element={<AddPatients/>}/>
              </Route>
          </Routes>
          <ButtonNav/>
        </div>
      </BrowserRouter>
      <ToastContainer/>
    </NavProvider>
    </AccessProvider>
  );
}

export default App;
