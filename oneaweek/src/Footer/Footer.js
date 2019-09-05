import React, {Component} from "react";

import fb from "../Images/facebook.png";
import insta from "../Images/instagram.png";
import logo from "../Images/1_a_week_logo.jpg";
import history from "../history";

import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <div id="footer-wrapper">
                <div id="footer-social-media-wrapper">
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.instagram.com/_1aweek/">
                        <img className="footer-insta" src={insta} alt="Instagram"/>
                    </a>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.facebook.com/1aWeekChallenge">
                        <img className="footer-facebook" src={fb} alt="Facebook"/>
                    </a>
                </div>
                <div className="footer-col-one">
                    <p className="footer-title">1 a Week</p>
                    <img className="footer-logo" src={logo} alt="1 a Week"/>
                </div>
                <div className="footer-col-one">
                    <div className="footer-col-three">
                        <div>
                            <div className="footer-list">
                                <p className="footer-list-header">Our Content</p>
                                <nav className="footer-list-item">
                                    <a onClick={() => history.push("/blog")}>Blog</a>
                                </nav>
                                <nav className="footer-list-item">
                                    <a onClick={() => history.push("/podcast")}>Podcast</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="footer-col-three">
                        <div>
                            <div className="footer-list">
                                <p className="footer-list-header">Get Involved</p>
                                <nav className="footer-list-item">
                                    <a onClick={() => history.push("/share")}>Share</a>
                                </nav>
                                <nav className="footer-list-item">
                                    <a onClick={() => history.push("/contact")}>Contact</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="footer-col-three">
                        <div>
                            <div className="footer-list">
                                <p className="footer-list-header">Site Map</p>
                                <nav className="footer-list-item">
                                    <a onClick={() => history.push("/")}>Home</a>
                                </nav>
                                <nav className="footer-list-item">
                                    <a onClick={() => history.push("/acts")}>Acts</a>
                                </nav>
                                <nav className="footer-list-item">
                                    <a onClick={() => history.push("/about")}>About</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
