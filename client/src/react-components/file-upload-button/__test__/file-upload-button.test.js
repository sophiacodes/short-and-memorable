import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FileUploadButton from '../';

Enzyme.configure({ adapter: new Adapter() });

it('<FileUploadButton /> component to render correctly when disabled', () => {
    const props = {
        disabled: true,
        handleFile: jest.fn(),
        fileUploadRef: jest.fn()
    };
    const tree = renderer
        .create(
            <FileUploadButton {...props} />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
 
it('<FileUploadButton /> component to render correctly when undisabled', () => {
    const props = {
        disabled: false,
        handleFile: jest.fn(),
        fileUploadRef: jest.fn()
    };
    const tree = renderer
        .create(
            <FileUploadButton {...props} />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('<FileUploadButton /> component ensure handleFile.fn() can call prop', () => {
    const props = {
        disabled: true,
        handleFile: jest.fn(),
        fileUploadRef: jest.fn()
    };
    const wrapper = mount(
      <FileUploadButton
        {...props}
      />);
    wrapper.find(FileUploadButton).instance().handleFileSelection();

    expect(wrapper.find('FileUploadButton').props().handleFile).toEqual(props.handleFile);
    expect(props.handleFile).toHaveBeenCalledTimes(1);
});