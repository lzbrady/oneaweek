import React, {Component} from "react";

class AdminHome extends Component {
    render() {
        return <div className="admin-component">
            <h1 className="admin-title">Admin Portal</h1>
            <div className="manage-item">Manage Classes</div>
            <div className="manage-item">Manage Blogs</div>
            <div className="manage-item">Manage Podcasts</div>
        </div>;
    }
}

export default AdminHome;
