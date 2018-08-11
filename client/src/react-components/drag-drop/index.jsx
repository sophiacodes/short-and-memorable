import React, { Component } from 'react';
import './drag-drop.css';

class DragDrop extends Component {
    onDrop = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const data = e.dataTransfer;
        this.props.handleDrop(data);
    }
    onDragOver = (e) => {
        e.stopPropagation();
        e.preventDefault();
    }
    onDragEnter = (e) => {
        e.stopPropagation();
        e.preventDefault();
    }
    render() {
        const loadingClassName = (this.props.loading) ? 'loading' : '';
        return (
            <div 
              className={`drag-drop-container ${loadingClassName}`}
              onDrop={this.onDrop} 
              onDragOver={this.onDragOver} 
              onDragEnter={this.onDragEnter}
            >
                <p className="drag-label">{this.props.loading ? 'Loading...' : 'Drag file to upload'}</p>
            </div>
        )
    }
}

export default (DragDrop);