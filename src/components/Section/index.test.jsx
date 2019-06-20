import React from 'react';
import renderer from 'react-test-renderer';
import Section from '.';

describe('Section component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Section />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render dark appearance correctly', () => {
    const tree = renderer.create(<Section appearance="dark" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render light appearance correctly', () => {
    const tree = renderer.create(<Section appearance="light" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render full mode correctly', () => {
    const tree = renderer.create(<Section isFull />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
