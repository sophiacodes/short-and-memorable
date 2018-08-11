import * as services from '../upload.service';

describe('test upload service', () => {
    beforeEach(() => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({status: 'COMPLETED'}));
    });

    it('get response from upload request', async () => {

        services.uploadService('file').then(response => {
            expect(typeof response).to.equal('object');
            expect(response.status).to.equal('COMPLETED');
        });
    });
})