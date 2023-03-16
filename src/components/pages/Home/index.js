import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Home() {

  return (
    <main className="container pl-5 pr-5">
      <section id="info" className="row no-gutters">

        <div id="info-intro" className="col-xs-12 col-sm-12 col-lg-4 offset-lg-4 text-center text-lg-left">
          <p id="status" className="text-lg">I recently earned an edX certificate in front end development, where I honed my HTML, CSS and JavaScript skills.
            Course projects also involved the use of server APIs, React.js, Bootstrap and Tailwind CSS.</p>
        </div>

        <div className="col-12">
          <div className="info-entries row w-100 ml-0">
            <div id="skills" className="col-md-3 p-0 my-3">
              <h3>Technical Skills</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item pl-0">HTML5</li>
                <li className="list-group-item pl-0">CSS3</li>
                <li className="list-group-item pl-0">Bootstrap</li>
                <li className="list-group-item pl-0">JavaScript</li>
                <li className="list-group-item pl-0">jQuery</li>
                <li className="list-group-item pl-0">React.js</li>
                <li className="list-group-item pl-0">WordPress CMS</li>
                <li className="list-group-item pl-0">Processwire CMS</li>
                <li className="list-group-item pl-0">PHP</li>
                <li className="list-group-item pl-0">Python</li>
                <li className="list-group-item pl-0">Git</li>
                <li className="list-group-item pl-0">Adobe Photoshop</li>
                <li className="list-group-item pl-0">Adobe Illustrator</li>
                <li className="list-group-item pl-0">Adobe InDesign</li>
              </ul>
            </div>

            <div id="about" className="col-md-8 offset-md-1 my-3 px-0">
              <h3>Interpersonal Skills</h3>
              <ul className="pl-0">
                <li className="ml-3 mb-2">Creativity</li>
                <li className="ml-3 mb-2">Verbal communication</li>
                <li className="ml-3 mb-2">Organisation</li>
                <li className="ml-3 mb-2">Collaboration</li>
                <li className="ml-3 mb-2">Research and planning</li>
                <li className="ml-3 mb-2">People management</li>
                <li className="ml-3 mb-4">Client liaison</li>
              </ul>


              <h3>Experience</h3>
              <ul className="pl-0 mb-4">
                <li className="ml-3 mb-2">Development of commercial websites making use of PHP, HTML5, CSS3, JavaScript and jQuery</li>
                <li className="ml-3 mb-2">Development of interactive applications for use in public spaces, including for the multi-award-winning exhibition on board the Cutty Sark</li>
                <li className="ml-3 mb-2">Graphic design for many high profile museum exhibitions working as subcontractor for <a href="https://designmap.co.uk/" target="blank" >Designmap</a></li>
                <li className="ml-3 mb-2">Two years working as Art Director of 20-strong Art department</li>
              </ul>

              <h3>Contact</h3>
              <p>If you&#39;d like to get in touch, please check my <Link to={"contact"}>Contact page</Link></p>
            </div>

          </div>
        </div>

      </section>
    </main>
  );
}

export default Home;
