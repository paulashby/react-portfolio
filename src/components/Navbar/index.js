import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./style.css";

function Navbar(props) {

  let activeClassName = "active";

  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/home"
        className="navbar-brand">
          <img
            src="/images/icon-code.svg"
            alt="Developer icon"
          />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNav" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto text-right mt-3 mt-lg-0">
            <li className="nav-item">
              <NavLink 
                to="/"
                className={({ isActive }) => 
                  isActive ? `nav-item nav-link ${activeClassName}` : "nav-item nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/pages/projectgallery"
                className={({ isActive }) => 
                  isActive ? `nav-item nav-link ${activeClassName}` : "nav-item nav-link"
                }
              >
                Project Gallery
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/pages/contact"
                className={({ isActive }) => 
                  isActive ? `nav-item nav-link ${activeClassName}` : "nav-item nav-link"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
  )

}

export default Navbar;

