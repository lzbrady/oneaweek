import React, { Component } from "react";

import Loading from "../Loading";
import Classes from "./Classes";
import { getAllSchools } from "../server/server";

import "./Acts.css";

class Schools extends Component {
  constructor() {
    super();

    this.state = {
      schools: [],
      showClasses: false,
      schoolId: "",
      schoolName: "",
      loading: true
    };

    this.getSchools = this.getSchools.bind(this);
    this.moveBack = this.moveBack.bind(this);
  }

  componentDidMount() {
    this.getSchools();
  }

  getSchools() {
    getAllSchools({ null: true }).then(snapshot => {
      var schools = [];

      for (var i = 0; i < snapshot.docs.length; i++) {
        schools.push({
          name: snapshot.docs[i].data().name,
          state: snapshot.docs[i].data().state,
          id: snapshot.docs[i].id,
          showState:
            i === 0 ||
            snapshot.docs[i - 1].data().state !== snapshot.docs[i].data().state
        });
      }

      this.setState({ schools: schools, loading: false });
    });
  }

  moveBack() {
    this.setState({ showClasses: false, loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading && <Loading />}
        {!this.state.showClasses && <h1 className="acts-header">Schools</h1>}
        {!this.state.showClasses &&
          this.state.schools.map((school, index) => {
            return (
              <div
                key={index}
                className="list-object"
                onClick={() =>
                  this.setState({
                    showClasses: true,
                    schoolName: school.name,
                    schoolId: school.id,
                    state: school.state,
                    loading: true
                  })
                }
              >
                {school.showState && (
                  <p className="list-header">{school.state}</p>
                )}
                <p className="list-item">{school.name}</p>
              </div>
            );
          })}
        {this.state.showClasses && (
          <Classes
            moveBack={this.moveBack}
            schoolId={this.state.schoolId}
            schoolName={this.state.schoolName}
            state={this.state.state}
            changeLoading={load => this.setState({ loading: load })}
          />
        )}
      </div>
    );
  }
}

export default Schools;
