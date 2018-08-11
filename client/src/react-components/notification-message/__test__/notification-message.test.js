import React from 'react';
import NotificationMessage from '../';
import renderer from 'react-test-renderer';

it('renders <NotificationMessage /> correctly', () => {
  const tree = renderer
    .create(<NotificationMessage className="error">This is a notification message</NotificationMessage>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});