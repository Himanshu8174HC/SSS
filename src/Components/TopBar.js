import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form,Navbar,FormControl,Nav,NavDropdown } from 'react-bootstrap';

function TopBar(){
 return <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Student Support System</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Academic Problem</Nav.Link>
      <Nav.Link href="#pricing">General Problem</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Coding Problem
      </Nav.Link>
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Login</Nav.Link>
      <Nav.Link href="#deets">Sign Up</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
 </div>
}

export default TopBar;