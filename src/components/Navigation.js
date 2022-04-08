import React from 'react'
import {Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo.png'; 

const Navigation = () => {
  return (
    <div>
        <Navbar bg="light" expand="lg">
  <Container>
  <Navbar.Brand>
     <img src={logo} style={{width:50, height: 50}} />
      </Navbar.Brand>
    <Navbar.Brand href="#home">Irvens Portfolio</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">

     <LinkContainer to="/">
     <Nav.Link >Home</Nav.Link>
     </LinkContainer>
     < LinkContainer to="/about">
     <Nav.Link >About Me </Nav.Link>
     </LinkContainer>
     < LinkContainer to="/portfolio">
     <Nav.Link >Portfolio </Nav.Link>
     </LinkContainer>
     < LinkContainer to="/resume">
     <Nav.Link >Resume </Nav.Link>
     </LinkContainer>
     < LinkContainer to="/contact">
     <Nav.Link >Contact </Nav.Link>
     </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Navigation