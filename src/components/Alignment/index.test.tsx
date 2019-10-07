/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';
import Alignment from '.';

describe('Alignment component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Alignment />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render content correctly', () => {
    const tree = renderer.create(<Alignment>Content</Alignment>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render align `center` correctly', () => {
    const tree = renderer.create(<Alignment align="center" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render align `end` correctly', () => {
    const tree = renderer.create(<Alignment align="end" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render align `start` correctly', () => {
    const tree = renderer.create(<Alignment align="start" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render justify `center` correctly', () => {
    const tree = renderer.create(<Alignment justify="center" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render justify `end` correctly', () => {
    const tree = renderer.create(<Alignment justify="end" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render justify `space-between` correctly', () => {
    const tree = renderer.create(<Alignment justify="space-between" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render justify `start` correctly', () => {
    const tree = renderer.create(<Alignment justify="start" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
