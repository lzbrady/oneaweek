import React, {Component} from "react";
import FacebookProvider, {Page} from "react-facebook";
import {getLatestBlog} from "../server/server";
import history from "../history";

import ActCount from "./ActCount";
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
            <div id="body pad-bottom">
                <div className="home-page-container">
                    <ActCount/>
                    <div className="home-page-social-media-bar">
                        <a
                            className="home-page-facebook"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.facebook.com/1aWeekChallenge">Facebook</a>
                        <a
                            className="home-page-instagram"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.instagram.com/_1aweek/">Instagram</a>
                    </div>
                    <ShareActButton/>
                </div>
                <h1 id="spotlight-title">Get Inspiration From Others!</h1>
                <SpotlightActs/>

                <div id="body-left-wrapper" className="feed-container">
                    <h1 className="home-page-body-heading headline">Make a Difference</h1>
                    <p className="home-page-body-text">
                        1 a Week is a charity-like organization which promotes positivity and mental
                        health awareness through acts of kindness. We ask people to share their good
                        deeds with us and we have teamed up with sponsor companies to give gifts out to
                        participants. Just a 'smile' can potentially save someone's life. Imagine what
                        impact you can have doing more.
                    </p>

                    <h1 className="home-page-body-heading headline">Latest Blog Post</h1>
                    <div className="blog-post-preview-wrapper-home">
                        <a onClick={() => history.push(`/blog/${this.state.latestBlogTitle}`)}>
                            <h1 className="blog-post-preview-title-home">{this.state.latestBlogTitle}</h1>
                            <p
                                className="blog-post-preview-preview-home"
                                dangerouslySetInnerHTML={{
                                __html: this
                                    .state
                                    .latestBlogPreview
                                    .replace(/(<? *script)/gi, "illegalscript")
                            }}/>
                        </a>
                    </div>
                </div>

                <div id="body-right-wrapper" className="feed-container">
                    <FacebookProvider className="feed" id="facebook-feed" appId="204154203726841">
                        <Page href="https://www.facebook.com/1aWeekChallenge" tabs="timeline"/>
                    </FacebookProvider>
                </div>
            </div>
        )
    }
}

export default HomePage;
