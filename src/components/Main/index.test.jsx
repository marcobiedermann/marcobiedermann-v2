import React from 'react';
import renderer from 'react-test-renderer';
import Main from '.';

describe('Main component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Main />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
