/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';
import Navigation from '..';

describe('Navigation component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Navigation routes={[]} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
