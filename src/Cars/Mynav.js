import React from "react";
import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";

const Mynav = () => {
  return (
    <div className="navCl">
      <Navbar bg="light" variant="light">
        <Container>
          <img className="logo" src="./img/logo.png" alt="logo"></img>
          <Navbar.Brand className="nave" href="#home">
            Home
          </Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link className="iitem" href="#home">
              Shop
            </Nav.Link>
            <Nav.Link className="iitem" href="#features">
              Contact{" "}
            </Nav.Link>
            <Nav.Link className="iitem" href="#pricing">
              about
            </Nav.Link>
          </Nav>
          <svg
            className="header-footer-icon"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
          <svg
            className="header-footer-icon header-footer-icon--priority"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </Container>
      </Navbar>
    </div>
  );
};

export default Mynav;
