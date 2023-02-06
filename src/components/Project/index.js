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
        { descSubstrings[4]}
        </React.Fragment>
      ];
      return descriptionParts;
    } else {
      // Description text does not include external link
      return props.description;
    }
  }


function Project(props) {
  return (
    <div key={props.id} className="col-md-6 col-lg-4 mt-3 mb-3">
          <div className="card h-100">
            <img className="card-img-top" src={props.teaserImage} alt={`${props.descriptor} title graphic`}
              title={`${props.descriptor} preview`} />
            {/* Make card-body a flex container so we can push button to bottom */}
            <div className="card-body d-flex flex-column">
              <h3 className="card-title">{props.title}</h3>
              <p className="card-text">
                { renderDescription(props) }
              </p>
              {/* Wrapper class pushes button to bottom of card */}
              <div className="mt-auto">
                <a href={props.deployedLink} target="blank" className="btn btn-primary">Visit site</a>
              </div>
            </div>
          </div>
        </div>
  );
}

export default Project;