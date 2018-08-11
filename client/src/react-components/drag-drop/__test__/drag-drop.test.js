import React from 'react';
import renderer from 'react-test-renderer';
import DragDrop from '../';
 
it('<DragDrop> component to render correctly when loading', () => {
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

it('<DragDrop> component to render correctly when not loading', () => {
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