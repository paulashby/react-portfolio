import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Project from "../../Project";
import ProjectFeatured from "../../ProjectFeatured";
import projects from "../../../data/projects.json";
import "./style.css";

function ProjectGallery() {

  const viewDeployed = (url, size) => {
    // Use window size if provided
    if (size.length) {
      window.open(url, "pagename", `resizable,${size}`);
    }
  };


  return (
    <main className="container pl-5 pr-5">

      <section id="work" className="row mb-5">

        <div id="work-intro" className="col-xs-12 col-sm-12 col-lg-4 offset-lg-4 text-center text-lg-left">
          <h2 id="featured-head">Featured Projects</h2>
          <p>This selection of work includes front end and full stack projects. Technologies include HTML5, CSS, Javascript, PHP, WordPress and Processwire.</p>
        </div>

        <div className="row" id="work-samples">

          <Routes>
            {projects.map(project => {
              project.viewDeployed = viewDeployed;
              return <Route path={project.name} key={project.id} element={<ProjectFeatured project={project} />} />
            })}
          </Routes>

          <ul id="project-list" className="row ml-0 mr-0">
            {projects.map(project => {
              return <li key={project.id} className={`col-md-6 col-lg-4 mt-3 mb-3 project-link`} id={project.name}>
                <NavLink to={project.name}>
                  {<Project project={project} />}
                </NavLink>
              </li>
            })}
          </ul>
        </div>
      </section>
    </main>
  );

}

export default ProjectGallery;