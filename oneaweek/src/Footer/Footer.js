import React, {Component} from "react";
import {HashRouter, Link} from "react-router-dom";

import fb from "../Images/facebook.png";
import insta from "../Images/instagram.png";
import logo from "../Images/1_a_week_logo.jpg";

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
                        <HashRouter>
                            <div>
                                <div className="footer-list">
                                    <p className="footer-list-header">Our Content</p>
                                    <nav className="footer-list-item">
                                        <Link to="/blog">Blog</Link>
                                    </nav>
                                    <nav className="footer-list-item">
                                        <Link to="/podcast">Podcast</Link>
                                    </nav>
                                </div>
                            </div>
                        </HashRouter>
                    </div>
                    <div className="footer-col-three">
                        <HashRouter>
                            <div>
                                <div className="footer-list">
                                    <p className="footer-list-header">Get Involved</p>
                                    <nav className="footer-list-item">
                                        <Link to="/share">Share</Link>
                                    </nav>
                                    <nav className="footer-list-item">
                                        <Link to="/contact">Contact</Link>
                                    </nav>
                                </div>
                            </div>
                        </HashRouter>
                    </div>
                    <div className="footer-col-three">
                        <HashRouter>
                            <div>
                                <div className="footer-list">
                                    <p className="footer-list-header">Site Map</p>
                                    <nav className="footer-list-item">
                                        <Link to="/">Home</Link>
                                    </nav>
                                    <nav className="footer-list-item">
                                        <Link to="/acts">Acts</Link>
                                    </nav>
                                    <nav className="footer-list-item">
                                        <Link to="/about">About</Link>
                                    </nav>
                                </div>
                            </div>
                        </HashRouter>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
