import React from 'react';
import Container from '../';
import renderer from 'react-test-renderer';

it('renders <Container> correctly', () => {
  const tree = renderer
    .create(<Container><p>P element inside container test</p></Container>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});