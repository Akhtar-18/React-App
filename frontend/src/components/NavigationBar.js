import React, { Component } from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
//import {NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar(){
   
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container> 
  <Navbar.Brand href="#home">Brand</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      {/* <Link href="/">Home</Link>    
      <Link to="/">Home</Link>
      <Nav.Link href="/">Home</Nav.Link> 
      <Nav.Link to="/">Home</Nav.Link> 
      */}
      <Nav.Link href="/">Home</Nav.Link>
      <NavDropdown title="About" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/about">Intro</NavDropdown.Item>
        <NavDropdown.Item href="#about2">Features</NavDropdown.Item>
        <NavDropdown.Item href="#about3">About Team</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#about4">Help/Support</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/register">Sign Up</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        );
    
}

export default NavigationBar;
