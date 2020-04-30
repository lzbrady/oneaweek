import React, { Component } from "react";

class Step1 extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      deed: "",
    };
  }

  render() {
    return (
      <div id="act-form">
        <p id="error">{this.props.error}</p>
        <input
          id="first-name-input"
          type="text"
          name="first_name"
          onChange={(e) => this.setState({ firstName: e.target.value })}
          placeholder="First Name"
        />
        <textarea
          type="text"
          name="message"
          placeholder="Share your act!"
          onChange={(e) => this.setState({ deed: e.target.value })}
        />
        <button
          id="submit-form-btn"
          onClick={() =>
            this.props.submit(
              this.state.firstName,
              this.state.deed,
              this.state.fileSrc
            )
          }
        >
          SUBMIT
        </button>
      </div>
    );
  }
}

export default Step1;
