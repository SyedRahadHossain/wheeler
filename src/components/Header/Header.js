import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className=""
      >
        <Container>
          <Navbar.Brand>
            <NavLink
              className="text-white fs-3 text-decoration-none"
              to="/home"
            >
              Wheeler
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto me-5 p-3 fs-5 text-decoration-none">
              <NavLink
                className="text-decoration-none text-white me-4"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className="text-decoration-none text-white me-4"
                to="/allServices"
              >
                Services
              </NavLink>
              <NavLink
                className="text-decoration-none text-white me-4"
                to="/about"
              >
                About Us
              </NavLink>
              <NavLink
                className="text-decoration-none text-warning"
                to="/enroll"
              >
                Enroll Now!
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>{" "}
    </div>
  );
};

export default Header;
