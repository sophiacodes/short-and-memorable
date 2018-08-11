import React from 'react';
import renderer from 'react-test-renderer';
import FileUploadButton from '../';
 
it('<FileUploadButton> component to render correctly when disabled', () => {
    const props = {
        className: "file-upload-button",
        id: "file-upload",
        disabled: true,
        onChange: jest.fn()
    };
    const tree = renderer
        .create(
            <FileUploadButton {...props} />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
 
it('<FileUploadButton> component to render correctly when undisabled', () => {
    const props = {
        className: "file-upload-button",
        id: "file-upload",
        disabled: false,
        onChange: jest.fn()
    };
    const tree = renderer
        .create(
            <FileUploadButton {...props} />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});