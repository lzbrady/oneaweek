import React, {Component} from "react";
import {HashRouter, Link} from "react-router-dom";

class AdminBlogs extends Component {
    render() {
        return <HashRouter>
            <div>
                My Blogs
                <nav className="admin-menu-item">
                    <Link to="/admin/blogs/add">Write New Blog Post</Link>
                </nav>
            </div>
        </HashRouter>
    }
}

export default AdminBlogs;
