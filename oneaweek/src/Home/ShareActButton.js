import React, {Component} from "react";
import {HashRouter, Link} from "react-router-dom";

import "./ShareActButton.css";

class ShareActButton extends Component {
    render() {
        return (
            <HashRouter>
                <nav id="share-act-btn">
                    <Link to="/share">SHARE YOUR ACT</Link>
                </nav>
            </HashRouter>
        );
    }
}

export default ShareActButton;
