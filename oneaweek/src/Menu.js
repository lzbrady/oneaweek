import React, {Component} from "react";
import logo from "./Images/1_a_week_logo.jpg";
import {HashRouter, Link} from "react-router-dom";

import "./Menu.css";

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            menuOpen: false
        }
    }

    render() {
        return (
            <HashRouter>
                <header>
                    <img className="logo" src={logo} alt="1 a Week"/>
                    <nav className="title">
                        <Link to="/">1 a Week</Link>
                    </nav>
                    {!this.state.menuOpen && <i
                        class="mobile w3-xxxlarge mobile-menu fa fa-bars"
                        onClick={() => this.setState({menuOpen: true})}>MENU</i>}
                    {this.state.menuOpen && <i
                        class="mobile w3-xxxlarge mobile-close fa fa-close"
                        onClick={() => this.setState({menuOpen: false})}>CLOSE</i>}

                    <div className={this.state.menuOpen ? "menu menu-open" : "menu"}>
                        <nav className="menu-item">
                            <Link to="/">Home</Link>
                        </nav>
                        <nav className="menu-item">
                            <Link to="/acts">Acts</Link>
                        </nav>
                        <nav className="menu-item">
                            <Link to="/blog">Blog</Link>
                        </nav>
                        <nav className="menu-item">
                            <Link to="/podcast">Podcast</Link>
                        </nav>
                        <nav className="menu-item">
                            <Link to="/about">About</Link>
                        </nav>
                        <nav className="menu-item">
                            <Link to="/share">Share</Link>
                        </nav>
                    </div>
                </header>
            </HashRouter>
        )
    }
}

export default Menu;
