import React, {Component} from "react";
import {auth} from "../server/fire";
import history from "../history";

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
        return (
            <div id="admin-menu">
                <nav className="admin-menu-item">
                    <a onClick={() => history.push("/admin/classes")}>Manage Classes</a>
                </nav>
                <nav className="admin-menu-item">
                    <a onClick={() => history.push("/admin/blogs")}>Manage Blogs</a>
                </nav>
                <nav className="admin-menu-item">
                    <a onClick={() => history.push("/admin/count")}>Act Count</a>
                </nav>
                {this.props.authUser &&<svg height="25" width="25" onClick={this.signOut} className="signout-icon">
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
        )
    }
}

export default AdminMenu;
