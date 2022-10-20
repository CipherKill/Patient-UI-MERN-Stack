import './Spinner.css'

import loading from '../../assets/LoadingImages/loading.gif'

function Spinner() {
  return (
    <div className='loading-container'><img src={loading} alt='loading...'/></div>
  )
}

export default Spinner