import React, { Component } from "react";
import axios from "axios";

import "./Contact.css";

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      name: "",
      school: "",
      message: "",
    };

    this.setFormValue = this.setFormValue.bind(this);
  }

  setFormValue(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <form
          name="contact-form"
          method="post"
          className="contact-form"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <input
            className="contact-input"
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.setFormValue}
          />
          <br />
          <input
            className="contact-input"
            type="text"
            name="email"
            placeholder="Email (optional)"
            value={this.state.email}
            onChange={this.setFormValue}
          />
          <br />
          <input
            className="contact-input"
            type="text"
            name="school"
            placeholder="School (optional)"
            value={this.state.school}
            onChange={this.setFormValue}
          />
          <br />
          <textarea
            className="contact-textarea"
            type="text"
            name="message"
            placeholder="Message"
            value={this.state.message}
            onChange={this.setFormValue}
          />{" "}
          <button type="submit" className="contact-submit-btn">
            SEND MESSAGE
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
