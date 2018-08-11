import React from 'react';
import Footer from '../';
import renderer from 'react-test-renderer';

it('renders <Footer /> correctly', () => {
  const tree = renderer
    .create(<Footer />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});