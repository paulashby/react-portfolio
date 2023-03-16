import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {

  const year = new Date().getFullYear();
  
  return (
    <footer className="page-footer font-small pt-4 pb-4 bg-dark">

      <div className="footer-content container pl-5 pr-5 mt-3 mb-5">

        <div className="row no-gutters">

          <div id="testimonials" className="order-md-2 col-md-8 offset-md-1 pl-0 pr-0 mt-3 mb-3">
            <blockquote className="font-italic">
              &ldquo;Paul is outstandingly creative and a pleasure to work with. I cannot praise his talents or his attitude highly enough.&rdquo;
            </blockquote>
            <p>Des Kelly, Chief Reporter and interviewer for British broadcaster, BT Sport.</p>
          </div>

          <div id="legal" className="col-md-3 pl-0 pr-0">
            <ul className="pl-0">
              <li>
                <Link to={"./docs/PaulAshbyCV.pdf"} className="download" target="_blank" download>Download my CV</Link>
              </li>
              <li>
                All content &#169; Paul Ashby, {year}
              </li>
            </ul>
          </div>

        </div>

      </div>

    </footer>
    
  );
}

export default Footer;