/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';
import Projects from '..';
import projects from '../__fixtures__';

describe('Projects component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Projects projects={projects} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render empty projects correctly', () => {
    const tree = renderer.create(<Projects projects={[]} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
