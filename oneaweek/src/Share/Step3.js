import React, {Component} from "react";
import {getClasses} from "../server/server";

class Step1 extends Component {
    constructor() {
        super();

        this.state = {
            classes: [],
            message: ""
        }
    }

    componentDidMount() {
        getClasses(this.props.schoolId).then(snapshot => {
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
                    message: ""
                })
            } else {
                this.setState({classes: [], message: "No supported classes in this school. Ask your teacher to add yours!"})
            }
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <select onChange={this.props.action} name="class" id="class-picker">
                    <option value="na">Choose Class</option>
                    {this
                        .state
                        .classes
                        .map(c => {
                            return <option key={c.id} value={c.id}>{c.teacher}</option>
                        })}
                </select>
            </div>
        );
    }
}

export default Step1;
