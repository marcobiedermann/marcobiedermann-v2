/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';
import Skills from '.';
import skills from './__fixtures__';

describe('Skills component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Skills skills={skills} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
