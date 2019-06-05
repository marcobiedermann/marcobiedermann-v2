import React from 'react';
import renderer from 'react-test-renderer';
import Section from '.';

describe('Section component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Section />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
