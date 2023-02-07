import React from "react";
import { Link } from "react-router-dom";
import { Navbar as ReactNavbar, Nav, Collapse } from 'bootstrap-4-react';
import "./style.css";

function Navbar(props) {

  return (
      <ReactNavbar className="navbar-expand-lg navbar-dark bg-dark">
        <Link to="/"
        className="navbar-brand">
          <img
            src="/images/icon-code.svg"
            alt="Developer icon"
          />{" "}
          Paul Ashby
        </Link>
        
        <ReactNavbar.Toggler target="#navbarNav" />

        <Collapse navbar id="navbarNav">
          <ReactNavbar.Nav className="text-right ml-auto mt-3 mt-lg-0">
            <Nav.Item>
              <Nav.Link href="/pages/projectgallery">Project Gallery</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/pages/contact">Contact</Nav.Link>
            </Nav.Item>
          </ReactNavbar.Nav>
        </Collapse>
      </ReactNavbar>
  )
}

export default Navbar;

