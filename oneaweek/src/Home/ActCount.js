import React, {Component} from "react";

import {getActCount} from "../server/server";

import "./ShareActButton.css";

class ActCount extends Component {

    constructor() {
        super();

        this.state = {
            actCount: 0
        }
    }

    componentDidMount() {
        this._isMounted = true;
        getActCount()
            .once('value')
            .then((snapshot) => {
                if (this._isMounted) {
                    this.setState({
                        actCount: snapshot.val()
                    });
                }
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <div>
                <h1 style={{
                    margin: "5px"
                }}>Total Acts Shared: {this.state.actCount}</h1>
            </div>
        );
    }
}

export default ActCount;
