import React, { Component, Fragment } from 'react';
import './file-upload-button.css';

class FileUploadButton extends Component {
    handleFileSelection = () => {
        this.props.handleFile()
    }
    render() {
        return (
            <Fragment>
              <input
                id="file-upload" 
                type="file"
                className="file-upload-button"
                ref={this.props.fileUploadRef}
                disabled={this.props.disabled}
                onChange={this.handleFileSelection}
              />
              <label htmlFor="file-upload">Choose file</label>
            </Fragment>
        )
    }
}

export default (FileUploadButton);