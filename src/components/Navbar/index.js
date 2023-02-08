import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar as ReactNavbar, Nav, Collapse } from 'bootstrap-4-react';
import "./style.css";
import icon from "../../images/icon-code.svg";

function Navbar(props) {

  return (
      <ReactNavbar className="navbar-expand-lg navbar-dark bg-dark">
        <Link to="/"
        className="navbar-brand">
          <img
            src={icon}
            alt="Developer icon"
          />{" "}
          Paul Ashby
        </Link>
        
        <ReactNavbar.Toggler target="#navbarNav" />

        <Collapse navbar id="navbarNav">
          <ReactNavbar.Nav className="text-right ml-auto mt-3 mt-lg-0">

            <Nav.Item>
              <NavLink
              to="projectgallery"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
                Project Gallery
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
                Contact
              </NavLink>
            </Nav.Item>
            
          </ReactNavbar.Nav>
        </Collapse>
      </ReactNavbar>
  )
}

export default Navbar;

