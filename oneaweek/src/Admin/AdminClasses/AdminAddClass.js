import React, {Component} from "react";

import {addClass} from "../../server/admin_server";

import "./AdminClasses.css";

class AdminAddClass extends Component {
    constructor() {
        super();

        this.state = {
            teacher: "",
            success: false,
            error: false
        };

        this.addClass = this
            .addClass
            .bind(this);
    }

    addClass() {
        addClass(this.state.teacher, this.props.schoolId).then(docRef => {
            this
                .props
                .addClass(docRef.id, this.state.teacher);
            this.setState({success: true});
        }).catch(error => {
            this.setState({error: true});
        });
    }

    render() {
        return (
            <div className="admin-blurred-div">
                {!this.state.success && !this.state.error && (<input
                    id="admin-add-"
                    className="admin-input"
                    type="text"
                    name="teacher_name"
                    onChange={e => this.setState({teacher: e.target.value})}
                    placeholder="Teacher Name"/>)}
                {this.state.success && <h2 className="success">Class Added!</h2>}
                {this.state.error && (
                    <h2 className="error">
                        Something went wrong. Try again later or contact support at
                        <a href="mailto:lzbrady496@gmail.com">lzbrady496@gmail.com</a>
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
