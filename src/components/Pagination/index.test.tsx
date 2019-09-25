/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from '.';

describe('Pagination component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Pagination routes={[]} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render routes correctly', () => {
    const routes = [
      {
        name: 'Previous',
        path: '/previous',
      },
      {
        name: 'Next',
        path: '/next',
      },
    ];
    const tree = renderer.create(<Pagination routes={routes} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
