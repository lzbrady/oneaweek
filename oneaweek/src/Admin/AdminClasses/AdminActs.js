import React, {Component} from "react";
import {confirmAlert} from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

import {deleteAct} from "../../server/admin_server";
import {getActs} from "../../server/server";

import "./AdminActs.css";

class AdminActs extends Component {

    constructor() {
        super();

        this.state = {
            acts: []
        }

        this.getActs = this
            .getActs
            .bind(this);
        this.deleteAct = this
            .deleteAct
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

    confirmActDelete = (classId) => {
        confirmAlert({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this act? This action cannot be undone.',
            buttons: [
                {
                    label: 'DELETE',
                    onClick: () => this.deleteAct(classId)
                }, {
                    label: 'CANCEL',
                    onClick: () => {}
                }
            ]
        })
    }

    deleteAct(actId) {
        deleteAct(actId).then(() => {
            var actList = this.state.acts;
            for (var i = 0; i < actList.length; i++) {
                if (actList[i].id === actId) {
                    actList.splice(i, 1);
                    break;
                }
            }
            this.setState({acts: actList});
        }).catch((error) => {
            alert("Something went wrong. Please try again later.");
            console.error("Error removing document: ", error);
        });
    }

    render() {
        return <div>
            <h1><input
                className="edit-input"
                value={this.props.teacherName}
                onChange={this.props.setTeacherName}/> - Acts</h1>
            {this
                .state
                .acts
                .map((act, index) => {
                    return (
                        <div key={index} className="admin-act-wrapper">
                            <h3 className="admin-act-name">{act.name}</h3>
                            <div className="admin-act-delete" onClick={() => this.confirmActDelete(act.id)}>DELETE</div>
                            <div className="admin-act-edit">EDIT</div>
                            <p className="admin-act-act">{act.act}</p>
                        </div>
                    )
                })}
        </div>
    }
}

export default AdminActs;
