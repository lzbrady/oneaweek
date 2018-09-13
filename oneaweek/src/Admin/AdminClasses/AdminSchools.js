import React, {Component} from "react";

import {getSchools} from "../../server/admin_server";

import "./AdminSchools.css";
import AdminAddSchool from "./AdminAddSchool";

class AdminSchools extends Component {

    constructor() {
        super();

        this.state = {
            lastSchoolDoc: {
                null: true
            },
            schools: [],
            addingSchool: false
        }

        this.getSchools = this
            .getSchools
            .bind(this);

        this.addSchool = this
            .addSchool
            .bind(this);
    }

    componentDidMount() {
        this.getSchools();
    }

    getSchools() {
        getSchools(this.state.lastSchoolDoc).then((snapshot) => {
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

            this.setState({
                lastSchoolDoc: snapshot.docs[snapshot.docs.length - 1],
                schools: schools
            });
        });
    }

    addSchool(id, schoolName, state) {
        var schools = this.state.schools;
        var showState = true;
        for (var i = 0; i < schools.length; i++) {
            if (schools[i].state === state) {
                showState = false;
            }
        }
        schools.push({name: schoolName, state: state, id: id, showState: showState});
    }

    render() {
        return <div>
            <h1>Schools</h1>
            {this
                .state
                .schools
                .map((school, index) => {
                    return (
                        <div
                            key={index}
                            className="admin-list-object"
                            onClick={() => this.props.loadClasses(school.name, school.id, school.state)}>
                            {school.showState && <p className="admin-list-header">{school.state}</p>}
                            <p className="admin-list-item">{school.name}</p>
                        </div>
                    )
                })}
            <button
                className="admin-add-btn"
                onClick={() => this.setState({addingSchool: true})}>Add School</button>
            {this.state.addingSchool && <AdminAddSchool
                schoolId={this.state.schoolId}
                close={() => this.setState({addingSchool: false})}
                addSchool={this.addSchool}/>}
        </div>;
    }
}

export default AdminSchools;
