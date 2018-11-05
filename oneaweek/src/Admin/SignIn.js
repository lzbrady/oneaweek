import React, {Component} from "react";

import {doSignInWithEmailAndPassword} from './Auth';

import "./SignIn.css";

class SignIn extends Component {

    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            error: ""
        }

        this.onSubmit = this
            .onSubmit
            .bind(this);
    }

    onSubmit(event) {
        this.setState({error: ""});
        doSignInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
            console.log("Logged in!");
        }).catch(error => {
            if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
                this.setState({error: "Email or password is incorrect."})
            } else {
                this.setState({error: "Something went wrong. Please contact system admin for more help."})
            }
            console.log("Error:", error);
        });

        event.preventDefault();
    }

    render() {
        const isInvalid = this.state.password === '' || this.state.email === '';

        return (
            <div>
                <h1>Sign In</h1>
                <p className="error">{this.state.error}</p>
                <form onSubmit={this.onSubmit} className="sign-in-form">
                    <input
                        value={this.state.email}
                        onChange={event => this.setState({email: event.target.value})}
                        type="text"
                        className="sign-in-input"
                        placeholder="Email Address"/>
                    <input
                        value={this.state.password}
                        onChange={event => this.setState({password: event.target.value})}
                        className="sign-in-input"
                        type="password"
                        placeholder="Password"/>
                    <button disabled={isInvalid} type="submit" className="sign-in-button">
                        Sign In
                    </button>

                    {this.state.error && <p>{this.state.error.message}</p>}
                </form>
            </div>
        )
    }
}

export default SignIn;
