import React from 'react'
import {Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo.png'; 

const Navigation = () => {
  return (
    <div>
        <Navbar bg="dark" expand="lg">
  <Container>
  <Navbar.Brand>
  < LinkContainer to="/about">
     <img src={logo} style={{width:50, height: 50}} />
     </LinkContainer>
      </Navbar.Brand>
    <Navbar.Brand className="text-light" href="/about">Irvens Portfolio</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
     < LinkContainer to="/about">
     <Nav.Link className="text-light">About Me </Nav.Link>
     </LinkContainer>
     < LinkContainer to="/portfolio">
     <Nav.Link className="text-light">Portfolio </Nav.Link>
     </LinkContainer>
     < LinkContainer to="/resume">
     <Nav.Link className="text-light">Resume </Nav.Link>
     </LinkContainer>
     < LinkContainer to="/contact">
     <Nav.Link className="text-light">Contact </Nav.Link>
     </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Navigation