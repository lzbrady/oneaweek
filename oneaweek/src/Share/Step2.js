import React, {Component} from "react";

class Step1 extends Component {
    render() {
        return (
            <select onChange={this.props.action} name="school" id="school-picker">
                <option value="na">Choose School</option>
                <option value="hs">High School</option>
                <option value="ms">Middle School</option>
                <option value="es">Elementary School</option>
            </select>
        );
    }
}

export default Step1;
