import './BottomNavbar.css'

import {BsThreeDots} from 'react-icons/bs'
import {Link} from 'react-router-dom'

function BottomNavbar({active}) {

    /*
    Note: These are "active" prop options
    1 -> About
    2 -> Indications
    3 -> Abstracts
    4 -> Milestones
    5 -> Device
    */

    const expandNav=()=>{
        const navNode=document.querySelector('#bottom-navbar');
        if(navNode.classList.length===0){
          navNode.classList.add('responsive-mode'); //not working
        }
        else{
          navNode.classList.remove('responsive-mode');
        }
      };

  return (
    <div id='bottom-navbar' className=''>
        <Link to='/about' className={'nav-item '+(active==='1'&&'active')}>About</Link>
        <Link to='/indications' className={'nav-item '+(active==='2'&&'active')}>Indications</Link>
        <Link to='/abstracts' className={'nav-item '+(active==='3'&&'active')}>Abstracts</Link>
        <Link to='/milestones' className={'nav-item '+(active==='4'&&'active')}>Milestones</Link>
        <Link to='/device' className={'nav-item '+(active==='5'&&'active')}>Device</Link>
        <button onClick={expandNav} className='expand-icon'><BsThreeDots/></button>
    </div>
  )
}

export default BottomNavbar