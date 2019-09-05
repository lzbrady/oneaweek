import React, {Component} from "react";

import Acts from "./Acts";

import {getClasses} from "../server/server";

import "./Acts.css";

class Classes extends Component {
    constructor() {
        super();

        this.state = {
            schoolName: "",
            schoolId: "",
            classId: "",
            classTeacher: "",
            classes: [],
            showActs: false
        };

        this.loadClasses = this
            .loadClasses
            .bind(this);
        this.moveBack = this
            .moveBack
            .bind(this);
    }

    componentDidMount() {
        this.loadClasses(this.props.schoolId);
    }

    loadClasses(schoolId) {
        getClasses(schoolId).then(snapshot => {
            if (snapshot.size > 0) {
                this.setState({
                    classes: snapshot
                        .docs
                        .map(c => {
                            return {
                                id: c.id,
                                teacher: c
                                    .data()
                                    .teacher
                            };
                        })
                });

                if (snapshot.size === 1 && snapshot.docs[0].id === "guestClass") {
                    this.setState({classId: snapshot.docs[0].id, showActs: true, classTeacher: "Shared As Guest"});
                } else {}
            }
        });
    }

    moveBack() {
        if (this.state.showActs) {
            this.setState({showActs: false});
        } else {
            this.props.moveBack();
        }
    }

    render() {
        return (
            <div>
                {!this.state.showActs && <h1 className="acts-header">{this.props.schoolName}
                    ({this.props.state})</h1>}
                {!this.state.showActs && <p onClick={this.moveBack} className="back-btn">&lt; Back to Schools</p>}
                {!this.state.showActs && this
                    .state
                    .classes
                    .map((clazz, index) => {
                        return <div
                            className="list-object list-item"
                            key={index}
                            onClick={() => this.setState({showActs: true, classId: clazz.id, classTeacher: clazz.teacher, showClasses: false})}>{clazz.teacher}
                        </div>
                    })}
                {this.state.showActs && <Acts moveBack={this.moveBack} classId={this.state.classId} teacherName={this.state.classTeacher}/>}
            </div>
        )
    }
}

export default Classes;
