import React, {Component} from "react";

class Step1 extends Component {
    constructor() {
        super();
        this.state = {
            hasImage: false,
            thumbnailSrc: "",
            firstName: "",
            deed: ""
        };

        this.selectFile = this
            .selectFile
            .bind(this);
    }

    selectFile(event) {
        if (event.target.files[0].type.includes("image")) {
            var reader = new FileReader();
            reader.onload = e => {
                this.setState({hasImage: true, thumbnailSrc: e.target.result});
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    render() {
        return (
            <div id="act-form">
                <h1>Share Your Act</h1>
                <p id="error">{this.props.error}</p>
                <input
                    id="first-name-input"
                    type="text"
                    name="first_name"
                    onChange={(e) => this.setState({firstName: e.target.value})}
                    placeholder="First Name"/>
                <textarea
                    type="text"
                    name="message"
                    placeholder="What was your good deed?"
                    onChange={(e) => this.setState({deed: e.target.value})}/>
                <div id="form-image-container">
                    {this.state.hasImage && (<img src={this.state.thumbnailSrc} alt="Preview" id="form-image"/>)}
                    <div
                        onClick={() => document.getElementById("add-image-btn").click()}
                        id="add-image-div">
                        Add Image
                    </div>
                    <div
                        onClick={() => {
                        this.setState({hasImage: false, thumbnailSrc: ""});
                        this.props.removeImage();
                    }}
                        id="remove-image-div">
                        Remove Image
                    </div>
                    <input id="add-image-btn" type="file" onChange={this.selectFile}/>
                </div>
                <button
                    id="submit-form-btn"
                    onClick={() => this.props.submit(this.state.firstName, this.state.deed)}>
                    SUBMIT
                </button>
            </div>
        );
    }
}

export default Step1;
