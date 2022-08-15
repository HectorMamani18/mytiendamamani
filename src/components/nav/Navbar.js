import './Nav.css'
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const navbar = () => {
  return (
   
    <Navbar   bg="primary"  variant="light "expand="lg">
      <Navbar.Toggle  aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className='navbar' id="basic-navbar-nav">
        <Nav className=" me-auto">
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href="/Catalogo">Catalogo</Nav.Link>
          
            
        </Nav>
      </Navbar.Collapse>
    
  </Navbar>
  
  );
}

export default navbar