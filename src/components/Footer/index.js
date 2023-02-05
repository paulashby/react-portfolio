import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer(props) {
  return (
    <footer className="page-footer font-small pt-4 pb-4 bg-dark">

      <div className="footer-content container pl-5 pr-5 mt-3 mb-5">

        <div className="row">

          <div id="testimonials" className="order-md-2 col-md-7 offset-md-1 pl-0 pr-0 mt-3 mb-3">
            <blockquote className="font-italic">
              &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quasi. Soluta, natus error
              quasi provident possimus suscipit in? Ea voluptate eligendi fuga debitis consectetur? Vero ipsum corporis
              quod
              nemo reiciendis.&rdquo;
            </blockquote>
            <p>J. Smith, Marketing Director, AcmeCo</p>
          </div>

          <div id="legal" className="col-md-3 pl-0 pr-0">
            <ul className="pl-0">
              <li>
                <Link to={"/pages/terms"} activeClassName="active">Terms of Use</Link>
              </li>
              <li>
                <Link to={"/pages/privacy"} activeClassName="active">Privacy Policy</Link>
              </li>
              <li>
                All content &#169; Paul Ashby, 2022
              </li>
            </ul>
          </div>

        </div>

      </div>

    </footer>
    
  );
}

export default Footer;