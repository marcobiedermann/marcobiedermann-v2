/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';
import Experiences from '..';
import experiences from '../__fixtures__';

describe('Experiences component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Experiences experiences={experiences} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
