/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';
import Button from '.';

describe('Button component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Button />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render link using `href`', () => {
    const tree = renderer.create(<Button href="#" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render link using `to`', () => {
    const tree = renderer.create(<Button to="#" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
