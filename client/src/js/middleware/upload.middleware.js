import { uploadService } from '../services/upload.service';
import { callInProgress } from '../utils/dispatch';

// Middleware handles the service request for upload and dispatches response to store
const uploadServiceMiddleware = service => store => next => action => {
    switch (action.type) {
        case 'UPLOAD_FILE': {
            callInProgress(store, true);
            uploadService(action.payload) // Calls upload service
                .then(data => { 
                    if (data /*  && data.status === 'COMPLETED' */) {
                        store.dispatch({
                            type: 'UPLOAD',
                            payload: {
                                uploadResponseData: data
                            }
                        });
                    } else {
                        // Useful to have a different store property for error handling of the status
                        // but for this case we'll use the same store property `uploadResponseData`
                        store.dispatch({
                            type: 'UPLOAD_ERROR',
                            payload: {
                                uploadResponseData: data
                            }
                        });
                    }
                    callInProgress(store, false);
                })
                .catch(error => {
                    store.dispatch({
                        type: 'UPLOAD_ERROR',
                        payload: {
                            uploadResponseData: error // Again, using the same store property...
                        }
                    });
                    callInProgress(store, false);
                });
            break;
        }
        default:
            break;  
    }
    next(action);
};

const uploadMiddleware = uploadServiceMiddleware(uploadService)
export {
    uploadMiddleware
};