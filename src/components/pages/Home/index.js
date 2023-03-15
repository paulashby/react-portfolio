import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Home() {

  return (
    <main className="container pl-5 pr-5">
      <section id="info" className="row">

        <div id="info-intro" className="col-xs-12 col-sm-12 col-lg-6 offset-lg-4 text-center text-lg-left">
          <p id="status" className="text-lg">I recently earned an edX certificate in front end development, where I honed my HTML, CSS and JavaScript skills.
            Course projects also involved the use of server APIs, React.js, Bootstrap and Tailwind CSS.</p>
        </div>

        <div className="info-entries row">

          <div id="skills" className="col-md-3 mt-3 mb-3">
            <h3>Technical Skills</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item pl-0">HTML5</li>
              <li className="list-group-item pl-0">CSS3</li>
              <li className="list-group-item pl-0">Bootstrap</li>
              <li className="list-group-item pl-0">JavaScript</li>
              <li className="list-group-item pl-0">jQuery</li>
              <li className="list-group-item pl-0">Node.js</li>
              <li className="list-group-item pl-0">React.js</li>
              <li className="list-group-item pl-0">WordPress CMS</li>
              <li className="list-group-item pl-0">Processwire CMS</li>
              <li className="list-group-item pl-0">PHP</li>
              <li className="list-group-item pl-0">Python</li>
              <li className="list-group-item pl-0">Git</li>
              <li className="list-group-item pl-0">Adobe Photoshop</li>
              <li className="list-group-item pl-0">Adobe Illustrator</li>
              <li className="list-group-item pl-0">Adobe InDesign</li>
              <li className="list-group-item pl-0">Blender 3D</li>
            </ul>
          </div>

          <div id="about" className="col-md-8 offset-md-1 mt-3 mb-3">
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
            <p className="mb-3">The <Link to={"projectgallery"}>Project Gallery</Link> showcases examples of some of the web sites I've designed and developed.</p>

            <h4>Freelance Interactive Developer</h4>
            <p>I've also developed a number of interactive applications for use in public spaces, including the multi-award-winning permanent exhibition on board the Cutty Sark.
              Projects required:
            </p>
            <ul className="pl-0 mb-4">
              <li className="ml-3 mb-2">Utilisation of art direction skills to ensure visual consistency with wider design scheme</li>
              <li className="ml-3 mb-2">Creation of visual assets for entire projects</li>
              <li className="ml-3 mb-2">Incorporation of additional technologies to extend Flash capabilities</li>
              <li className="ml-3 mb-2">Research and implemention of animation optimisations for full screen graphics</li>
            </ul>

            <h4>Freelance Exhibition Designer</h4>
            <p>Graphic design for many high profile museum exhibitions as subcontractor for <a href="https://designmap.co.uk/" target="blank" >Designmap</a>.</p>
            <ul className="pl-0 mb-4">
              <li className="ml-3 mb-2">Developed overall graphic identities</li>
              <li className="ml-3 mb-2">Presented concepts and liaised with client throughout process</li>
              <li className="ml-3 mb-2">Attended site visits with 3D designers and production contractors</li>
              <li className="ml-3 mb-2">Collaborated closely with curation staff on production of graphics</li>
            </ul>

            <h4>Art Director of 20-strong Art department</h4>
            <p>Graphic design for many high profile museum exhibitions as subcontractor for <a href="https://designmap.co.uk/" target="blank" >Designmap</a>.</p>
            <ul className="pl-0 mb-4">
              <li className="ml-3 mb-2">Improved Art Department efficiency by implementing a system whereby newly-recruited junior designers produced the various forms and marketing materials required for new project launches. This allowed Art Editors to focus on more creative tasks and had the added benefit of streamlining the recruitment and mentoring process</li>
              <li className="ml-3 mb-2">Art directed and oversaw the running of many of the company’s most successful titles</li>
              <li className="ml-3 mb-2">Ensured design teams met deadlines and were adequately staffed</li>
              <li className="ml-3 mb-2">Liaised with management and attended weekly strategy meetings</li>
            </ul>

            <h3>Contact</h3>
            <p>If you&#39;d like to get in touch, please check my <Link to={"contact"}>Contact page</Link></p>
          </div>

        </div>

      </section>
    </main>
  );
}

export default Home;
