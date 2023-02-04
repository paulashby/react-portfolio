import React from "react";
import { NavLink } from "react-router-dom";
// import "./style.css";

function Navbar(props) {

  let activeClassName = "active";

  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-nav">
        <NavLink 
            to="/"
            className={({ isActive }) => 
              isActive ? `nav-item nav-link ${activeClassName}` : "nav-item nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/pages/projectgallery"
            className={({ isActive }) => 
              isActive ? `nav-item nav-link ${activeClassName}` : "nav-item nav-link"
            }
          >
            Project Gallery
          </NavLink>
          <NavLink 
            to="/pages/contact"
            className={({ isActive }) => 
              isActive ? `nav-item nav-link ${activeClassName}` : "nav-item nav-link"
            }
          >
            Contact
          </NavLink>
        </div>        
      </nav>
  );
}

export default Navbar;

