import './Header.css'

import {Container,Navbar} from 'react-bootstrap'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose,AiOutlineArrowLeft} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import NavContext from '../../context/NavContext/navContext'

function Header(){

  const {pageName}=useContext(NavContext);

  const openNav=()=>{
    document.querySelector('#nav-area').style.width="100%";
    setTimeout(()=>{
      document.querySelectorAll('.opacity-control').forEach(node=>node.style.opacity=1);
    },300)
  };
  const closeNav=()=>{
    document.querySelector('#nav-area').style.width="0%"
    document.querySelectorAll('.opacity-control').forEach(node=>node.style.opacity=0);
  };

    return (
      <>
        <Navbar bg="" className='navbar-background'>
          <Container fluid>
            <Link className='brand-name' to='/'>RWD</Link>
            <h1 className='page-title'>{pageName}</h1>
            <span className='hamburger-menu' onClick={openNav}><GiHamburgerMenu/></span>
          </Container>
        </Navbar>
        <nav id='nav-area' className='nav-overlay'>
          <span className='closebtn link-hover opacity-control' onClick={closeNav}><AiOutlineClose/></span>
          <div className="overlay-content">
              <Link className='backhome-link link-hover opacity-control' to='/ourpatients' onClick={closeNav}><AiOutlineArrowLeft/> Home</Link>
              <Link className='links link-hover opacity-control' to='/about' onClick={closeNav}>ABOUT US</Link>
              <Link className='links link-hover opacity-control' to='/ourpatients' onClick={closeNav}>OUR PATIENTS</Link>
              <Link className='links link-hover opacity-control' to='/ourscience' onClick={closeNav}>OUR SCIENCE</Link>
              <Link className='links link-hover opacity-control' to='/events' onClick={closeNav}>EVENTS</Link>
          </div>
        </nav>
      </>
    );
}

export default Header;
