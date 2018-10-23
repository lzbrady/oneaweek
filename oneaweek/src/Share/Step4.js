import React, {Component} from "react";

class Step1 extends Component {
    constructor() {
        super();
        this.state = {
            hasImage: false,
            thumbnailSrc: "",
            firstName: "",
            deed: "",
            imageError: ""
        };

        this.selectFile = this
            .selectFile
            .bind(this);
    }

    selectFile(event) {
        if (event.target.files[0] && event.target.files[0].type.includes("image")) {
            const file = this.refs.fileUploader.files[0];

            if (!file.type.includes("png") && !file.type.includes("PNG") 
                && !file.type.includes("JPEG") && !file.type.includes("jpeg") 
                && !file.type.includes("JPG") && !file.type.includes("jpg")) {
                this.setState({imageError: "Image must be a PNG or JPG"});
            } else {
                this.setState({imageError: ""});
                var reader = new FileReader();
                reader.onload = e => {
                    this.setState({hasImage: true, thumbnailSrc: e.target.result, imageSrc: file});
                };
                reader.readAsDataURL(file);
            }
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
                    {this.state.hasImage && <img src={this.state.thumbnailSrc} alt="Preview" id="form-image"/>}
                    {this.state.imageError !== "" && <p className="error">{this.state.imageError}</p>}
                    <div
                        onClick={() => document.getElementById("add-image-btn").click()}
                        id="add-image-div">
                        Add Image
                    </div>
                    <div
                        onClick={() => {
                        this.setState({hasImage: false, thumbnailSrc: ""});
                        this
                            .props
                            .removeImage();
                    }}
                        id="remove-image-div">
                        Remove Image
                    </div>
                    <input
                        id="add-image-btn"
                        type="file"
                        onChange={this.selectFile}
                        ref="fileUploader"/>
                </div>
                <button
                    id="submit-form-btn"
                    onClick={() => this.props.submit(this.state.firstName, this.state.deed, this.state.imageSrc)}>
                    SUBMIT
                </button>
            </div>
        );
    }
}

export default Step1;
