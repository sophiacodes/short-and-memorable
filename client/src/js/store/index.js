// https://redux.js.org/advanced/middleware
import { createStore, applyMiddleware } from 'redux';
import { uploadMiddleware } from '../middleware/upload.middleware';
import reducer from './reducer';

const store = createStore(
    reducer,
    // applyMiddleware() tells createStore() how to handle middleware
    applyMiddleware(uploadMiddleware)
)

export default store;