import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="navbar-dark ">
      <Container>
        <NavLink className="nav-link " to="/">
          Posts
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link  " to="/user">
              Users
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
