import React, {Component} from "react";

import {addClass} from "../../server/admin_server";

class AdminAddClass extends Component {
    constructor() {
        super();

        this.state = {
            teacher: "",
            success: false,
            error: ""
        };

        this.addClass = this
            .addClass
            .bind(this);
    }

    addClass() {
        if (this.state.teacher.trim() === "") {
            this.setState({error: "Teacher name cannot be empty"});
        }
        var rtn = addClass(this.state.teacher, this.props.schoolId);

        if (rtn.error) {
            this.setState({error: "Teacher name cannot be empty"});
        } else {
            rtn.then(docRef => {
                this
                    .props
                    .addClass(docRef.id, this.state.teacher);
                this.setState({success: true});
            }).catch(error => {
                this.setState({error: "Something went wrong. Try again later or contact support at lzbrady496@gmail.com"});
            });
        }
    }

    render() {
        return (
            <div className="admin-blurred-div">
                {!this.state.success && !this.state.error && (<input
                    id="admin-add-teacher-name"
                    className="admin-input"
                    type="text"
                    name="teacher_name"
                    onChange={e => this.setState({teacher: e.target.value})}
                    placeholder="Teacher Name"/>)}
                {this.state.success && <h2 className="success">Class Added!</h2>}
                {this.state.error && (
                    <h2 className="error">
                        {this.state.error}
                    </h2>
                )}
                {!this.state.success && !this.state.error && (
                    <button className="admin-add-btn" onClick={this.addClass}>
                        Add
                    </button>
                )}
                <p className="close" onClick={this.props.close}>CLOSE</p>
            </div>
        );
    }
}

export default AdminAddClass;
