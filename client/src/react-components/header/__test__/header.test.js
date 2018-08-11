import React from 'react';
import Header from '../';
import renderer from 'react-test-renderer';

it('renders <Header /> correctly', () => {
  const tree = renderer
    .create(<Header />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});