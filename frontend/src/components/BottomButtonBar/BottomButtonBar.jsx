import './BottomButtonBar.css'

import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function BottomButtonBar({active}) {
  return (
    <Container className='bottom-button-bar'>
        <Link to='/about' className={'buttons '+((active==='1')&&'marked')}>About</Link>
        <Link to='/indications' className={'buttons '+((active==='2')&&'marked')}>Indications</Link>
        <Link to='/abstract' className={'buttons '+((active==='3')&&'marked')}>Abstract</Link>
        <Link to='/milestones' className={'buttons '+((active==='4')&&'marked')}>Milestones</Link>
        <Link to='/device' className={'buttons '+((active==='5')&&'marked')}>Device</Link>
    </Container>
  )
}

export default BottomButtonBar