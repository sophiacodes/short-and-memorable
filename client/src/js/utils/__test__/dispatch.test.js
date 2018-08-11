import sinon from 'sinon';
import { callInProgress } from '../dispatch';
import store from '../../store/';
 
describe('utils', () => {
 
    let server;
 
    beforeEach(() => {
        server = sinon.fakeServer.create();
        spyOn(store, 'dispatch');
        store.dispatch.calls.reset();
        server.autoRespond = true;
    });
 
    afterEach(() => {
        server.restore();
    });
 
    it('calls UPLOAD_FILE action with payload', () => {

        store.dispatch(callInProgress(store, true));
        expect(store.dispatch).toHaveBeenCalled();
        expect(store.dispatch).toHaveBeenCalledTimes(2);
        expect(store.dispatch).toHaveBeenCalledWith({
            type: 'CALL_IN_PROGRESS',
            payload: {
                callInProgress: true
            }
        });
    });

});