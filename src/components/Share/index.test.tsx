/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';
import Share from '.';
import share from './__fixtures__';

describe('Share component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Share {...share} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
