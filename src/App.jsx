import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Navbar ,NavDropdown,Nav} from 'react-bootstrap'
import Show from './task'

function App() {
  
  const [show,setshow]=useState('')
  const [arr, setArr] = useState([])
  const first=(e)=>
    setshow(e.target.value)
  const submit1=(e)=>{
     e.preventDefault()
      setArr((a)=>([...a,show])) 
      
      
  }

  return (
    <>
      <Navbar expand="lg" bg="warning" variant="light">
        <Container>
          
        
        <Navbar.Brand  >TODO LISTS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link  >Home</Nav.Link>

            <NavDropdown id="basic-nav-dropdown" >
              <NavDropdown.Item >remainder </NavDropdown.Item>
              <NavDropdown.Item  >
                Another remainder
              </NavDropdown.Item >
              <NavDropdown.Divider />
              <NavDropdown.Item>
                Separated remainder
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
           </Navbar.Collapse>
           </Container>
      </Navbar>
    <Container className='text-center mt-5'>
    
    <h1>Task Reminder</h1>
    
    <form className='text-center' onSubmit={submit1} >
    <h4 className='d-inline'>Enter your Task: </h4>
      <input className='m-3' type="text" name="task" id="inp" value={show} onChange={first}/>
      
      <Button variant="primary" type='submit' >
        Add Task
      </Button>
    </form>
     <Show array={arr} inp={setshow} setarr={setArr}/>
     
     
    </Container>
    </>
  )
}

export default App
