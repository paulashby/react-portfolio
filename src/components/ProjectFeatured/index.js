import React from "react";
import InlineLink from "../InlineLink";
import "./style.css";

const linkRegex = /(<link-)(.*)(?=>)(.)/gm;

function renderDescription(props) {
    if (Object.keys(props.inlineLinks).length) {
        // External link is included in JSON
        const descSubstrings = props.description.split(linkRegex);
        const descriptionParts = [
            <React.Fragment key="1">
                {descSubstrings[0]}
            </React.Fragment>,
            <InlineLink url={props.inlineLinks[descSubstrings[2]].url} text={props.inlineLinks[descSubstrings[2]].text} key="2" />,
            <React.Fragment key="3">
                {descSubstrings[4]}
            </React.Fragment>
        ];
        return descriptionParts;
    } else {
        // Description text does not include external link
        return props.description;
    }
}


function ProjectFeatured(props) {
    return (
        <div className="col-xs-12 mt-3 mb-3">
            <div key={props.id} id="web" className="card h-100 ml-3 mr-3">
                <div className="card-body d-flex flex-column">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <img className="img-fluid" src={props.teaserImage} alt={`${props.descriptor} title graphic`} title={`${props.descriptor} preview`} />
                        </div>
                        <div className="col-md-6">
                            <h3 className="card-title">{props.title}</h3>
                            <p className="card-text">
                                {renderDescription(props)}
                            </p>
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