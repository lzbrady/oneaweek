import React, {Component} from "react";
import {confirmAlert} from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

import AdminSchools from "./AdminSchools";
import AdminAddClass from "./AdminAddClass";
import AdminActs from "./AdminActs";
import {deleteSchool, deleteClass, setNewSchoolName, setNewTeacherName} from "../../server/admin_server";
import {getClasses} from "../../server/server";

import "./AdminClasses.css";

class AdminClasses extends Component {
    constructor() {
        super();

        this.state = {
            showClasses: false,
            showActs: false,
            classes: [],
            addingClass: false,
            state: "",
            schoolName: "",
            schoolId: "",
            classId: "",
            classTeacher: ""
        };

        this.loadClasses = this
            .loadClasses
            .bind(this);
        this.addClass = this
            .addClass
            .bind(this);
        this.deleteSchool = this
            .deleteSchool
            .bind(this);
        this.deleteClass = this
            .deleteClass
            .bind(this);
        this.setSchooName = this
            .setSchooName
            .bind(this);
        this.setTeacherName = this
            .setTeacherName
            .bind(this);
        this.goBack = this
            .goBack
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

    confirmDelete = () => {
        confirmAlert({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this school? This action cannot be undone.',
            buttons: [
                {
                    label: 'DELETE',
                    onClick: this.deleteSchool
                }, {
                    label: 'CANCEL',
                    onClick: () => {}
                }
            ]
        })
    };

    deleteSchool() {
        deleteSchool(this.state.schoolId).then(() => {
            alert("School Deleted");
            this.setState({showClasses: false});
        }).catch((error) => {
            alert("Something went wrong. Please try again later.");
            console.error("Error removing document: ", error);
        });
    }

    confirmClassDelete = (classId) => {
        confirmAlert({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this class? This action cannot be undone.',
            buttons: [
                {
                    label: 'DELETE',
                    onClick: () => this.deleteClass(classId)
                }, {
                    label: 'CANCEL',
                    onClick: () => {}
                }
            ]
        })
    }

    deleteClass(classId) {
        deleteClass(classId).then(() => {
            var classList = this.state.classes;
            for (var i = 0; i < classList.length; i++) {
                if (classList[i].id === classId) {
                    classList.splice(i, 1);
                    break;
                }
            }
            this.setState({classes: classList});
        }).catch((error) => {
            alert("Something went wrong. Please try again later.");
            console.error("Error removing document: ", error);
        });
    }

    setSchooName(event) {
        var newName = event.target.value;
        this.setState({schoolName: newName});
        setTimeout(() => {
            if (newName === this.state.schoolName) {
                setNewSchoolName(this.state.schoolId, newName);
            }
        }, 1500);
    }

    setTeacherName(event) {
        var newName = event.target.value;
        this.setState({classTeacher: newName});
        setTimeout(() => {
            if (newName === this.state.classTeacher) {
                setNewTeacherName(this.state.classId, newName);
            }
        }, 1500);
    }

    goBack() {
        if (this.state.showClasses) {
            this.setState({showClasses: false})
        } else if (this.state.showActs) {
            this.setState({showClasses: true, showActs: false});
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.goBack} className="back-btn-underline">&lt; BACK</button>
                {!this.state.showActs && !this.state.showClasses && <AdminSchools loadClasses={this.loadClasses}/>}
                {this.state.showClasses && <h1><input
                    className="edit-input"
                    value={this.state.schoolName}
                    onChange={this.setSchooName}/>
                    ({this.state.state})</h1>}
                {this.state.showClasses && this
                    .state
                    .classes
                    .map((clazz, index) => {
                        return <div
                            className="admin-list-object admin-list-item"
                            key={index}
                            onClick={() => this.setState({showActs: true, classId: clazz.id, classTeacher: clazz.teacher, showClasses: false})}>{clazz.teacher}
                            <div className="delete-icon" onClick={() => this.confirmClassDelete(clazz.id)}>DELETE</div>
                        </div>
                    })}
                {this.state.showClasses && <button
                    className="admin-add-btn"
                    onClick={() => this.setState({addingClass: true})}>Add Class</button>}
                {this.state.showClasses && <button className="admin-delete-btn" onClick={this.confirmDelete}>Delete School</button>}
                {this.state.addingClass && <AdminAddClass
                    schoolId={this.state.schoolId}
                    close={() => this.setState({addingClass: false})}
                    addClass={this.addClass}/>}
                {this.state.showActs && <AdminActs
                    classId={this.state.classId}
                    teacherName={this.state.classTeacher}
                    setTeacherName={this.setTeacherName}/>}
            </div>
        );
    }
}

export default AdminClasses;
