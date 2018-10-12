import React, { Component } from "react";
import { HashRouter, Link } from "react-router-dom";

import { getBlogPreviews } from "../server/server";

import "./Blogs.css";

class BlogPage extends Component {
  constructor() {
    super();

    this.state = {
      lastTimestamp: 0,
      blogPosts: []
    };

    this.getPreviews = this.getPreviews.bind(this);
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
          lastTimestamp = child.val().timestamp;
          blogPosts.push({
            title: child.key,
            preview: child.val().preview
          });
        });
        this.setState({ lastTimestamp: lastTimestamp, blogPosts: blogPosts.reverse() });
      });
  }

  render() {
    return (
      <HashRouter>
        <div className="pad-bottom">
          <h1 className="headline">1 a week stories</h1>
          {this.state.blogPosts.map(blog => {
            return (
              <nav className="blog-post-preview-wrapper" key={blog.title}>
                <Link to={`/blog/${blog.title}`}>
                  <h1 className="blog-post-preview-title">{blog.title}</h1>
                  <p
                    className="blog-post-preview-preview"
                    dangerouslySetInnerHTML={{
                      __html: blog.preview.replace(
                        /(<? *script)/gi,
                        "illegalscript"
                      )
                    }}
                  />
                </Link>
              </nav>
            );
          })}
        </div>
      </HashRouter>
    );
  }
}

export default BlogPage;
