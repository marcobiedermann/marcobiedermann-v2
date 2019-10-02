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
        id: '9f16aa77-f47a-431f-a8a2-da6eeb655bae',
        name: 'Previous',
        path: '/previous',
      },
      {
        id: '58369d13-590c-4c17-bad7-32b8eefe8d3a',
        name: 'Next',
        path: '/next',
      },
    ];
    const tree = renderer.create(<Pagination routes={routes} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
