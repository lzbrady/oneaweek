import React, {Component} from "react";
import {HashRouter, Link} from "react-router-dom";
import {auth} from "../server/fire";

import "./AdminCss/AdminMenu.css";

class AdminMenu extends Component {

    constructor() {
        super();

        this.signOut = this
            .signOut
            .bind(this);
    }

    signOut() {
        auth
            .signOut()
            .then(function () {})
            .catch(function (error) {
                alert("Error signing out. Please try again or contact support.");
                console.log("Sign out error:", error);
            });
    }

    render() {
        return <HashRouter>
            <div id="admin-menu">
                <nav className="admin-menu-item">
                    <Link to="/admin/classes">Manage Classes</Link>
                </nav>
                <nav className="admin-menu-item">
                    <Link to="/admin/blogs">Manage Blogs</Link>
                </nav>
                {this.props.authUser &&<svg height="25" width="25" onClick={this.signOut} className="signout-icon">
                <span>Test</span>
                    <line strokeLinecap="round" x1="10%" y1="20%" x2="60%" y2="20%" style={{stroke: "#0a246e", strokeWidth: "10%"}} />
                    <line strokeLinecap="round" x1="60%" y1="20%" x2="60%" y2="30%" style={{stroke: "#0a246e", strokeWidth: "10%"}} />
                    <line strokeLinecap="round" x1="60%" y1="70%" x2="60%" y2="80%" style={{stroke: "#0a246e", strokeWidth: "10%"}} />
                    <line strokeLinecap="round" x1="10%" y1="80%" x2="60%" y2="80%" style={{stroke: "#0a246e", strokeWidth: "10%"}} />
                    <line strokeLinecap="round" x1="10%" y1="80%" x2="10%" y2="20%" style={{stroke: "#0a246e", strokeWidth: "10%"}} />
                    <line strokeLinecap="round" x1="40%" y1="50%" x2="90%" y2="50%" style={{stroke: "#0a246e", strokeWidth: "8%"}} />
                    <line strokeLinecap="round" x1="90%" y1="50%" x2="70%" y2="35%" style={{stroke: "#0a246e", strokeWidth: "8%"}} />
                    <line strokeLinecap="round" x1="90%" y1="50%" x2="70%" y2="65%" style={{stroke: "#0a246e", strokeWidth: "8%"}} />
                    LOGOUT
                </svg>}

                <p onClick={this.signOut} className="admin-menu-tooltip">Logout</p>
            </div>
        </HashRouter>
    }
}

export default AdminMenu;
