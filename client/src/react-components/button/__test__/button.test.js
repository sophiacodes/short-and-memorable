import React from 'react';
import Button from '../';
import renderer from 'react-test-renderer';

it('renders <Button> correctly', () => {
  const tree = renderer
    .create(<Button value="A button value" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});