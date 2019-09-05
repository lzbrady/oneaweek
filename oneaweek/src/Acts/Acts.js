import React, { Component } from "react";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import { getActs } from "../server/server";

import "./Acts.css";

class Acts extends Component {
  constructor() {
    super();

    this.state = {
      acts: []
    };

    this.getActs = this.getActs.bind(this);
  }

  componentDidMount() {
    this.getActs();
  }

  getActs() {
    getActs(this.props.classId).then(snapshot => {
      this.props.changeLoading(false);

      var acts = [];
      for (var i = 0; i < snapshot.docs.length; i++) {
        acts.push({
          name: snapshot.docs[i].data().name,
          act: snapshot.docs[i].data().act,
          imageUrl: snapshot.docs[i].data().imageUrl,
          id: snapshot.docs[i].id
        });
      }

      this.setState({ acts: acts });
    });
  }

  render() {
    return (
      <div>
        <h1 className="acts-header">{this.props.teacherName}- Acts</h1>
        <p onClick={this.props.moveBack} className="back-btn">
          &lt; Back to Classes
        </p>
        <div className="grid-wrapper">
          {this.state.acts.map((act, index) => {
            return (
              <React.Fragment key={index}>
                <h3 className="act-name">{act.name}</h3>
                <p className="act-act">{act.act}</p>
                {act.imageUrl !== "" && (
                  <img
                    className="act-image-large"
                    src={act.imageUrl}
                    alt="Shared good deed"
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Acts;
