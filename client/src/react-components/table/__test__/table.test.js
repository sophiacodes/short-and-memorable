import React from 'react';
import Table from '../';
import renderer from 'react-test-renderer';

it('renders <Table /> correctly', () => {
  const header = [
      'Header 1',
      'Header 2'
  ];
  const data = {
    'Key 1': 'Item 1',
    'Key 2': 'Item 2'
  };
  const caption = 'Caption this!';
  const footer = 'This is a footer';
  const tree = renderer
    .create(<Table 
        headers={header}
        data={data}
        caption={caption}
        footer={footer}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});