import React, {Component} from "react";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import history from "../../history";

import {getBlogPreviews} from "../../server/server";
import {deleteBlog} from "../../server/admin_server";

class AdminBlogs extends Component {
    constructor() {
        super();

        this.state = {
            lastTimestamp: 0,
            blogPosts: []
        };

        this.getPreviews = this
            .getPreviews
            .bind(this);
        this.deleteBlog = this
            .deleteBlog
            .bind(this);
    }

    componentDidMount() {
        this.getPreviews();
    }

    getPreviews() {
        getBlogPreviews(this.state.lastTimestamp)
            .once("value")
            .then(snapshot => {
                var lastTimestamp = 0;
                var blogPosts = [];
                snapshot.forEach(child => {
                    lastTimestamp = child
                        .val()
                        .timestamp;
                    blogPosts.push({
                        title: child.key,
                        preview: child
                            .val()
                            .preview
                    });
                });
                this.setState({lastTimestamp: lastTimestamp, blogPosts: blogPosts});
            });
    }

    confirmDelete = (blogTitle) => {
        confirmAlert({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this blogs? This action cannot be undone.',
            buttons: [
                {
                    label: 'DELETE',
                    onClick: () => this.deleteBlog(blogTitle)
                }, {
                    label: 'CANCEL',
                    onClick: () => {}
                }
            ]
        })
    }

    deleteBlog(blogTitle) {
        deleteBlog(blogTitle);
        var blogPosts = this.state.blogPosts;
        for (var i = 0; i < blogPosts.length; i++) {
            if (blogPosts[i].title === blogTitle) {
                blogPosts.splice(i, 1);
                break;
            }
        }
        this.setState({blogPosts: blogPosts});
    }

    render() {
        return (
            <div>
                <h1>My Blogs</h1>
                <p className="subtext">NOTE: Blog names must be unique</p>
                <nav className="admin-menu-item admin-add-btn">
                    <a onClick={() => history.push("/admin/blogs/add")}>Write New Blog Post</a>
                </nav>
                {this
                    .state
                    .blogPosts
                    .map(blog => {
                        return (
                            <nav className="blog-post-admin-wrapper" key={blog.title}>
                                <h1 className="blog-post-admin-title">{blog.title}</h1>
                                <a onClick={() => history.push(`/blog/${blog.title}`)}>
                                    <p className="blog-post-admin-full-article">See Full Article</p>
                                </a>
                                <div className="blog-actions-container">
                                    <div
                                        className="admin-act-delete"
                                        onClick={() => this.confirmDelete(blog.title)}>DELETE</div>
                                    <a onClick={() => history.push("/admin/blogs/edit/" + blog.title)}>
                                        <div className="admin-act-edit" onClick={() => {}}>EDIT</div>
                                    </a>
                                </div>
                            </nav>
                        );
                    })}
            </div>
        )
    }
}

export default AdminBlogs;
