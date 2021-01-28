/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';
import Logos from '..';
import projects from '../__fixtures__';

describe('Logos component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Logos logos={projects} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
