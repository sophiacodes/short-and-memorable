import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {
  Header,
  Container,
  Table,
  Button,
  Footer
} from '../react-components';

import '../assets/css/reset.css';
import '../assets/css/fonts.css';
import '../assets/css/app.css';

class Result extends Component {
  state = {
    data: {},
    headers: [
      'Word',
      'Occurrence'
    ]
  };
  componentWillMount() {
    if (this.props.uploadResponseData === undefined) {
      this.props.history.push('/');
    } else {
      this.setState((prevState, props) => {
        return {
          data: props.uploadResponseData
        }
      });
    }
  }
  handleClick = () => {
    this.props.history.push('/');
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          {Object.keys(this.state.data).length !== 0 && (
            <Fragment>
              <Table 
                headers={this.state.headers}
                data={this.state.data.counts}
                caption={`Total word count: ${this.state.data.totalCount}`}
              />
            </Fragment>
          )}
          <Button 
            value="Back"
            onClick={this.handleClick}
          />
        </Container>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (appState) => {
  return {
    uploadResponseData: appState.uploadResponseData
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Result));
