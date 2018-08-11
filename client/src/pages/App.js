import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {
  Header,
  Container,
  DragDrop,
  FileUploadButton,
  NotificationMessage,
  Footer
} from '../react-components';
import * as Actions from '../js/action-creators';
import '../assets/css/reset.css';
import '../assets/css/fonts.css';
import '../assets/css/app.css';

const MESSAGES = {
  'INVALID' : 'Invalid file type! File types accepted (.txt, .rtf)',
  'SUCCESS': 'Upload successful!',
  'FAILED': 'Upload failed! Please try again'
};

class App extends Component {
  state = { 
    showMessage: false,
    callInProgress: this.props.callInProgress
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.callInProgress && nextProps.uploadResponseData) {
      if (nextProps.uploadResponseData.status === 'COMPLETED') {
        this.props.history.push('/result');
      } else if (nextProps.uploadResponseData.status === 'FAILED') {
        this.setState((prevState) => {
          return {
            message: {
              text: MESSAGES['FAILED'],
              type: 'error'
            },
            showMessage: true
          }
        });
      }  
    }
  }

  handleDragDrop = (file) => {
    this.uploadValidator(file);
  }

  handleFileLoader = () => {
    const file = this.fileUploadButton;
    this.uploadValidator(file);
  }

  uploadValidator = (data) => {
    if (data.files[0].type.match(/text\//gi)) {
      const content = new FormData();
      content.append('file', data.files[0]);
      
      this.setState((prevState) => {
        return {
          showMessage: false
        }
      });
      // Call upload action handle service request
      this.props.upload(content);
    } else {
      this.setState((prevState) => {
        return {
          message: {
            text: MESSAGES['INVALID'],
            type: 'error'
          },
          showMessage: true
        }
      });
    }   
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          {this.state.showMessage && 
            <NotificationMessage className={this.state.message.type}>
              {this.state.message.text}
            </NotificationMessage>
          }
          <DragDrop 
            handleDrop={this.handleDragDrop}
            loading={this.props.callInProgress}
          />
          <FileUploadButton
            fileUploadRef={file => this.fileUploadButton = file}
            handleFile={this.handleFileLoader}
            disabled={this.props.callInProgress}
          />
        </Container>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (appState) => {
  return {
    callInProgress: appState.callInProgress,
    uploadResponseData: appState.uploadResponseData
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    upload: Actions.upload
  }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
