import React from "react";
import Description from "../Description";
import "./style.css";

function ProjectFeatured(props) {
    return (
        <div className="col-xs-12 mt-3 mb-3">
            <div key={props.id} className="card h-100 ml-3 mr-3">
                <div className="card-body d-flex flex-column">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <img className="img-fluid" src={props.teaserImage} alt={`${props.descriptor} title graphic`} title={`${props.descriptor} preview`} />
                        </div>
                        <div className="col-md-6">
                            <h3 className="card-title">{props.title}</h3>
                            {/* <p className="card-text"> */}
                            <Description innerHTML={props.description} />
                            {/* </p> */}
                            <p><strong>Role:</strong> {props.role}</p>
                            {/* Wrapper class pushes button to bottom of card */}
                            <div className="mt-auto">
                                <a href={props.deployedLink} target="blank" className="btn btn-primary">Visit
                                    site</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProjectFeatured;