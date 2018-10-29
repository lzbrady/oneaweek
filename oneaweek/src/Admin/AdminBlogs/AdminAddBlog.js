import React, {Component} from "react";
import TextEditor from "./TextEditor";
import "./Draft.css";
import "./AdminBlogs.css";
import error from "../../Images/error_x.png";
import success from "../../Images/success_check.png";

import Review from "./Review";

import {addBlog} from "../../server/admin_server";
import {getFullBlog} from "../../server/server";

class AdminAddBlog extends Component {

    constructor() {
        super();

        this.state = {
            blogTitle: "",
            blogMarkup: "",
            reviewing: false,
            uploadSuccessful: false,
            uploadError: false
        };

        this.review = this
            .review
            .bind(this);

        this.save = this
            .save
            .bind(this);

        this.download = this
            .download
            .bind(this);

        this.setBlogTitle = this
            .setBlogTitle
            .bind(this);
    }

    componentDidMount() {
        var blogTitle = this
            .props
            .location
            .pathname
            .substring(this.props.location.pathname.lastIndexOf("/") + 1);

        if (blogTitle !== "add") {
            getFullBlog(blogTitle)
                .once("value")
                .then(snapshot => {
                    this.setState({
                        blogMarkup: snapshot
                            .val()
                            .content,
                        blogTitle: blogTitle
                    });
                });
        }
    }

    setBlogTitle(event) {
        this.setState({blogTitle: event.target.value});
    }

    review(blogMarkup) {
        if (this.state.blogTitle === "") {
            document
                .getElementById("blog-title-input")
                .classList
                .add("input-error");
        } else {
            this.setState({blogMarkup: blogMarkup, reviewing: true})
        }
    }

    download(data, filename, type, preview) {
        // Might use to ensure the 10 KB limit var file = new Blob([data], {type:
        // type});

        addBlog(this.state.blogTitle, data, preview).then(_ => {
            this.setState({uploadSuccessful: true});
        });
    }

    save() {
        this.download(this.state.blogMarkup, "TestHTML", "text/html", this.state.blogMarkup.substring(0, 150));
    }

    render() {
        return <div className="admin-component">
            <div
                className={this.state.reviewing || this.state.uploadSuccessful || this.state.uploadError
                ? "hide"
                : "show"}>
                <input
                    placeholder="Blog Title"
                    id="blog-title-input"
                    type="text"
                    value={this.state.blogTitle}
                    onChange={this.setBlogTitle}/>
                <TextEditor content={this.state.blogMarkup} post={this.review}/>
            </div>
            {this.state.reviewing && !(this.state.uploadSuccessful || this.state.uploadError) && <Review
                blogTitle={this.state.blogTitle}
                preview={this.state.blogMarkup}
                edit={() => this.setState({reviewing: false})}
                save={this.save}/>}
            {this.state.uploadSuccessful && <div className="blog-post-confirmation-container">
                <img
                    className="blog-post-confirmation-image"
                    src={success}
                    alt="Blog uploaded successfully!"/>
                <p className="blog-post-confirmation-text">Blog posted successfully!</p>
            </div>}
            {this.state.uploadError && <div className="blog-post-confirmation-container">
                <img
                    className="blog-post-confirmation-image"
                    src={error}
                    alt="Error uploading blog"/>
                <p className="blog-post-confirmation-text">
                    <strong>Error:</strong><br/>Something went wrong. Please try again later or contact support at
                    <br/>
                    <a href="mailto:lzbrady496@gmail.com">lzbrady496@gmail.com</a>
                </p>
            </div>}
        </div>
    }
}

export default AdminAddBlog;
