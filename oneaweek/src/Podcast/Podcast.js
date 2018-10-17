import React, {Component} from "react";

import itunes from "../Images/itunes_podcast.png";
import stitcher from "../Images/stitcher_podcast.png";
import "./Podcast.css";

class Podcast extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Tune in to our Podcast</h1>
                <div className="podcast-link-small-container">
                    <a target="_blank" href="https://itunes.apple.com/us/podcast/unapologetically-me/id1438050247">
                        <img className="podcast-link-small pls-left" src={itunes} alt="iTunes"/>
                    </a>
                    <a target="_blank" href="https://www.stitcher.com/podcast/1-a-week/unapologetically-me-2">
                        <img className="podcast-link-small pls-right" src={stitcher} alt="Stitcher"/>
                    </a>
                </div>
                <iframe
                    className="podcast-link-large"
                    width="100%"
                    height="450"
                    scrolling="no"
                    frameborder="no"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/516244566&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>
            </div>
        )
    }
}

export default Podcast;
