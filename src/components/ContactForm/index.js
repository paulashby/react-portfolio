import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  // Based on https://www.techomoro.com/submit-a-form-data-to-rest-api-in-a-react-app/
  handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://mailthis.to/paulashby", {
        method: "POST",
        body: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          message: this.state.message,
        }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      
      const stateBase = {
        firstName: "",
        lastName: "",
        email: ""
      }
      console.log(res);
      if (res.status === 200) {
        this.setState({
          message: "Thanks for getting in touch",
          ...stateBase
        })
      } else {
        this.setState({
          // Formspree no longer accepts AJAX form submissions, so simulating success for purposes of this exercise
          message: "An error occurred while submitting the form",
          ...stateBase
        })
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="col-12 p-0">
        <form className="form m-0 mb-3">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="email"
            placeholder="Email"
          />
          <textarea
            value={this.state.message}
            name="message"
            onChange={this.handleInputChange}
            placeholder="message"
          />
          <button className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
