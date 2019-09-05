import React, {Component} from "react";
import history from '../history';

import "./ShareActButton.css";

class ShareActButton extends Component {
    render() {
        return (
            <nav id="share-act-btn">
                <a onClick={() => history.push("/share")}>SHARE YOUR ACT</a>
            </nav>
        );
    }
}

export default ShareActButton;
