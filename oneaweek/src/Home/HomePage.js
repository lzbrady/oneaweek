import React, {Component} from "react";
import FacebookProvider, {Page} from "react-facebook";
import {HashRouter, Link} from "react-router-dom";

import {getLatestBlog} from "../server/server";

import ShareActButton from "./ShareActButton";
import SpotlightActs from "./SpotlightActs";

import "./HomePage.css";

class HomePage extends Component {

    constructor() {
        super();

        this.state = {
            latestBlogTitle: "",
            latestBlogPreview: ""
        }
    }

    componentDidMount() {
        getLatestBlog()
            .once("value")
            .then(snapshot => {
                snapshot.forEach(child => {
                    this.setState({
                        latestBlogTitle: child.key,
                        latestBlogPreview: child
                            .val()
                            .preview
                    });
                });
            })
    }

    render() {
        return (
            <HashRouter>
                <div id="body">
                    <ShareActButton/>
                    <h1 id="spotlight-title">Get Inspiration From Others!</h1>
                    <SpotlightActs/>

                    <div id="body-left-wrapper" className="feed-container">
                        <h1 className="home-page-body-heading headline">Make a Difference</h1>
                        <p className="home-page-body-text">
                            1 A Week is an organization which promotes acts of kindness and mental health.
                            Hoping to make an impact on the world.
                        </p>

                        <h1 className="home-page-body-heading headline">Latest Blog Post</h1>
                        <div className="blog-post-preview-wrapper-home">
                            <Link to={`/blog/${this.state.latestBlogTitle}`}>
                                <h1 className="blog-post-preview-title-home">{this.state.latestBlogTitle}</h1>
                                <p
                                    className="blog-post-preview-preview-home"
                                    dangerouslySetInnerHTML={{
                                    __html: this
                                        .state
                                        .latestBlogPreview
                                        .replace(/(<? *script)/gi, "illegalscript")
                                }}/>
                            </Link>
                        </div>
                    </div>

                    <div id="body-right-wrapper" className="feed-container">
                        <FacebookProvider className="feed" id="facebook-feed" appId="204154203726841">
                            <Page href="https://www.facebook.com/1aWeekChallenge" tabs="timeline"/>
                        </FacebookProvider>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default HomePage;
