import React, { Component } from "react";
import CountUp from "react-countup";

import { getActCount } from "../server/server";

import "./ShareActButton.css";

class ActCount extends Component {
  constructor() {
    super();

    this.state = {
      actCount: 0
    };
  }

  componentDidMount() {
    this._isMounted = true;
    getActCount()
      .once("value")
      .then(snapshot => {
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

  render() {
    return (
      <div>
        <h1
          style={{
            margin: "5px"
          }}
        >
          <CountUp
            start={0}
            end={this.state.actCount}
            prefix="Total Acts Shared: "
          />
        </h1>
      </div>
    );
  }
}

export default ActCount;
