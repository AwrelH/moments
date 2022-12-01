import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import css from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar className={css.NavBar} bg="white" expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              className={css.NavLink}
              activeClassName={css.Active}
              exact
              to="/"
            >
              <i className="fa-solid fa-house"></i> Home
            </NavLink>
            <NavLink
              className={css.NavLink}
              activeClassName={css.Active}
              to="/signin"
            >
              <i className="fa-solid fa-right-to-bracket"></i> Sign in
            </NavLink>
            <NavLink
              className={css.NavLink}
              activeClassName={css.Active}
              to="/signup"
            >
              <i className="fa-solid fa-pen"></i> Sign up
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
