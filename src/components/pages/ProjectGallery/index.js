import React, { Component } from "react";
import Project from "../../Project";
import ProjectFeatured from "../../ProjectFeatured";
import projects from "../../../data/projects.json";

class ProjectGallery extends Component {
  // Setting this.state.projects to the projects json array
  state = {
    projects,
    featured: "1"
  };
  
  viewProject = id => {
    this.setState({featured: id});
    const section = document.getElementById("featured-head");
    section.scrollIntoView( {behavior: "smooth", block: "start"} )
  }

  viewDeployed = (url, size) => {
      // If json entry has a window size, enter that here
      if(size.length) { window.open(url,"pagename",`resizable,${size}`); 
    }
  }

  render() {
    return (
      <main className="container pl-5 pr-5">

        <section id="work" className="row mb-5">

          <div id="work-intro" className="col-xs-12 col-sm-12 col-lg-4 offset-lg-4 text-center text-lg-left">
            <h2 id="featured-head">Featured Projects</h2>
            <p>This selection of work includes front end and full stack projects. Technologies include HTML5, CSS, Javascript, PHP, WordPress and Processwire.</p>
          </div>

          <div className="work-samples row">

          {/* Render featured project at top */}
          {
              this.state.projects
              .filter(project => project.id === this.state.featured)
              .map(project => {
                  return <ProjectFeatured
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    descriptor={project.descriptor}
                    inlineLinks={project.inlineLinks}
                    teaserImage={project.images.teaser}
                    description={project.description}
                    role={project.role}
                    deployedLink={project.deployedLink}
                    viewDeployed= {this.viewDeployed}
                    size={project.size}
                  />
            
              })
            }            

            {/* Render project list */}
            {
              this.state.projects
              .filter(project => project.id !== this.state.featured)
              .map(project => {
                  return <Project
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    descriptor={project.descriptor}
                    inlineLinks={project.inlineLinks}
                    teaserImage={project.images.teaser}
                    description={project.description}
                    role={project.role}
                    viewProject={this.viewProject}
                  />
            
              })
            }

          </div>
        </section>
      </main>
    );
  }
}

export default ProjectGallery;