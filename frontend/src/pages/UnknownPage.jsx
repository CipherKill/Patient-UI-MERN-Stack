import {Container} from 'react-bootstrap'

function UnknownPage() {

    const styling={
        textAlign:'center',
        fontSize:'220%',
        margin:'10rem auto',
        color:'whitesmoke',
        backgroundColor:'rgba(0,100,100,0.5)',
        borderRadius:'2rem'
    }

  return (
    <Container style={styling}>Nothing to see here</Container>
  )
}

export default UnknownPage