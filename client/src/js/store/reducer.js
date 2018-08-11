const defaultState = {
    callInProgress: false,
    DEVELOPMENT: /localhost/.test(window.location.hostname)
};
 
const getState = (state, action) => {
    let newState = state;
    switch (action.type) {
        case 'UPLOAD':
        case 'UPLOAD_ERROR':
        case 'CALL_IN_PROGRESS':
            newState = { ...state, ...action.payload };
            break;
        default:
            break;
    }
    return newState;
};
 
const getAppState = (state = defaultState, action) => {
    return getState(state, action);
};
 
export default getAppState;