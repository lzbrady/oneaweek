import React, {Component} from "react";

class Step1 extends Component {
    render() {
        return (
            <select onChange={this.props.action} name="class" id="class-picker">
                <option value="na">Choose Class</option>
                <option value="1">Class 1</option>
                <option value="2">Class 2</option>
                <option value="3">Class 3</option>
            </select>
        );
    }
}

export default Step1;
