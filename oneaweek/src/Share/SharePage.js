import React, {Component} from "react";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import StepConfirm from "./StepConfirm";
import "./SharePage.css";

import {shareAct} from "../server/server";

class SharePage extends Component {
    constructor() {
        super();

        this.state = {
            step: 1,
            state: "na",
            school: "na",
            class: "na",
            pipeline: "",
            image: {},
            error: ""
        };

        this.chooseState = this
            .chooseState
            .bind(this);
        this.chooseSchool = this
            .chooseSchool
            .bind(this);
        this.chooseClass = this
            .chooseClass
            .bind(this);
        this.moveStep = this
            .moveStep
            .bind(this);
        this.addImage = this
            .addImage
            .bind(this);
        this.removeImage = this
            .removeImage
            .bind(this);
        this.submitAct = this
            .submitAct
            .bind(this);
    }

    chooseState(event) {
        if (event.target.value !== "na") {
            this.setState({state: event.target.value, step: 2, pipeline: event.target.value, school: "na", class: "na"});
        }
    }

    chooseSchool(event) {
        if (event.target.value !== "na") {
            var pipeline = this.state.state + ">" + event.target.value;
            this.setState({school: event.target.value, step: 3, pipeline: pipeline, class: "na"});
        }
    }

    chooseClass(event) {
        if (event.target.value !== "na") {
            var pipeline = this.state.state + ">" + this.state.school + ">" + event.target.value;
            this.setState({class: event.target.value, step: 4, pipeline: pipeline});
        }
    }

    addImage(event) {}

    removeImage(event) {}

    moveStep(amount) {
        var currentStep = this.state.step + amount;
        var pipeline = [this.state.state, this.state.school, this.state.class];

        switch (currentStep) {
            case 1:
                this.setState({state: "na", school: "na", class: "na", pipeline: ""});
                break;
            case 2:
                this.setState({school: "na", class: "na", pipeline: pipeline[0]});
                break;
            case 3:
                this.setState({
                    class: "na",
                    pipeline: pipeline[0] + ">" + pipeline[1]
                });
                break;
        }
        if (currentStep < 1) 
            currentStep = 1;
        this.setState({step: currentStep});
    }

    submitAct(firstName, act) {
        if ((false && firstName === "") || act === "") {
            this.setState({error: "Fill out all fields before submitting."});
        } else {
            this.setState({error: ""});
            var rtn = shareAct(firstName, act, "class id");
            if (rtn.err) {
                this.setState({error: rtn.err});
            } else {
                // TODO: Show a success message
                this.setState({step: 5});
            }
        }
    }

    render() {
        return (
            <div>
                <div id="progress-bar">
                    <div
                        className={this.state.step === 1
                        ? "progress-item step-active"
                        : this.state.state === "na"
                            ? "progress-item step-incomplete"
                            : "progress-item step-complete"}
                        id="progress-state">
                        1
                    </div>
                    <div
                        className={this.state.step === 2
                        ? "progress-item step-active"
                        : this.state.school === "na"
                            ? "progress-item step-incomplete"
                            : "progress-item step-complete"}
                        id="progress-school">
                        2
                    </div>
                    <div
                        className={this.state.step === 3
                        ? "progress-item step-active"
                        : this.state.class === "na"
                            ? "progress-item step-incomplete"
                            : "progress-item step-complete"}
                        id="progress-class">
                        3
                    </div>
                    <div
                        className={this.state.step === 4
                        ? "progress-item step-active"
                        : this.state.class === "na"
                            ? "progress-item step-incomplete"
                            : "progress-item step-complete"}
                        id="progress-act">
                        4
                    </div>
                </div>
                <p id="pipeline">{this.state.pipeline}</p>
                {this.state.step === 1 && <Step1 action={this.chooseState}/>}
                {this.state.step === 2 && <Step2 action={this.chooseSchool}/>}
                {this.state.step === 3 && <Step3 action={this.chooseClass}/>}
                {this.state.step === 4 && (<Step4
                    action={this.chooseState}
                    addImage={this.addImage}
                    removeImage={this.removeImage}
                    submit={this.submitAct}
                    error={this.state.error}/>)}
                {this.state.step < 5 && <button id="back-btn" onClick={() => this.moveStep(-1)}>
                    BACK
                </button>}
                {this.state.step < 5 && <a href="/" id="request-btn">
                    Don't See Class/School?
                </a>}
                {this.state.step === 5 && <StepConfirm />}
                {/* TODO: Put a link to view others from your class */}
            </div>
        );
    }
}

export default SharePage;
