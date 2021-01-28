/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';
import Logo from '..';
import project from '../__fixtures__';

describe('Logo component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Logo {...project} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
