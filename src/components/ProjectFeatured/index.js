import React, { Component } from "react";
import Description from "../Description";
import DeployedLink from "../DeployedLink";
import "./style.css";

class ProjectFeatured extends Component {

    scrollToFeatured() {
        this._div.scrollIntoView({ behavior: 'smooth' });
    }
    
    componentDidMount = () => this.scrollToFeatured();
    componentDidUpdate = () => this.scrollToFeatured();

    render() {

        const project = this.props.project;

        return (
            <div className="col-xs-12 mt-3 mb-3" ref={(ref) => this._div = ref}>
                <div key={project.id} className="card h-100 ml-3 mr-3">
                    <div className="card-body d-flex flex-column">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <img className="img-fluid" src={process.env.PUBLIC_URL + "/images/" + project.images.featured} alt={`${project.descriptor} title graphic`} title={`${project.descriptor} preview`} />
                            </div>
                            <div className="col-md-6">
                                <h3 className="card-title">{project.title}</h3>
                                <Description innerHTML={project.description} />
                                <p><strong>Role:</strong> {project.role}</p>
                                <div className="mt-auto">
                                    <DeployedLink url={project.deployedLink} size={project.size} viewDeployed={project.viewDeployed}/>                                
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
        )

    };
}

export default ProjectFeatured;