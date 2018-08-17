import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount, shallow } from 'enzyme';
import { Result } from '../Result';
import * as Actions from '../../js/action-creators';

import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();
 
Enzyme.configure({ adapter: new Adapter() });

describe('<Result /> Component', () => { 

    let wrapper, store, history;

    beforeEach(() => {
        const initialState = {
            callInProgress: false
        };
        store = mockStore(initialState);
        history = { push: jest.fn() };

        wrapper = shallow(
            <Result store={store} history={history} />
        );
    });

    it('<Result /> renders without crashing', () => {
        const div = document.createElement('div');
        render(
            <Result history={history} />
         ,div);
        unmountComponentAtNode(div);
    });

    it('<Result /> renders() initial components', () => {
        const wrapper = shallow(<Result history={history} />);

        expect(wrapper.find('Header').length).toEqual(1);
        expect(wrapper.find('Container').length).toEqual(1);
        expect(wrapper.find('Table').length).toEqual(0);
        expect(wrapper.find('Button').length).toEqual(1);
        expect(wrapper.find('Footer').length).toEqual(1);
    });

    it('test', () => {
        const mockData = { 
            data: {
                counts: {
                    item1: 'Test 1',
                    item2: 'Test 2',
                    item3: 'Test 3'
                },
                totalCount: 3
            },
            caption: "Total word count: 3",
            headers: ['Header 1', 'Header 2']
        };
        const wrapper = shallow(<Result uploadResponseData={mockData.data} />);

        wrapper.setProps({
            uploadResponseData: mockData.data
        })
        wrapper.setState({ 
            data: mockData.data,
            caption: mockData.data.totalCount,
            headers: mockData.headers
        });

        expect(wrapper.find('Table').props().headers).toEqual(mockData.headers);
        expect(wrapper.find('Table').props().data).toEqual(mockData.data.counts);
        expect(wrapper.find('Table').props().caption).toEqual(mockData.caption);
    });
});

