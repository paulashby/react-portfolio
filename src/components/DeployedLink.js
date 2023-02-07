import React from "react";

function DeployedLink(props) {
  return (
    <a href={props.deployedLink} target="blank" className="btn btn-primary">Visit site</a>
  );
}

export default DeployedLink;