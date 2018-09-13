import React, {Component} from "react";

import {addSchool} from "../../server/admin_server";
import Step1 from "../../Share/Step1";

class AdminAddSchool extends Component {
    constructor() {
        super();

        this.state = {
            schoolName: "",
            state: "",
            success: false,
            error: false
        };

        this.addSchool = this
            .addSchool
            .bind(this);
    }

    addSchool() {
        if (this.state.schoolName.trim() === "" || this.state.state.trim() === "" || this.state.state === "na") {
            this.setState({error: "School name and state both need to be filled out before adding a school"});
        }

        var rtn = addSchool(this.state.schoolName, this.state.state);
        if (rtn.error) {
            this.setState({error: "School name and state both need to be filled out before adding a school"});
        } else {
            rtn.then(docRef => {
                this
                    .props
                    .addSchool(docRef.id, this.state.schoolName, this.state.state);
                this.setState({success: true});
            }).catch(error => {
                console.log("Error:", error);
                this.setState({error: "Something went wrong. Try again later or contact support at lzbrady496@gmail.com"});
            });
        }
    }

    render() {
        return (
            <div className="admin-blurred-div">
                {!this.state.success && !this.state.error && (<input
                    id="admin-add-school-name"
                    className="admin-input"
                    type="text"
                    name="school_name"
                    onChange={e => this.setState({schoolName: e.target.value})}
                    placeholder="School Name"/>)}
                {!this.state.success && !this.state.error && (<Step1 action={(event) => this.setState({state: event.target.value})}/>)}
                {/* {!this.state.success && !this.state.error && (<input
                    id="admin-add-state"
                    className="admin-input"
                    type="text"
                    name="state"
                    onChange={e => this.setState({state: e.target.value})}
                    placeholder="State"/>)} */}
                {this.state.success && <h2 className="success">School Added!</h2>}
                {this.state.error && (
                    <h2 className="error">
                        {this.state.error}
                    </h2>
                )}
                {!this.state.success && !this.state.error && (
                    <button className="admin-add-btn" onClick={this.addSchool}>
                        Add
                    </button>
                )}
                <p className="close" onClick={this.props.close}>CLOSE</p>
            </div>
        );
    }
}

export default AdminAddSchool;
