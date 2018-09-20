import React, {Component} from "react";

class Review extends Component {
    render() {
        return <div className="blog-review-wrapper">
            <div
                className="blog-review-container"
                dangerouslySetInnerHTML={{
                __html: this
                    .props
                    .preview
                    .replace(/(<? *script)/gi, 'illegalscript')
            }}></div>
            <button
                className="blog-review-btn blog-review-keep-editing-btn"
                onClick={this.props.edit}>Keep Editing</button>
            <button
                className="blog-review-btn blog-review-save-btn"
                onClick={this.props.save}>Save</button>
        </div>
    }
}

export default Review;
