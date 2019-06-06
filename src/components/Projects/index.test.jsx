import React from 'react';
import renderer from 'react-test-renderer';
import Projects from '.';

describe('Projects component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Projects />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
