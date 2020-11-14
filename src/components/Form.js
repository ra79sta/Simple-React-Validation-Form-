import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Message from "./Message";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      url: "",
      message: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.validate = this.validate.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  validate() {
    let isEmailValid = false;
    let isNameValid = false;
    let isPhoneValid = false;
    let isUrlValid = false;
    let isValid = false;
    let phoneNumberPattern = new RegExp(/^[0-9\b]+$/);
    let urlPattern = new RegExp(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    let emailPattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    let namePattern = new RegExp(/^[a-zA-Z]+$/);
    if (
      this.state.name.length > 3 &&
      this.state.name.length < 30 &&
      namePattern.test(this.state.name)
    ) {
      isNameValid = true;
    }
    if (emailPattern.test(this.state.email)) {
      isEmailValid = true;
    }
    if (
      phoneNumberPattern.test(this.state.phoneNumber) &&
      this.state.phoneNumber.length == 10
    ) {
      isPhoneValid = true;
    }
    if (urlPattern.test(this.state.url)) {
      isUrlValid = true;
    }
    if (isNameValid && isEmailValid && isPhoneValid && isUrlValid) {
      isValid = true;
    }
    return isValid;
  }

  handleValidation(e) {
    e.preventDefault();
    if (this.validate()) {
      this.setState({ message: "Form is Complete!" });
    } else {
      this.setState({ message: "Form is Incomplete!" });
    }
  }
  render() {
    return (
      <div className="row">
        <h1 className="text-center">Form Validation</h1>
        <form>
          <label>
            <h3>Name:</h3>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <h3>Email:</h3>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <h3>Phone:</h3>
            <input
              type="text"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <h3>Blog URL:</h3>
            <input
              type="text"
              name="url"
              value={this.state.url}
              onChange={this.handleChange}
            />
          </label>
          <div className="small-6 small-centered text-center columns">
            <button
              className="button success expand round text-center"
              onClick={this.handleValidation}
            >
              Verify
            </button>
          </div>
          <Message message={this.state.message} />
        </form>
      </div>
    );
  }
}

export default Form;
