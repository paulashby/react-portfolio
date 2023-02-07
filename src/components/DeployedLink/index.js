import React from "react";
import "./style.css";

function DeployedLink(props) {

  return (
    <>
      <a href={props.url} onClick={() => props.viewDeployed(props.url, props.size)} target="blank" className="btn btn-primary window-link">Visit site</a>
      <a href={props.url} target="blank" className="btn btn-primary tab-link">Visit site</a>
    </>    
  );
}

export default DeployedLink;