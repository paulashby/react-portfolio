import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import { Jumbotron as ReactJumbotron } from 'bootstrap-4-react';
import "./style.css";
import avatar from "../../images/paul.svg";

function Header(props) {

  const { pathname } = useLocation();
  
  return (
    <header>

      <Navbar navLinks={props.navLinks} featured={props.featured}/>

      <section className="hero">

        <ReactJumbotron fluid="true"  className="pb-0">

          <div className="container pl-5 pr-5">

            <div className="row">

              <div className="col-12 col-lg-7  offset-lg-4 text-center text-lg-left">
                <h1 className="display-4">I&rsquo;m Paul Ashby</h1>
                <p className="lead">A self-motivated full stack developer leveraging a background in art direction to create clean, effective websites and interactive media. I&rsquo;m always honing my technical skills and love to take on a challenge.</p>
              </div>

              <div className={pathname === "/" ? "col-12 col-sm-6 offset-sm-3" : "col-6 offset-3 col-md-3 offset-md-4"}>
                <img src={avatar} alt="Paul Ashby avatar" title="Avatar" />
              </div>

            </div>

          </div>

        </ReactJumbotron>
        
      </section>

  </header>
  );
}

export default Header;