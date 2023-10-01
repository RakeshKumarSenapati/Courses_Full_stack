
import { Link, NavLink } from "react-router-dom";
import React from 'react';
import { Form, Nav, Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="dark" expand="lg">
        <Navbar.Brand style={{color:"white"}} to="/">Courses</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={{color:"white"}} className="nav-students" href="/course">Courses</Nav.Link>
            <Nav.Link style={{color:"white"}} className="nav-addStudents" href="/addcourse">Add Course</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default Header;