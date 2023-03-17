import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  stateBase = {
    name: "",
    email: "",
    message: "",
    error: "",
    success: ""
  };
  state = {
    ...this.stateBase
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Update the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();
    try {

      // Use FormData Object to allow PHP to read fetch data as if it's a regular form
      let fData = new FormData();
      fData.append("name", this.state.name);
      fData.append("email", this.state.email);
      fData.append("message", this.state.message);
      let res = await fetch("https://primitive.co/paulashby/contact.php", {method: "POST", body: fData});
      
      if (res.status === 200) {
        this.setState({
          ...this.stateBase,
          success: "Thanks for getting in touch",
        });

      } else {
        this.setState({
          ...this.stateBase,
          error: res.statusText
        });
      }

    } catch (err) {
      this.setState({
        ...this.stateBase,
        error: "An error occurred while submitting the form"
      });
    }
  };

  handleFocus = () => {
      this.setState({
      ...this.state,
      error: "",
      success: ""
    })
  }

  render() {
    return (
      <div className="col-12 p-0">
        <p className="my-4"><span className={this.state.success.length > 0 ? "text-white rounded p-2 border border-success" : ""}>{this.state.success}</span><span className={this.state.error.length > 0 ? "text-white rounded p-2 border border-danger" : ""}>{this.state.error}</span></p>
        <form className="form m-0 mb-3">
          <input
            className="rounded p-2 mb-3"
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            onFocus={this.handleFocus}
            type="text"
            placeholder="Name"
          />
          <input
            className="rounded p-2 mb-3"
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            onFocus={this.handleFocus}
            type="email"
            placeholder="Email"
          />
          <textarea
            className="rounded p-2 mb-3"
            value={this.state.message}
            name="message"
            onChange={this.handleInputChange}
            onFocus={this.handleFocus}
            placeholder="Message"
          />
          <button className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
