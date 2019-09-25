/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '.';

describe('Layout component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Layout />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
