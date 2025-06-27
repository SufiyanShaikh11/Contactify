import React from 'react';
import { Container, Navbar as BSNavbar, Nav } from 'react-bootstrap';

const Navbar = () => {
  return (
    <BSNavbar bg="dark" variant="dark" fixed="top">
      <Container>
        <BSNavbar.Brand href="#">Contactify</BSNavbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#">Home</Nav.Link>
        </Nav>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
