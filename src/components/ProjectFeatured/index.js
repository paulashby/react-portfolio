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

        return (
            <div className="col-xs-12 mt-3 mb-3" ref={(ref) => this._div = ref}>
                <div key={this.props.project.id} className="card h-100 ml-3 mr-3">
                    <div className="card-body d-flex flex-column">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <img className="img-fluid" src={process.env.PUBLIC_URL + "/images/" + this.props.project.images.featured} alt={`${this.props.project.descriptor} title graphic`} title={`${this.props.project.descriptor} preview`} />
                            </div>
                            <div className="col-md-6">
                                <h3 className="card-title">{this.props.project.title}</h3>
                                <Description innerHTML={this.props.project.description} />
                                <p><strong>Role:</strong> {this.props.project.role}</p>
                                <div className="mt-auto">
                                    <DeployedLink url={this.props.project.deployedLink} size={this.props.project.size} viewDeployed={this.props.project.viewDeployed} />
                                    <a href={this.props.project.github} target="blank" className="btn btn-primary ml-2">Github repo</a>
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