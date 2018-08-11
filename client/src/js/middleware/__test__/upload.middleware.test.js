import sinon from 'sinon';
import * as middleware from '../upload.middleware';

describe('upload middleware for upload servce handling', () => {
    let server;

    beforeEach(() => {
        spyOn(middleware, 'uploadMiddleware').and.callThrough();
    });

    it('should call UPLOAD_FILE action', () => {
        const fakeStore = { dispatch: sinon.spy(), getState: sinon.spy()};
        const fakeNext = sinon.spy();
        const fakeAction = { type: 'UPLOAD_FILE'};

        middleware.uploadMiddleware(fakeStore)(fakeNext)(fakeAction);

        expect(fakeNext.calledOnce).toEqual(true);
    })
})
