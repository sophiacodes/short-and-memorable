import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './js/store';
import App from './pages/App';
import Result from './pages/Result';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Fragment>
                <Route exact path="/" component={App}/>
                <Route path="/result" component={Result}/>
            </Fragment>
        </Router>
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
