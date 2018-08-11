import sinon from 'sinon';
import * as Actions from '../';
import store from '../../store/';
// import { MockData } from './__mocks__/actions.mock';
 
describe('actions', () => {
 
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
 
        const mockData = ''; // MockData.UPLOAD_FILE;
 
        store.dispatch(Actions.upload(mockData));
        expect(store.dispatch).toHaveBeenCalled();
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith({
            type: 'UPLOAD_FILE',
            payload: {
                data: mockData
            }
        });
 
    });

});