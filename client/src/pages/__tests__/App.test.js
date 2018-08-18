import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount, shallow } from 'enzyme';
import { App } from '../App';
import * as Actions from '../../js/action-creators';

import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

Enzyme.configure({ adapter: new Adapter() });

describe('<App /> Component', () => { 

    let wrapper, store, history;

    beforeEach(() => {
        const initialState = {
            callInProgress: false
        };
        store = mockStore(initialState);
        history = { push: jest.fn() };

        wrapper = shallow(
            <App store={store} history={history} />
        );
    });

    it('<App /> renders without crashing', () => {
        const div = document.createElement('div');
        render(
            <App />
         ,div);
        unmountComponentAtNode(div);
    });

    it('<App /> renders() initial components', () => {
        expect(wrapper.find('Header').length).toEqual(1);
        expect(wrapper.find('Container').length).toEqual(1);
        expect(wrapper.find('DragDrop').length).toEqual(1);
        expect(wrapper.find('FileUploadButton').length).toEqual(1);
        expect(wrapper.find('Footer').length).toEqual(1);
        expect(wrapper.find('NotificationMessage').length).toEqual(0);
    });

    it('<App /> shows <NotificationMessage /> component when showMessage state is true', () => {
        wrapper.setState({ 
            showMessage: true,
            message: {
                type: 'ERROR',
                text: 'Something went wrong!'
            }
        });
        expect(wrapper.find('NotificationMessage').length).toEqual(1);
    });

    it('<App /> ensure page navigates to the result page if api status is completed', () => {
        const mockData = { 
            data: {
                counts: {
                    item1: 'Test 1',
                    item2: 'Test 2',
                    item3: 'Test 3'
                },
                totalCount: 3,
                status: 'COMPLETED'
            },
            caption: 'Total word count: 3',
            headers: ['Header 1', 'Header 2']
        };
        const wrapper = shallow(<App uploadResponseData={mockData.data} history={history} />);

        wrapper.setProps({
            uploadResponseData: mockData.data,
            callInProgress: false
        });
        expect(history.push.mock.calls[0]).toEqual(['/result']);
    });

    it('<App /> ensure page display error message if api status returns failed', () => {
        const mockData = { 
            data: {
                counts: {
                    item1: 'Test 1',
                    item2: 'Test 2',
                    item3: 'Test 3'
                },
                totalCount: 3,
                status: 'FAILED'
            },
            caption: 'Total word count: 3',
            headers: ['Header 1', 'Header 2'],
            MESSAGES: {
                'INVALID' : 'Invalid file type! File types accepted (.txt, .rtf)',
                'SUCCESS': 'Upload successful!',
                'FAILED': 'Upload failed! Please try again'
            }
        };
        const wrapper = shallow(<App uploadResponseData={mockData.data} history={history} />);

        wrapper.setProps({
            uploadResponseData: mockData.data,
            callInProgress: false
        })
        wrapper.setState({ 
            text: mockData.MESSAGES['FAILED'],
            showMessage: true,
            type: 'error'
        });

        expect(wrapper.find('NotificationMessage').length).toEqual(1);
    });
});

