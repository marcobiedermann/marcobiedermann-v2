import React from 'react';
import renderer from 'react-test-renderer';
import Navigation from '.';

describe('Navigation component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Navigation />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
