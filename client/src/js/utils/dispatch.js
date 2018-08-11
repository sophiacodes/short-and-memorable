export const callInProgress = (store, inProgress) => {
    store.dispatch({
        type: 'CALL_IN_PROGRESS',
        payload: {
            callInProgress: inProgress
        }
    });
}