import React, {Component} from "react";
import {confirmAlert} from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

import {deleteAct, updateAct} from "../../server/admin_server";
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
        this.showEdit = this
            .showEdit
            .bind(this);
        this.saveEditAct = this
            .saveEditAct
            .bind(this);
        this.updateActText = this
            .updateActText
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
                    editedAct: snapshot
                        .docs[i]
                        .data()
                        .act,
                    imageUrl: snapshot
                        .docs[i]
                        .data()
                        .imageUrl,
                    id: snapshot.docs[i].id,
                    showEdit: false
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

    showEdit(index, show) {
        let acts = this.state.acts;
        if (acts.length > index) {
            acts[index].showEdit = show;
            this.setState({acts: acts});
        }
    }

    saveEditAct(index) {
        let acts = this.state.acts;
        if (acts.length > index) {
            acts[index].act = document.getElementsByClassName("admin-act-textarea")[0].value;
            acts[index].showEdit = false;
            updateAct(acts[index].id, acts[index].act);
            this.setState({acts: acts});
        }
    }

    updateActText(event, index) {
        // console.log("Event Target: " + event.target.value); console.log("Act: ",
        // act); act.act = event.target.value this.state.acts[0].act = "cr";

        let acts = this.state.acts;
        if (acts.length > index) {
            acts[index].editedAct = event.target.value;
            this.setState({acts: acts});
        }
    }

    render() {
        return <div>
            <h1><input
                className="edit-input"
                value={this.props.teacherName}
                onChange={this.props.setTeacherName}/>
                - Acts</h1>
            {this
                .state
                .acts
                .map((act, index) => {
                    return (
                        <div key={index} className="admin-act-wrapper">
                            <h3 className="admin-act-name">{act.name}</h3>
                            {act.showEdit
                                ? <div
                                        className="admin-act-delete admin-edit-cancel"
                                        onClick={() => this.showEdit(index, false)}>CANCEL</div>
                                : <div className="admin-act-delete" onClick={() => this.confirmActDelete(act.id)}>DELETE</div>}
                            {act.showEdit
                                ? <div
                                        className="admin-act-edit admin-edit-save"
                                        onClick={() => this.saveEditAct(index)}>SAVE</div>
                                : <div className="admin-act-edit" onClick={() => this.showEdit(index, true)}>EDIT</div>}
                            <p className="admin-act-act">{act.act}</p>
                            {act.showEdit && <textarea
                                type="text"
                                name="act"
                                className="admin-act-textarea"
                                value={act.editedAct}
                                onChange={(e) => this.updateActText(e, index)}
                                placeholder="Warning! Act should not be empty!"/>}
                            {act.imageUrl !== "" && <img
                                className="act-image-large"
                                src={act.imageUrl}
                                alt="Good deed accompanying photo."/>}
                        </div>
                    )
                })}
        </div>
    }
}

export default AdminActs;
