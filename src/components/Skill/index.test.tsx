/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-unused-vars */

import React from 'react';
import renderer from 'react-test-renderer';
import Skill from '.';
import skill from './__fixtures__';

describe('Skill component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Skill {...skill} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
