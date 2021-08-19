import React, { Component } from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar(){
   
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Brand</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <NavDropdown title="About" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#about1">Intro</NavDropdown.Item>
        <NavDropdown.Item href="#about2">Features</NavDropdown.Item>
        <NavDropdown.Item href="#about3">About Team</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#about4">Help/Support</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#login">Login</Nav.Link>
      <Nav.Link href="#signup">Sign Up</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        );
    
}

export default NavigationBar;
