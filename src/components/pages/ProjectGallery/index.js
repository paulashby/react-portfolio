import React, { Component } from "react";
import Project from "../../Project";
import ProjectFeatured from "../../ProjectFeatured";
import projects from "../../../data/projects.json";

class ProjectGallery extends Component {
  // Setting this.state.projects to the projects json array
  state = {
    projects,
    featured: false
  };
  
  viewProject = id => {
    this.setState({featured: id});
  }

  render() {
    return (
      <main className="container pl-5 pr-5">

        <section id="work" className="row mb-5">

          <div id="work-intro" className="col-xs-12 col-sm-12 col-lg-4 offset-lg-4 text-center text-lg-left">
            <h2>Featured Projects</h2>
            <p>This is a selection of projects I&rsquo;ve worked on as sole developer - both websites and HTML5 games. Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Earum eius sunt, fugit harum rem necessitatibus blanditiis
            </p>
          </div>

          <div className="work-samples row">

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
                    viewProject={this.viewProject}
                  />
            
              })
            }
            

            {/* Render projects */}
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
                    deployedLink={project.deployedLink}
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