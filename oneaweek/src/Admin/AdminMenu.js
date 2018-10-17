import React, {Component} from "react";
import {HashRouter, Link} from "react-router-dom";

import "./AdminCss/AdminMenu.css";

class AdminMenu extends Component {
    render() {
        return <HashRouter>
            <div id="admin-menu">
                <nav className="admin-menu-item">
                    <Link to="/admin/classes">Manage Classes</Link>
                </nav>
                <nav className="admin-menu-item">
                    <Link to="/admin/blogs">Manage Blogs</Link>
                </nav>
            </div>
        </HashRouter>
    }
}

export default AdminMenu;
