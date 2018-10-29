import React, {Component} from "react";

class Step1 extends Component {
    constructor() {
        super();
        this.state = {
            hasImage: false,
            thumbnailSrc: "",
            firstName: "",
            deed: "",
            imageError: "",
            fileSrc: undefined
        };

        this.selectFile = this
            .selectFile
            .bind(this);
    }

    selectFile(event) {
        // Undefined on cancel
        if (event.target.files[0]) {
            if (event.target.files[0].type.includes("image")) {
                // Image selected
                const file = this.refs.fileUploader.files[0];

                if (!file.type.includes("png") && !file.type.includes("PNG") && !file.type.includes("JPEG") && !file.type.includes("jpeg") && !file.type.includes("JPG") && !file.type.includes("jpg")) {
                    this.setState({imageError: "Image must be a .png or .jpg"});
                } else {
                    this.setState({imageError: ""});
                    var reader = new FileReader();
                    reader.onload = e => {
                        this.setState({hasImage: true, hasVideo: false, thumbnailSrc: e.target.result, fileSrc: file});
                    };
                    reader.readAsDataURL(file);
                }
            }
        }
    }

    render() {
        return (
            <div id="act-form">
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
                    placeholder="Share your act!"
                    onChange={(e) => this.setState({deed: e.target.value})}/>
                <div id="form-image-container">
                    {this.state.hasImage && <img src={this.state.thumbnailSrc} alt="Upload Preview" id="form-image"/>}
                    {this.state.imageError !== "" && <p className="error">{this.state.imageError}</p>}
                    <div
                        onClick={() => document.getElementById("add-image-btn").click()}
                        id="add-image-div">
                        Add Image
                    </div>
                    <div
                        onClick={() => {
                        this.setState({hasImage: false, hasVideo: false, thumbnailSrc: "", fileSrc: undefined});
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
                    onClick={() => this.props.submit(this.state.firstName, this.state.deed, this.state.fileSrc)}>
                    SUBMIT
                </button>
            </div>
        );
    }
}

export default Step1;
