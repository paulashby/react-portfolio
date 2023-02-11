import React from "react";
import "./style.css";

function Project(props) {
  return (
    <div key={props.id} className="col-md-6 col-lg-4 mt-3 mb-3">
      <div onClick={() => props.viewProject(props.id)} className="card h-100">
        <img className="card-img-top" src={process.env.PUBLIC_URL + "/images/" + (props.teaserImage)} alt={`${props.descriptor} title graphic`}
          title={`${props.descriptor} preview`} />
        {/* Make card-body a flex container so we can push button to bottom */}
        <div className="card-body d-flex flex-column">
          <h3 className="card-title">{props.title}</h3>
        </div>
      </div>
    </div>
  );
}

export default Project;