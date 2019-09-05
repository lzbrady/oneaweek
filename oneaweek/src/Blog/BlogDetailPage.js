import React, {Component} from "react";

import {getFullBlog} from "../server/server";

import "./Blogs.css";

class BlogDetailPage extends Component {

    constructor() {
        super();

        this.state = {
            blogTitle: "Loading...",
            fullBlog: ""
        }
    }

    componentDidMount() {
        var blogTitle = this
            .props
            .location
            .pathname
            .substring(6) + this.props.location.search;

        if (blogTitle !== "") {
            getFullBlog(decodeURI(blogTitle))
                .once("value")
                .then(snapshot => {
                    this.setState({
                        fullBlog: snapshot
                            .val()
                            .content,
                        blogTitle: blogTitle
                    });
                })
        }
    }

    render() {
        return <div>
            <h1 className="blog-title">{this.state.blogTitle}</h1>
            <div
                className="blog-content"
                dangerouslySetInnerHTML={{
                __html: this
                    .state
                    .fullBlog
                    .replace(/(<? *script)/gi, "illegalscript")
            }}></div>
        </div>
    }
}

export default BlogDetailPage;
