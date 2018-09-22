import React, {Component} from "react";
import TextEditor from "./TextEditor";
import "./Draft.css";
import "./AdminBlogs.css";
import error from "../../Images/error_x.png";
import success from "../../Images/success_check.png";

import Review from "./Review";

import {addBlog} from "../../server/admin_server";

class AdminAddBlog extends Component {

    constructor() {
        super();

        this.state = {
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
    }

    review(blogMarkup) {
        this.setState({blogMarkup: blogMarkup, reviewing: true})
    }

    download(data, filename, type, preview) {
        // Might use to ensure the 10 KB limit var file = new Blob([data], {type:
        // type});
        addBlog("How To Write a Blog", data, preview).then(_ => {
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
                : "show"}><TextEditor post={this.review}/></div>
            {this.state.reviewing && !(this.state.uploadSuccessful || this.state.uploadError) && <Review
                preview={this.state.blogMarkup}
                edit={() => this.setState({reviewing: false})}
                save={this.save}/>}
            {this.state.uploadSuccessful && <div className="blog-post-confirmation-container">
                <img
                    className="blog-post-confirmation-image"
                    src={success}
                    alt="Error uploading blog"/>
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
