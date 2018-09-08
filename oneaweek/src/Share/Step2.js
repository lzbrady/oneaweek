import React, {Component} from "react";
import {getSchools} from "../server/server";

class Step1 extends Component {
    constructor() {
        super();

        this.state = {
            schools: [],
            message: "Loading..."
        }
    }

    componentDidMount() {
        getSchools(this.props.state).then(snapshot => {
            if (snapshot.size > 0) {
                this.setState({
                    schools: snapshot
                        .docs
                        .map(doc => {
                            return {
                                id: doc.id,
                                name: doc
                                    .data()
                                    .name
                            }
                        }),
                    message: ""
                });
            } else {
                this.setState({schools: [], message: "No supported schools in this state. Ask your teacher to add yours!"})
            }
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <select onChange={this.props.action} name="school" id="school-picker">
                    <option value="na">Choose School</option>
                    {this
                        .state
                        .schools
                        .map(school => {
                            return <option value={school.id} key={school.id}>{school.name}</option>
                        })}
                </select>
            </div>
        );
    }
}

export default Step1;
