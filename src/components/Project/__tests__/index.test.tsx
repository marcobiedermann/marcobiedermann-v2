/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';
import Project from '..';
import project from '../__fixtures__';

describe('Project component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Project {...project} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
