import React, {Component} from "react";
import axios from 'axios';

import "./Contact.css";

class Contact extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            name: "",
            school: "",
            message: "",
            error: "",
            success: false
        };

        this.setFormValue = this
            .setFormValue
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);

    }

    setFormValue(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (!this.state.success) {
            if (this.state.name === "") {
                this.setState({error: "Name required"});
            } else if (this.state.message === "") {
                this.setState({error: "Message required"});
            } else if (this.state.email !== "" && !(this.state.email.includes("@") && this.state.email.includes("."))) {
                this.setState({error: "Invalid email address"})
            } else {
                this.setState({error: ""})

                const _url = "142.93.176.115";

                // There is an image attached, send to the CLOUD
                var name = this.state.name;
                var email = this.state.email;
                var school = this.state.school;
                var message = this.state.message;

                axios
                    .post(`${_url}contact`, {name, email, school, message})
                    .then((res) => {
                        this.setState({success: true});
                    })
                    .catch((err) => {
                        this.setState({error: "Sorry! Something went wrong. Please try again later.", step: 4, loading: false});
                    });
            }
        }
    }

    render() {
        return (
            <div>
                <h1>Contact</h1>
                <form onSubmit={this.handleSubmit} className="contact-form">
                    <input
                        className="contact-input"
                        type="text"
                        name="name"
                        placeholder="Name"
                        readOnly={this.state.success}
                        value={this.state.name}
                        onChange={this.setFormValue}/><br/>
                    <input
                        className="contact-input"
                        type="text"
                        readOnly={this.state.success}
                        name="email"
                        placeholder="Email (optional)"
                        value={this.state.email}
                        onChange={this.setFormValue}/><br/>
                    <input
                        className="contact-input"
                        type="text"
                        readOnly={this.state.success}
                        name="school"
                        placeholder="School (optional)"
                        value={this.state.school}
                        onChange={this.setFormValue}/><br/>
                    <textarea
                        className="contact-textarea"
                        type="text"
                        readOnly={this.state.success}
                        name="message"
                        placeholder="Message"
                        value={this.state.message}
                        onChange={this.setFormValue}/> {this.state.error !== "" && <p className="error">{this.state.error}</p>}
                    <button
                        type="submit"
                        className={this.state.success
                        ? "contact-submit-btn-success"
                        : "contact-submit-btn"}>{this.state.success
                            ? "Message Sent!"
                            : "SEND MESSAGE"}</button>
                </form>
            </div>
        )
    }
}

export default Contact;
