import React from "react";
import Navbar from "./Navbar";

function Header(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
        {<Navbar />}
        <h1 className="display-4">Paul Ashby</h1>
        <p className="lead">Developing Nicely</p>
    </div>
    </div>
  );
}

export default Header;