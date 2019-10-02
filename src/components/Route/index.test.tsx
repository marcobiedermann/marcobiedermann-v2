/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';
import Route from '.';
import route from './__fixtures__';

describe('Route component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Route {...route} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
