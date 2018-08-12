import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DragDrop from '../';

Enzyme.configure({ adapter: new Adapter() });

it('<DragDrop /> component to render correctly when loading', () => {
    const props = {
        loading: false,
        className: "drag-drop-container",
        onDrop: jest.fn(),
        onDragOver: jest.fn(),
        onDragEnter: jest.fn()
    };
    const tree = renderer
        .create(
            <DragDrop {...props} />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('<DragDrop /> component to render correctly when not loading', () => {
    const props = {
        loading: true,
        className: "drag-drop-container",
        onDrop: jest.fn(),
        onDragOver: jest.fn(),
        onDragEnter: jest.fn()
    };
    const tree = renderer
        .create(
            <DragDrop {...props} />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('<DragDrop /> component ensure onDrop.fn() can call prop', () => {
    const props = {
        loading: true,
        handleDrop: jest.fn()
    };
    const wrapper = mount(
      <DragDrop
        {...props}
      />);
    const e = { 
        stopPropagation: jest.fn(),
        preventDefault: jest.fn(),
        dataTransfer: {}
    };
    wrapper.find(DragDrop).instance().onDrop(e);

    expect(e.stopPropagation).toBeCalled();
    expect(e.preventDefault).toBeCalled();
    expect(wrapper.find('DragDrop').props().handleDrop).toEqual(props.handleDrop);
    expect(props.handleDrop).toHaveBeenCalledTimes(1);
});

it('<DragDrop /> component ensure onDragOver.fn() prevents default action', () => {
    const props = {
        loading: true,
        handleDrop: jest.fn()
    };
    const wrapper = mount(
      <DragDrop
        {...props}
      />);
    const e = { 
        stopPropagation: jest.fn(),
        preventDefault: jest.fn()
    };
    wrapper.find(DragDrop).instance().onDragOver(e);

    expect(e.stopPropagation).toBeCalled();
    expect(e.preventDefault).toBeCalled();
});

it('<DragDrop /> component ensure onDragEnter.fn() prevents default action', () => {
    const props = {
        loading: true,
        handleDrop: jest.fn()
    };
    const wrapper = mount(
      <DragDrop
        {...props}
      />);
    const e = { 
        stopPropagation: jest.fn(),
        preventDefault: jest.fn()
    };
    wrapper.find(DragDrop).instance().onDragEnter(e);

    expect(e.stopPropagation).toBeCalled();
    expect(e.preventDefault).toBeCalled();
});