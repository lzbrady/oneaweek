import React, {Component} from "react";
import {Editor, EditorState, RichUtils, ContentState} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import {stateFromHTML} from 'draft-js-import-html';

import "./Draft.css";

class TextEditor extends Component {

    constructor() {
        super();

        this.state = {
            editorState: EditorState.createEmpty(),
            isBold: false,
            isItalic: false,
            isUnderline: false,
            isHeadingOne: false,
            isHeadingTwo: false,
            isHeadingThree: false,
            isCode: false,
            isBlockQuote: false,
            prevProps: ""
        };

        this.onChange = (editorState) => this.setState({editorState});
        this.myBlockStyleFn = this
            .myBlockStyleFn
            .bind(this);
    }

    componentDidUpdate() {
        if (this.props.content !== this.state.prevProps) {
            this.setState({
                editorState: EditorState.createWithContent(stateFromHTML(this.props.content)),
                prevProps: this.props.content
            });
        }
    }

    myBlockStyleFn(contentBlock) {
        const type = contentBlock.getType();
        if (type === 'blockquote') {
            return 'custom-block-quote';
        }
    }

    _onBoldClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
    }

    _onItalicClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC"));
    }

    _onUnderlineClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE"));
    }

    _onToggleCode = () => {
        this.onChange(RichUtils.toggleCode(this.state.editorState));
    }

    _onHeadingOneClick = () => {
        this.setState({
            isHeadingOne: !this.state.isHeadingOne,
            isHeadingTwo: false,
            isHeadingThree: false
        });
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, "header-one"));
    }

    _onHeadingTwoClick = () => {
        this.setState({
            isHeadingOne: false,
            isHeadingTwo: !this.state.isHeadingTwo,
            isHeadingThree: false
        });
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, "header-two"));
    }

    _onHeadingThreeClick = () => {
        this.setState({
            isHeadingOne: false,
            isHeadingTwo: false,
            isHeadingThree: !this.state.isHeadingThree
        });
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, "header-three"));
    }

    _onBlockQuoteClick = () => {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, "blockquote"));
    }

    _onOLClick = () => {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, "ordered-list-item"));
    }

    _onULClick = () => {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, "unordered-list-item"));
    }

    handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command);

        if (newState) {
            this.onChange(newState);
            return "handled";
        }

        return "not-handled";
    }

    postBlog = (markup) => {
        let options = {
            blockRenderers: {
                blockquote: (block) => {
                    return '<blockquote class="custom-block-quote">' + block.getText() + '</blockquote>';
                }
            }
        };

        this
            .props
            .post(stateToHTML(this.state.editorState.getCurrentContent(), options));
    }

    render() {
        return <div>
            <button
                onClick={this._onHeadingOneClick}
                className={this.state.isHeadingOne
                ? "text-editor-style-btn-active"
                : "text-editor-style-btn"}>H1</button>
            <button
                onClick={this._onHeadingTwoClick}
                className={this.state.isHeadingTwo
                ? "text-editor-style-btn-active"
                : "text-editor-style-btn"}>H2</button>
            <button
                onClick={this._onHeadingThreeClick}
                className={this.state.isHeadingThree
                ? "text-editor-style-btn-active"
                : "text-editor-style-btn"}>H3</button>
            <button onClick={this._onBlockQuoteClick} className="text-editor-style-btn">Quote</button>
            <button onClick={this._onToggleCode} className="text-editor-style-btn">&lt;/&gt;</button>
            <br/>
            <button onClick={this._onBoldClick} className="text-editor-style-btn">Bold</button>
            <button onClick={this._onItalicClick} className="text-editor-style-btn">Italic</button>
            <button onClick={this._onUnderlineClick} className="text-editor-style-btn">Underline</button>
            <button onClick={this._onOLClick} className="text-editor-style-btn">1.2.3.</button>
            <button onClick={this._onULClick} className="text-editor-style-btn">Bullets</button>
            <Editor
                editorState={this.state.editorState}
                onChange={this.onChange}
                handleKeyCommand={this.handleKeyCommand}
                blockStyleFn={this.myBlockStyleFn}/>
            <button
                onClick={this.postBlog}
                className="blog-review-save-btn blog-review-btn">Post</button>
        </div>
    }
}

export default TextEditor;
