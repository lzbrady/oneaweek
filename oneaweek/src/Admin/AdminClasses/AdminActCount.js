import React, {Component} from "react";

import {getActCount} from "../../server/server";
import {setActCount} from "../../server/admin_server";

import "./AdminActs.css";

class AdminActCount extends Component {

    constructor() {
        super();

        this.state = {
            actCount: 0
        }

        this.setCount = this
            .setCount
            .bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
        getActCount()
            .once('value')
            .then((snapshot) => {
                if (this._isMounted) {
                    this.setState({
                        actCount: snapshot.val()
                    });
                }
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    setCount(e) {
        this.setState({actCount: e.target.value});
        setActCount(e.target.value);
    }

    render() {
        return <div>
            <h1 className="headline">Total Acts Shared:
            </h1>
            <input
                className="act-count-input"
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.actCount}
                onChange={this.setCount}/>
        </div>
    }
}

export default AdminActCount;
