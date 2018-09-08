import React, {Component} from "react";

import {getSpotlightAct} from "../server/server";

import "./SpotlightActs.css";

class SpotlightActs extends Component {
    constructor() {
        super();

        this.state = {
            act: {
                name: "Loading...",
                act: "",
                state: ""
            },
            shouldFetchNew: true
        };

        this.getNewAct = this
            .getNewAct
            .bind(this);
    }

    componentDidMount() {
        this.getNewAct();
    }

    getNewAct() {
        if (this.state.shouldFetchNew) {
            this.setState({shouldFetchNew: false});
            document
                .getElementById("spotlight-container")
                .classList
                .add("refreshing");
            getSpotlightAct().then(snapshot => {
                document
                    .getElementById("spotlight-container")
                    .classList
                    .remove("refreshing");
                this.setState({
                    act: {
                        name: snapshot
                            .docs[0]
                            .data()
                            .name,
                        act: snapshot
                            .docs[0]
                            .data()
                            .act,
                        state: snapshot
                            .docs[0]
                            .data()
                            .state
                    },
                    shouldFetchNew: true
                });
            });
        }
    }

    render() {
        return (
            <div>
                <div id="spotlight-container">
                    <svg onClick={this.getNewAct} id="spotlight-refresh" width="24" height="24">
                        <circle cx="12" cy="12" r="8" stroke="#0a246e" strokeWidth="2" fill="none"/>
                        <polygon
                            points="0,10 10,10 5,15"
                            style={{
                            fill: "#0a246e"
                        }}/>
                        <polygon
                            points="10,10 2,18 7,22"
                            style={{
                            fill: "white"
                        }}/>
                        <polygon
                            points="0,10 5,15 6,20"
                            style={{
                            fill: "white"
                        }}/>
                        Refresh
                    </svg>
                    <p className="spotlight-name">{this.state.act.name}
                        <span className="spotlight-state">({this.state.act.state})</span>
                    </p>
                    <p className="spotlight-text">{this.state.act.act}</p>
                </div>
            </div>
        );
    }
}

export default SpotlightActs;
