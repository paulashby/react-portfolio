import React from "react";
import "./style.css";

function Project(props) {
  const project = props.project;
  console.log("project", project);
  return (
    <div className="card h-100">
      <img className="card-img-top" src={process.env.PUBLIC_URL + "/images/" + (project.images.teaser)} alt={`${project.descriptor} title graphic`}
        title={`${project.descriptor} preview`} />
      <div className="card-body d-flex flex-column">
        <h3 className="card-title">{project.title}</h3>
      </div>
    </div>
  );
}

export default Project;