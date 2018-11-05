import React, {Component} from "react";

import AdminHome from "./AdminHome";

import "./AdminCss/Admin.css";

class Admin extends Component {

    componentDidMount() {
        console.log("Props:", this.props.authUser);
    }

    render() {
        return <div>
            <AdminHome/>
        </div>
    }
}

export default Admin;
