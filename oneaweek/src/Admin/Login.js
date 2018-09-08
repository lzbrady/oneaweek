import React, {Component} from "react";

export const fakeAuth = {
    isAuthenticated: true,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

class Login extends Component {

    constructor() {
        super();

        this.login = this
            .login
            .bind(this);
    }

    login = () => {
        fakeAuth.authenticate(() => {})
    }

    render() {
        return <div onClick={this.login}>Login</div>;
    }
}

export default Login;