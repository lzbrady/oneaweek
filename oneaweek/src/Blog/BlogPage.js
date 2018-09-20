import React, {Component} from "react";

import {getBlogPreviews} from "../server/server";

class BlogPage extends Component {

    constructor() {
        super();

        this.state = {
            lastTimestamp: 0,
            blogPosts: []
        }

        this.getPreviews = this
            .getPreviews
            .bind(this);
    }

    componentDidMount() {
        this.getPreviews();
    }

    getPreviews() {
        getBlogPreviews(this.state.lastTimestamp)
            .once("value")
            .then(snapshot => {
                console.log("Snapshot", snapshot);
                console.log("Snapshot Val", snapshot.val());

                var lastTimestamp = 0;
                var blogPosts = [];
                snapshot.forEach((child) => {
                    console.log(child.key, child.val());
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
                this.setState({lastTimestamp: lastTimestamp, blogPosts: blogPosts})
            });
    }

    render() {
        return <div>
            Blogs {this
                .state
                .blogPosts
                .map(blog => {
                    return (
                        <div className="blog-post-preview-wrapper" key={blog.title}>
                          <h1 className="blog-post-preview-title">{blog.title}</h1>
                          <h1 className="blog-post-preview-preview">{blog.preview}</h1>
                        </div>
                    )
                })}
        </div>;
    }
}

export default BlogPage;
