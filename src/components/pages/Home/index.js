import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Home() {
  return (
    <main className="container pl-5 pr-5">
      <section id="info" className="row">

        <div id="info-intro" className="col-xs-12 col-sm-12 col-lg-4 offset-lg-4 text-center text-lg-left">
          <h2>More info</h2>
          <p>Here are some more details about my skills and history. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quibusdam voluptas consequatur temporibus eaque! Est accusantium eligendi voluptatum culpa totam?
            Consequatur.</p>
        </div>

        <div className="info-entries row">

          <div id="skills" className="col-md-3 mt-3 mb-3">
            <h3>Skills</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item pl-0">HTML5</li>
              <li className="list-group-item pl-0">CSS3</li>
              <li className="list-group-item pl-0">Bootstrap</li>
              <li className="list-group-item pl-0">UIKit</li>
              <li className="list-group-item pl-0">JavaScript</li>
              <li className="list-group-item pl-0">jQuery</li>
              <li className="list-group-item pl-0">Node.js</li>
              <li className="list-group-item pl-0">React</li>
              <li className="list-group-item pl-0">PHP</li>
              <li className="list-group-item pl-0">Python</li>
            </ul>
          </div>

          <div id="about" className="col-md-8 offset-md-1 mt-3 mb-3">
            <h3>About Me</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sit eligendi impedit, cupiditate, quo
              tempora non quidem aperiam repellat cum voluptatem optio excepturi. Consectetur ex, minima iusto tenetur
              eaque harum?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laudantium aspernatur quod magni a?
              Quibusdam nobis exercitationem necessitatibus, quia, rem optio tempore reiciendis officia consequuntur
              maiores, soluta cumque architecto voluptates.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus totam a vel recusandae. Magni numquam
              nostrum nemo praesentium neque odio dolores autem sed facilis alias quod, dolorum unde, nam nobis?</p>

            <h3>Contact</h3>
            <p>If you&#39;d like to get in touch, please check my <Link to={"/pages/contact"} activeClassName="active">Contact page</Link></p>
          </div>

        </div>

        </section>
    </main>    
  );
}

export default Home;
