import React from "react";
import ContactForm from "../../ContactForm";
import "./style.css";

function Contact() {
  
  return (
    <main className="container pl-5 pr-5">
      <section id="info" className="row no-gutters">

        <div id="info-intro" className="col-xs-12 col-sm-12 col-lg-4 offset-lg-4 text-center text-lg-left">
          <h2>Getting in Touch</h2>
        </div>

        <div className="col-12">
          <div className="info-entries row w-100 ml-0 ml-sm-0">
              <div id="skills" className="col-md-3 p-0 my-3">
                <h3>Social</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item pl-0"><a href="https://linkedin.com/in/paulashbylondon" target="blank">LinkedIn</a></li>
                  <li className="list-group-item pl-0"><a href="https://github.com/paulashby" target="blank">GitHub</a></li>
                </ul>
              </div>

              <div id="about" className="col-md-8 offset-md-1 my-3 px-0">
                <h3>Contact Form</h3>
                <ContactForm />
              </div>

            </div>
        </div>        

        </section>
    </main>    
  );
}

export default Contact;
