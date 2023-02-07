import React from "react";
import ContactForm from "../../ContactForm";
import "./style.css";

function Contact() {
  return (
    <main className="container pl-5 pr-5">
      <section id="info" className="row">

        <div id="info-intro" className="col-xs-12 col-sm-12 col-lg-4 offset-lg-4 text-center text-lg-left">
          <h2>Getting in Touch</h2>
          <p>Here are some more details about my skills and history. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quibusdam voluptas consequatur temporibus eaque! Est accusantium eligendi voluptatum culpa totam?
            Consequatur.</p>
        </div>

        <div className="info-entries row">

          <div id="skills" className="col-md-3 mt-3 mb-3">
            <h3>Other Channels</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item pl-0">LinkedIn</li>
              <li className="list-group-item pl-0">GitHub</li>
              <li className="list-group-item pl-0">paul@primitive.co</li>
            </ul>
          </div>

          <div id="about" className="col-md-8 offset-md-1 mt-3 mb-3">
            <h3>Contact Form</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sit eligendi impedit, cupiditate, quo
              tempora non quidem aperiam repellat cum voluptatem optio excepturi. Consectetur ex, minima iusto tenetur
              eaque harum?</p>
            <ContactForm />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sit eligendi impedit, cupiditate.</p>
          </div>

        </div>

        </section>
    </main>    
  );
}

export default Contact;
