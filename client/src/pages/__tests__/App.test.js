import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount, shallow } from 'enzyme';
import { App } from '../App';
import * as Actions from '../../js/action-creators';

import configureMockStore from 'redux-mock-store';
import { wrap } from 'module';
const mockStore = configureMockStore();
 
Enzyme.configure({ adapter: new Adapter() });

describe('<App /> Component', () => { 

    let wrapper, store;

    beforeEach(() => {
        const initialState = {
            callInProgress: false
        };
        store = mockStore(initialState);

        wrapper = shallow(
            <App store={store} />
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
});

