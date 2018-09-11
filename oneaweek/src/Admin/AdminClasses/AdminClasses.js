import React, {Component} from "react";

import AdminSchools from "./AdminSchools";
import AdminAddClass from "./AdminAddClass";
import {getClasses} from "../../server/admin_server";

import "./AdminClasses.css";

class AdminClasses extends Component {
    constructor() {
        super();

        this.state = {
            showClasses: false,
            classes: [],
            addingClass: false,
            state: "",
            schoolName: "",
            schoolId: ""
        };

        this.loadClasses = this
            .loadClasses
            .bind(this);
        this.addClass = this
            .addClass
            .bind(this);
    }

    loadClasses(schoolName, schoolId, state) {
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
                        }),
                    showClasses: true,
                    state: state,
                    schoolName: schoolName,
                    schoolId: schoolId
                });
            } else {
                this.setState({showClasses: true, state: state, schoolName: schoolName, schoolId: schoolId})
            }
        });
    }

    addClass(id, teacher) {
        var classes = this.state.classes;
        classes.push({id: id, teacher: teacher});
    }

    render() {
        return (
            <div>
                {!this.state.showClasses && <AdminSchools loadClasses={this.loadClasses}/>}
                {this.state.showClasses && <h1>{this.state.schoolName}
                    ({this.state.state})</h1>}
                {this.state.showClasses && this
                    .state
                    .classes
                    .map((clazz, index) => {
                        return <div className="admin-list-object admin-list-item" key={index}>{clazz.teacher}</div>
                    })}
                {this.state.showClasses && <button
                    className="admin-add-btn"
                    onClick={() => this.setState({addingClass: true})}>Add Class</button>}
                {this.state.addingClass && <AdminAddClass
                    schoolId={this.state.schoolId}
                    close={() => this.setState({addingClass: false})}
                    addClass={this.addClass}/>}
            </div>
        );
    }
}

export default AdminClasses;
