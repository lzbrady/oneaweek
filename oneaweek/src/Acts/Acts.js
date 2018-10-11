import React, {Component} from "react";
import {confirmAlert} from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

import {getActs} from "../server/server";

import "./Acts.css";

class Acts extends Component {

    constructor() {
        super();

        this.state = {
            acts: []
        }

        this.getActs = this
            .getActs
            .bind(this);
    }

    componentDidMount() {
        this.getActs();
    }

    getActs() {
        getActs(this.props.classId).then((snapshot) => {
            var acts = [];

            for (var i = 0; i < snapshot.docs.length; i++) {
                acts.push({
                    name: snapshot
                        .docs[i]
                        .data()
                        .name,
                    act: snapshot
                        .docs[i]
                        .data()
                        .act,
                    id: snapshot.docs[i].id
                })
            }

            this.setState({acts: acts});
        });
    }

    render() {
        return <div>
            <h1>{this.props.teacherName}
                - Acts</h1>
            {this
                .state
                .acts
                .map((act, index) => {
                    return (
                        <div key={index} className="admin-act-wrapper">
                            <h3 className="admin-act-name">{act.name}</h3>
                            <p className="admin-act-act">{act.act}</p>
                        </div>
                    )
                })}
        </div>
    }
}

export default Acts;
