import React, {Component} from "react";

import {getAllSchools} from "../server/server";

import "./Acts.css";
import Classes from "./Classes";

class Schools extends Component {

    constructor() {
        super();

        this.state = {
            schools: [],
            showClasses: false,
            schoolId: "",
            schoolName: ""
        }

        this.getSchools = this
            .getSchools
            .bind(this);
    }

    componentDidMount() {
        this.getSchools();
    }

    getSchools() {
        getAllSchools({null: true}).then((snapshot) => {
            var schools = [];

            for (var i = 0; i < snapshot.docs.length; i++) {
                schools.push({
                    name: snapshot
                        .docs[i]
                        .data()
                        .name,
                    state: snapshot
                        .docs[i]
                        .data()
                        .state,
                    id: snapshot.docs[i].id,
                    showState: (i === 0 || snapshot.docs[i - 1].data().state !== snapshot.docs[i].data().state)
                })
            }

            this.setState({schools: schools});
        });
    }

    render() {
        return <div>
            {!this.state.showClasses && <h1>Schools</h1>}
            {!this.state.showClasses && this
                .state
                .schools
                .map((school, index) => {
                    return (
                        <div
                            key={index}
                            className="admin-list-object"
                            onClick={() => this.setState({showClasses: true, schoolName: school.name, schoolId: school.id, state: school.state})}>
                            {school.showState && <p className="admin-list-header">{school.state}</p>}
                            <p className="admin-list-item">{school.name}</p>
                        </div>
                    )
                })}
            {this.state.showClasses && <Classes
                schoolId={this.state.schoolId}
                schoolName={this.state.schoolName}
                state={this.state.state}/>}
        </div>
    }
}

export default Schools;
