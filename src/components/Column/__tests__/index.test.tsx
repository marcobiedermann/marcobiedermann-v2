/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';
import Column from '..';

describe('Column component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Column />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
