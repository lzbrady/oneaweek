import React, {Component} from "react";
import FacebookProvider, {Page} from "react-facebook";

import ShareActButton from "./ShareActButton";

import "./HomePage.css";

class HomePage extends Component {
    render() {
        return (
            <div id="body">
                <ShareActButton/>

                <div id="body-left-wrapper" className="feed-container">
                    <h1>Make a Difference</h1>
                    <p>
                        1 A Week is an organization which promotes acts of kindness and mental health.
                        Hoping to make an impact on the world.
                    </p>
                </div>

                <div id="body-right-wrapper" className="feed-container">
                    <FacebookProvider className="feed" id="facebook-feed" appId="204154203726841">
                        <Page href="https://www.facebook.com/1aWeekChallenge" tabs="timeline"/>
                    </FacebookProvider>
                </div>
            </div>
        );
    }
}

export default HomePage;
