import React, { Component } from "react";
import FacebookProvider, { Page } from "react-facebook";

class HomePage extends Component {
  render() {
    return (
      <div id="body">
        <div id="body-left-wrapper">
          <a href="./share_act/share_act.html" id="share-act-btn">
            SHARE YOUR ACT
          </a>
          <div id="blog-posts-container" />
        </div>

        <div id="body-right-wrapper" class="feed-container">
          <FacebookProvider
            class="feed"
            id="facebook-feed"
            appId="204154203726841"
          >
            <Page
              href="https://www.facebook.com/1aWeekChallenge"
              tabs="timeline"
            />
          </FacebookProvider>
        </div>
      </div>
    );
  }
}

export default HomePage;
