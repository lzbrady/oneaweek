import React, {Component} from "react";

import {sendMessage} from "../server/server";

import "./Contact.css";

class Contact extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            name: "",
            school: "",
            message: "",
            error: ""
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
        if (this.state.name === "") {
            this.setState({error: "Name required"});
        } else if (this.state.message === "") {
            this.setState({error: "Message required"});
        } else if (this.state.email !== "" && !(this.state.email.includes("@") && this.state.email.includes("."))) {
            this.setState({error: "Invalid email address"})
        } else {
            this.setState({error: ""})
            sendMessage(this.state.name, this.state.email, this.state.school, this.state.message);
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
                        value={this.state.name}
                        onChange={this.setFormValue}/><br/>
                    <input
                        className="contact-input"
                        type="text"
                        name="email"
                        placeholder="Email (optional)"
                        value={this.state.email}
                        onChange={this.setFormValue}/><br/>
                    <input
                        className="contact-input"
                        type="text"
                        name="school"
                        placeholder="School (optional)"
                        value={this.state.school}
                        onChange={this.setFormValue}/><br/>
                    <textarea
                        className="contact-textarea"
                        type="text"
                        name="message"
                        placeholder="Message"
                        value={this.state.message}
                        onChange={this.setFormValue}/> {this.state.error !== "" && <p className="error">{this.state.error}</p>}
                    <button type="submit" className="contact-submit-btn">SEND MESSAGE</button>
                </form>
            </div>
        )
    }
}

export default Contact;
