import React, {Component} from "react";
import {HashRouter, Link} from "react-router-dom";

class AdminHome extends Component {
    render() {
        return <HashRouter>
            <div className="admin-component">
                <h1 className="admin-title">Admin Portal</h1>
                <nav className="manage-item">
                    <Link to="/admin/classes">Manage Classes</Link>
                </nav>
                <div className="manage-item">Manage Blogs</div>
                <div className="manage-item">Manage Podcasts</div>
            </div>
        </HashRouter>
    }
}

export default AdminHome;
