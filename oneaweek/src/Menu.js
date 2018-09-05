import React, {Component} from "react";
import FacebookProvider, {Page} from "react-facebook";
import logo from "./Images/1_a_week_logo.jpg";
import {Route, HashRouter, Link} from "react-router-dom";

import "./Menu.css";

class Menu extends Component {
    render() {
        return (
            <HashRouter>
                <header>
                    <img className="logo" src={logo} alt="1 a Week"/>
                    <a className="title" href="">
                        1 a Week
                    </a>
                    <i className="mobile w3-xxxlarge mobile-menu fa fa-bars"/>
                    <i className="mobile w3-xxxlarge mobile-close fa fa-close"/>
                    <div className="menu">
                        <nav className="menu-item">
                            <Link to="/">Home</Link>
                        </nav>
                        <nav className="menu-item">
                            <Link to="/dashboard">Sponsors</Link>
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
