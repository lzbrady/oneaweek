import React, {Component} from "react";
import logo from "./Images/1_a_week_logo.jpg";
import {HashRouter, Link} from "react-router-dom";

import "./Menu.css";

class Menu extends Component {
    render() {
        return (
            <HashRouter>
                <header>
                    <img className="logo" src={logo} alt="1 a Week"/>
                    <nav className="title">
                        <Link to="/">1 a Week</Link>
                    </nav>
                    <i className="mobile w3-xxxlarge mobile-menu fa fa-bars"/>
                    <i className="mobile w3-xxxlarge mobile-close fa fa-close"/>
                    <div className="menu">
                        <nav className="menu-item">
                            <Link to="/">Home</Link>
                        </nav>
                        <nav className="menu-item">
                            <Link to="/blog">Blog</Link>
                        </nav>
                        <nav className="menu-item">
                            <Link to="/sponsors">Sponsors</Link>
                        </nav>
                        <nav className="menu-item">
                            <Link to="/share">Share</Link>
                        </nav>
                    </div>
                </header>
            </HashRouter>
        );
    }
}

export default Menu;
