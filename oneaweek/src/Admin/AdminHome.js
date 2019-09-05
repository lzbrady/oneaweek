import React, {Component} from "react";
import history from "../history";

class AdminHome extends Component {
    render() {
        return (
            <div className="admin-component">
                <h1 className="admin-title">Admin Portal</h1>
                <nav className="manage-item">
                    <a onClick={() => history.push("/admin/classes")}>Manage Classes</a>
                </nav>
                <nav className="manage-item">
                    <a onClick={() => history.push("/admin/blogs")}>Manage Blogs</a>
                </nav>
            </div>
        )
    }
}

export default AdminHome;
