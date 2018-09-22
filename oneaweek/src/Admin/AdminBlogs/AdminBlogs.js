import React, {Component} from "react";
import {HashRouter, Link} from "react-router-dom";
import {confirmAlert} from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

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
            console.log("BlogPost[i]", blogPosts[i].title);
            if (blogPosts[i].title === blogTitle) {
                blogPosts.splice(i, 1);
                break;
            }
        }
        this.setState({blogPosts: blogPosts});
    }

    render() {
        return <HashRouter>
            <div>
                <h1>My Blogs</h1>
                <p className="subtext">NOTE: Blog names must be unique</p>
                <nav className="admin-menu-item admin-add-btn">
                    <Link to="/admin/blogs/add">Write New Blog Post</Link>
                </nav>
                {this
                    .state
                    .blogPosts
                    .map(blog => {
                        return (
                            <nav className="blog-post-admin-wrapper" key={blog.title}>
                                <h1 className="blog-post-admin-title">{blog.title}</h1>
                                <Link to={`/blog/${blog.title}`}>
                                    <p className="blog-post-admin-full-article">See Full Article</p>
                                </Link>
                                <div className="blog-actions-container">
                                    <div className="delete-icon" onClick={() => this.confirmDelete(blog.title)}>DELETE</div>
                                </div>
                            </nav>
                        );
                    })}
            </div>
        </HashRouter>
    }
}

export default AdminBlogs;
